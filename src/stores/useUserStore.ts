import { create } from "zustand";
import axios, { setDefaultHeader } from "../lib/axios";
import { toast } from "react-hot-toast";
import type { UserData, LoginData, ChangePasswordData } from "@/types";

type State = {
  user: UserData | null;
  checkingAuth: boolean;
  signup: (data: UserData) => Promise<void>;
  login: (data: LoginData) => Promise<{ user: UserData }>;
  loadAuthState: () => Promise<void>;
  logout: () => Promise<void>;
  changePassword: (data: ChangePasswordData) => Promise<void>;
};

export const useUserStore = create<State>((set, get) => ({
  user: null,
  checkingAuth: true,
  signup: async (data: UserData) => {
    try {
      const res = await axios.post("/auth/signup", data);
      console.log(res);
      set({ user: res.data.user });
      localStorage.setItem("accessToken", res.data.accessToken);
      setDefaultHeader(res.data.accessToken);
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in signup  ");
      throw error;
    }
  },
  login: async (data: LoginData) => {
    try {
      const res = await axios.post("/auth/login", data);
      set({ user: res.data.user });
      localStorage.setItem("accessToken", res.data.accessToken);
      setDefaultHeader(res.data.accessToken);
      return { user: res.data.user };
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in login");
      throw error;
    }
  },
  loadAuthState: async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return set({ checkingAuth: false, user: null });
    }
    setDefaultHeader(token);
    try {
      const res = await axios.get("/auth/me");
      set({ user: res.data, checkingAuth: false });
    } catch (error) {
      set({ checkingAuth: false, user: null });
    }
  },

  logout: async () => {
    try {
      await axios.post("/auth/logout");
      set({ user: null });
      localStorage.removeItem("accessToken");
    } catch (error: any) {}
  },
  changePassword: async (data: ChangePasswordData) => {
    try {
      const res = await axios.put("/auth/changePassword", data);
      set({ user: res.data.user });
      localStorage.setItem("accessToken", res.data.accessToken);
      setDefaultHeader(res.data.accessToken);
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in signup  ");
      throw error;
    }
  },

  //getMe: async()=>{}

  // when i login or signup, (any process that gets a token, ) => in login and signup
  //save the token in a local storage  => in login and signup  localStorage.setItem("accessToken", res.data.accessToken);
  //2 once the token is gotten, set the bearer token on the axios instance  ...in  axios.ts =>setDefaultHeader
  //3. create a fn that is called in the root component app.tsx, when the component loads for the first time. => useeffect in app.tsx
  //this fn should
  // 1) Get the token from LS =>  in loadauthstate..  const token = localStorage.getItem("accessToken")
  // 2). if no token, set checkingAuth to false, and user to null
  // 3)if theres token set the token as default in axios(headers and bearers token) =>  setDefaultHeader(token);
  //4. after setting make a req to "/me", if error , the token has either expired or the user is not there ...check error mssgs carefully =>    set({checkingAuth: false, user: null})
  //5. if response is successful, set the user to the user gotten back and checking auth to false. => try {
  // const res = await axios.get("/auth/me")
  // set({user: res.data, checkingAuth: false})
}));
