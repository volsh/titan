import { PrismaClient, Prisma } from "@prisma/client";
import { order } from "src/@types/order";

const prisma = new PrismaClient();

export const createOrder = async (order: order) => {
  const { email, fullName, address, imagesUrl, frameColor, userId } = order;

  try {
    const newOrder = await prisma.order.create({
      data: {
        email,
        fullName,
        address,
        imagesUrl,
        frameColor,
        userId,
      },
    });
    return newOrder;
  } catch (err) {
    throw err;
  }
};

export const getOrdersOfUser = async (userId: number) => {
  try {
    const orders = await prisma.order.findMany({
      select: {
        fullName: true,
        email: true,
        address: true,
        imagesUrl: true,
        frameColor: true,
      },
      where: {
        userId: {
          equals: userId,
        },
      },
    });
    return orders;
  } catch (err) {
    throw err;
  }
};
