import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const animals = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/animals" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      species: z.enum(["caine", "pisica"]),
      sex: z.enum(["mascul", "femela"]),
      ageLabel: z.string(), // e.g. "aprox. 2 ani" — free text, since exact birthdates are rarely known
      ageMonthsEstimate: z.number(), // used for sorting/filtering by rough age band
      size: z.enum(["mic", "mediu", "mare"]).optional(), // mostly relevant for dogs
      status: z.enum(["disponibil", "in_tratament", "rezervat", "adoptat"]),
      sterilized: z.boolean(),
      vaccinated: z.boolean(),
      dewormed: z.boolean().default(true),
      goodWith: z.array(z.enum(["copii", "alți câini", "alte pisici"])).default([]),
      personality: z.array(z.string()).max(4),
      photo: image(),
      photoAlt: z.string(),
      arrivedLabel: z.string(), // e.g. "În grija noastră din februarie 2025"
      featured: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      author: z.string().default("Echipa Fata cu 4pezi"),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()).default([]),
    }),
});

const partners = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/partners" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      type: z.enum([
        "clinica_veterinara",
        "farmacie_veterinara",
        "companie",
        "organizatie",
        "altul",
      ]),
      logo: image(),
      contribution: z.string(), // how the collaboration helps rescue/treatment/adoption
      location: z.string().optional(),
      url: z.string().url().optional(),
      since: z.string().optional(), // e.g. "Partener din 2022"
      featured: z.boolean().default(false),
    }),
});

export const collections = { animals, blog, partners };
