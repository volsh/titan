import { user } from "./user";

export type order = {
  email: string;
  fullName: string;
  address: string;
  imagesUrl: string;
  frameColor: string;
  userId: number;
  user: user;
};
