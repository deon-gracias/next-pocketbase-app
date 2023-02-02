import { create } from "zustand";

export interface UserState {
  user?: {
    email: string;
    username: string;
  };
  setUser: (user: UserState["user"]) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
  removeUser: () => set(() => ({ user: undefined })),
}));
