import { Message } from "../../entities/Message";
import { IMessagesRepositories } from "../../repositories/IMessagesRepositories";

class MessageService {
  constructor(private messageRepository: IMessagesRepositories) {}

  async findOne(id: string): Promise<Message> {
    const message = await this.messageRepository.getMessage(id);
    if (!message) {
      throw new Error("Message not found");
    }
    return message;
  }

  async createMessage(message: Message): Promise<Message> {
    return await this.messageRepository.create(message);
  }
}

export { MessageService };
