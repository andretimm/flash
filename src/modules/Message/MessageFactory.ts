import { PrismaMessagesRepositories } from "../../repositories/prisma/PrismaMessagesRepositories";
import { MessageController } from "./MessageController";
import { MessageService } from "./MessageService";

const messageFactory = () => {
  const messageRepository = new PrismaMessagesRepositories();
  const messageService = new MessageService(messageRepository);
  const messageController = new MessageController(messageService);
  return messageController;
};

export { messageFactory };
