import { Prisma, PrismaClient } from "@prisma/client";
import { user } from "src/@types/user";

const prisma = new PrismaClient();

export const createUser = async (user: user) => {
  const { name } = user;

  try {
    const newUser = await prisma.user.create({
      data: {
        name
      },
    });
    return newUser;
  } catch (err) {
    throw err;
  }
};
