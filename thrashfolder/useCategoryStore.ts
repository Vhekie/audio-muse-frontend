// import { create } from "zustand";
// import axios from "../lib/axios";
// import { toast } from "react-hot-toast";

// type Category = {
//   name: string;
//   description: string;
//   _id?: string;
// };
// type UpdateCategory = {
//   name?: string;
//   description?: string;
//   _id?: string;
// };
// type State = {
//   category: Category | null;
//   categories: Category[] | null;
//   createCategory: (data: Category) => Promise<void>;
//   getAllCategories: () => Promise<void>;
//   getOneCategory: (id: string) => Promise<void>;
//   updateCategory: (id: string, data: Category) => Promise<void>;
// };

// export const useCategoryStore = create<State>((set, get) => ({
//   category: null,
//   categories: [],
//   createCategory: async (data: Category) => {
//     try {
//       const res = await axios.post("/categories/", data);

//       set({ category: res.data.category });
//     } catch (error: any) {
//       toast.error(error.response.data.message || "Error in create category ");
//     }
//   },
//   getAllCategories: async () => {
//     try {
//       const res = await axios.get("/categories/");

//       set({ categories: res.data.categories });
//     } catch (error: any) {
//       toast.error(error.response.data.message || "Error in get Category");
//     }
//   },
//   getOneCategory: async (id: string) => {
//     try {
//       const res = await axios.get(`/categories/${id}`);

//       set({ category: res.data.category });
//     } catch (error: any) {
//       toast.error(error.response.data.message || "Error in getOne category");
//     }
//   },

//   updateCategory: async (id: string, data: UpdateCategory) => {
//     try {
//       const res = await axios.put(`/categories/${id}`, data);
//       set({ category: res.data.category });
//     } catch (error: any) {
//       toast.error(error.response.data.message || "Error in updateCategory");
//     }
//   },
//   deleteCategory: async () => {},
// }));
