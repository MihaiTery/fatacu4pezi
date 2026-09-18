// A small, on-brand confetti burst for the site's two "success beat" moments
// (newsletter subscribe, donate). DOM particles animated via the Web
// Animations API rather than canvas — there are only ever a couple of
// dozen on screen at once, so a canvas layer would be overkill.
// Physics is a simple projectile arc (initial velocity + gravity) sampled
// into keyframes up front, plus a small sinusoidal wobble, echoing the
// "pre-computed keyframe tracks" approach of motion.dev's Confetti component
// without pulling in a React-only dependency for a static Astro site.

const BRAND_COLORS = ["#324f40", "#24392e", "#c4e0f5", "#f2cfdc"];

const GRAVITY = 900; // px/s^2
const DURATION_MS = 1100;
const STEPS = 12;

interface ConfettiOptions {
  particleCount?: number;
  spread?: number; // degrees, launch cone width around straight up
  startVelocity?: number; // px/s
  colors?: string[];
}

export function fireConfetti(origin: Element, options: ConfettiOptions = {}): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const { particleCount = 26, spread = 70, startVelocity = 420, colors = BRAND_COLORS } = options;
  const rect = origin.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const layer = document.createElement("div");
  layer.style.position = "fixed";
  layer.style.inset = "0";
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "80";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  for (let i = 0; i < particleCount; i++) {
    const angleDeg = -90 + (Math.random() - 0.5) * spread;
    const angle = (angleDeg * Math.PI) / 180;
    const velocity = startVelocity * (0.6 + Math.random() * 0.7);
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    const spin = (Math.random() - 0.5) * 720;
    const wobbleAmount = 6 + Math.random() * 8;
    const wobbleSpeed = 10 + Math.random() * 8;
    const size = 5 + Math.random() * 5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    const particle = document.createElement("span");
    particle.style.position = "absolute";
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size * 1.7}px`;
    particle.style.marginLeft = `${-size / 2}px`;
    particle.style.marginTop = `${-size * 0.85}px`;
    particle.style.background = color;
    particle.style.borderRadius = "1.5px";
    layer.appendChild(particle);

    const keyframes: Keyframe[] = [];
    for (let s = 0; s <= STEPS; s++) {
      const progress = s / STEPS;
      const t = progress * (DURATION_MS / 1000);
      const x = vx * t + Math.sin(t * wobbleSpeed + i) * wobbleAmount;
      const y = vy * t + 0.5 * GRAVITY * t * t;
      keyframes.push({
        transform: `translate(${x}px, ${y}px) rotate(${spin * progress}deg)`,
        opacity: progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1,
        offset: progress,
      });
    }

    const animation = particle.animate(keyframes, {
      duration: DURATION_MS,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "forwards",
    });
    animation.onfinish = () => particle.remove();
  }

  window.setTimeout(() => layer.remove(), DURATION_MS + 100);
}
