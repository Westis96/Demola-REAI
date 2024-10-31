import { atom } from "jotai";

export type Role = "coach" | "player";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export const userAtom = atom<User | null>(null);

