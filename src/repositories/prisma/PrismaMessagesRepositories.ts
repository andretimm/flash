import { prisma } from "../../database/client";
import { IMessage } from "../../entities/Message";
import { IMessagesRepositories } from "../IMessagesRepositories";

class PrismaMessagesRepositories implements IMessagesRepositories {
  async create(message: IMessage): Promise<IMessage> {
    const response = await prisma.message.create({ data: message });
    return response;
  }

  async getMessageById(id: string): Promise<IMessage> {
    const message = await prisma.message.findUnique({ where: { id } });
    return message;
  }
}

export { PrismaMessagesRepositories };
