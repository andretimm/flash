import { Message } from "../../entities/Message";
import { IMessage } from "../../interfaces/IMessage";
import { IMessagesRepositories } from "../../repositories/IMessagesRepositories";

class MessageService {
  constructor(private messageRepository: IMessagesRepositories) {}

  async findOne(id: string): Promise<Message> {
    const message: IMessage = await this.messageRepository.getMessageById(id);
    if (!message) {
      throw new Error("Message not found");
    }
    return Message.fromJson(message);
  }

  async createMessage(message: IMessage): Promise<Message> {
    try {
      return Message.fromJson(await this.messageRepository.create(message));
    } catch (error) {
      return error.message;
    }
  }
}

export { MessageService };
