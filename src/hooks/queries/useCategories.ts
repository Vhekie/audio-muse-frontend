import axiosInstance from "@/lib/axios";
import type { Category } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstance.get("/categories");
      return res.data.categories;
    },
  });
};
export const useGetOneCategory = (id?: string) => {
  return useQuery<Category>({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/categories/${id}`);
      return res.data.category;
    },
    enabled: Boolean(id),
  });
};
