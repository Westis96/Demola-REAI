import { atom } from "jotai";

export type Role = "coach" | "player";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  rating?: number;
  position?: string;
  number?: number;
  team?: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Pablo Jorquera",
    email: "coach@example.com",
    role: "coach",
    avatar: "/avatars/shadcn.jpg",
    team: "Real Madrid Youth"
  },
  {
    id: "2",
    name: "Alex Silva",
    email: "player@example.com",
    role: "player",
    avatar: "/avatars/player.jpg",
    rating: 85,
    position: "Forward",
    number: 13,
    team: "Real Madrid Youth"
  }
];

export const userAtom = atom<User>(users[0]);
