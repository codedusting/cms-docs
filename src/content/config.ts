import { defineCollection, z } from "astro:content"
const docCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string().min(1),
    author: z.string().min(1),
    image: z.string(),
    tags: z.array(z.string().min(1)),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
})

export const collections = {
  docs: docCollection
}
