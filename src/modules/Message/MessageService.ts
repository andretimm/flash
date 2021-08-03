import { IMongoMessage, Message } from "../../entities/Message";
import { IMessagesRepositories } from "../../repositories/IMessagesRepositories";

class MessageService {
  constructor(private messageRepository: IMessagesRepositories) {}

  async findOne(id: string): Promise<Message> {
    const message: IMongoMessage = await this.messageRepository.getMessageById(id);
    if (!message) {
      throw new Error("Message not found");
    }
    return Message.sanitize(message);
  }

  async createMessage(message: IMongoMessage): Promise<Message> {
    return await this.messageRepository.create(message);
  }
}

export { MessageService };
