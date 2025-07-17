// import { create } from "zustand";
// import axios from "../lib/axios";
// import { toast } from "react-hot-toast";
// import type { AudioData } from "@/types";

// type State = {
//   audio: AudioData | null;
//   audios: AudioData[] | null;
//   createAudio: (data: AudioData) => Promise<void>;
// };
// export const useAudioUploadStore = create<State>((set, get) => ({
//   audio: null,
//   audios: [],
//   createAudio: async (data: AudioData) => {
//     try {
//       const res = await axios.post("/audios", data);
//       set({ audio: res.data.audio });
//     } catch (error: any) {
//       toast.error(error.response.data.message);
//     }
//   },
// }));
