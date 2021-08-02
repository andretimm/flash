import { prisma } from "../../database/client";
import { Message } from "../../entities/Message";
import { IMessagesRepositories } from "../IMessagesRepositories";

class PrismaMessagesRepositories implements IMessagesRepositories {
  create(message: Message): Promise<Message> {
    throw new Error("Method not implemented.");
  }

  async getMessage(id: string): Promise<Message> {
    const message = await prisma.message.findUnique({ where: { id } });
    return message;
  }
}

export { PrismaMessagesRepositories };
