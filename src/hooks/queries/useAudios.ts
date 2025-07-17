import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { Audio } from "@/types";

export const useGetAllCreatorAudios = () => {
  return useQuery<Audio[]>({
    queryKey: ["creatorAudios"],
    queryFn: async () => {
      const res = await axiosInstance.get("/audios/creator-audios");
      return res.data.audios;
    },
  });
};
export const useGetAllAudios = (search?: string) => {
  return useQuery<Audio[]>({
    queryKey: ["allAudios", search],
    queryFn: async () => {
      const res = await axiosInstance.get("/audios/", { params: { search } });
      return res.data.audios;
      console.log(res);
    },
  });
};
