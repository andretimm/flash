import { Message } from "../../entities/Message";
import { IMessagesRepositories } from "../IMessagesRepositories";
import { v4 as uuid } from "uuid";

class LocalMessagesRepositories implements IMessagesRepositories {
  private messages: Message[] = [];

  async create(message: Message): Promise<Message> {
    Object.assign(message, {
      id: uuid(),
    });
    this.messages.push(message);
    return message;
  }

  async getMessage(id: string): Promise<Message> {
    const message = this.messages.find((m) => m.id === id);
    return message;
  }
}

export { LocalMessagesRepositories };
