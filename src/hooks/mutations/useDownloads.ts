import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useDownloadAudio = () => {
  return useMutation({
    mutationFn: async (audioId: string) => {
      const res = await axiosInstance.post("/downloads/", { audioId });
      return res.data.download;
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Error in download audio");
    },
  });
};
