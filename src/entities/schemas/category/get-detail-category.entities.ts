import { baseResponseSchema } from "@/common/common.schema";
import z from "zod";

export const getDetailCategoryQuerySchema = z.discriminatedUnion('by',[
  z.object({
    by: z.literal('id'),
    identifier: z.string().min(1).describe('The unique identifier of the category'),
  }),
  z.object({
    by: z.literal('name'),
    identifier: z.string().min(1).describe('The name of the category'),
  }),
]);

export type GetDetailCategoryQuery = z.infer<typeof getDetailCategoryQuerySchema>;

export const getDetailCategoryResponseSchema = baseResponseSchema.extend({
  id: z.string().describe('The unique identifier of the category'),
  name: z.string().describe('The name of the category'),
  createdBy: z.string().describe('The user ID who created the category'),
  updatedBy: z.string().optional().describe('The user ID who last updated the category, null if never updated'),
});

export type GetDetailCategoryResponse = z.infer<typeof getDetailCategoryResponseSchema>;
