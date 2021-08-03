import { prisma } from "../../database/client";
import { IMongoMessage, Message } from "../../entities/Message";
import { IMessagesRepositories } from "../IMessagesRepositories";

class PrismaMessagesRepositories implements IMessagesRepositories {
  create(message: IMongoMessage): Promise<Message> {
    throw new Error("Method not implemented.");
  }

  async getMessage(id: string): Promise<IMongoMessage> {
    const message = await prisma.message.findUnique({ where: { id } });
    return message;
  }
}

export { PrismaMessagesRepositories };
