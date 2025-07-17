import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AudioData } from "@/types";

export const useCreateAudio = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: AudioData) => {
      const res = await axiosInstance.post("/audios", data);
      return res.data.audios;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["creatorAudios"] });
    },
  });
};
