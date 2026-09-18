// Species is free text in the schema (see content.config.ts) so the
// catalogue can accept any species without a code change. "caine"/"pisica"
// get a dedicated label, grammar and icon; anything else falls back to a
// generic, still-correct rendering rather than assuming dog/cat.

export function speciesLabel(species: string): string {
  if (species === "caine") return "Câine";
  if (species === "pisica") return "Pisică";
  return species.charAt(0).toUpperCase() + species.slice(1);
}

// Used for grammatical agreement ("găsit"/"găsită", "pregătit"/"pregătită").
// Defaults to the masculine/neuter form when the animal's own sex doesn't
// determine it (grammatical gender in Romanian doesn't always track the
// animal's biological sex for less common species) — sex is the closest
// signal available in the data, so it's used as-is.
export function agreementSuffix(sex: "mascul" | "femela"): string {
  return sex === "femela" ? "ă" : "";
}

export function speciesIconName(species: string): "dog" | "cat" | "circle-dot" {
  if (species === "caine") return "dog";
  if (species === "pisica") return "cat";
  return "circle-dot";
}
