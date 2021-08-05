import { IMessage, Message } from "../../entities/Message";
import { IMessagesRepositories } from "../IMessagesRepositories";
import { v4 as uuid } from "uuid";

class LocalMessagesRepositories implements IMessagesRepositories {
  private messages: Message[] = [];

  async create(message: IMessage): Promise<IMessage> {
    Object.assign(message, {
      id: uuid(),
    });
    this.messages.push(Message.fromJson(message));
    return message;
  }

  async getMessageById(id: string): Promise<IMessage> {
    const message = this.messages.find((m) => m.id === id);
    return message ? Message.toJson(message) : undefined;
  }
}

export { LocalMessagesRepositories };
