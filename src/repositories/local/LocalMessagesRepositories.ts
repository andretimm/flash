import { IMongoMessage, Message } from "../../entities/Message";
import { IMessagesRepositories } from "../IMessagesRepositories";
import { v4 as uuid } from "uuid";

class LocalMessagesRepositories implements IMessagesRepositories {
  private messages: Message[] = [];

  async create(message: IMongoMessage): Promise<Message> {
    Object.assign(message, {
      id: uuid(),
    });
    this.messages.push(Message.sanitize(message));
    return Message.sanitize(message);
  }

  async getMessage(id: string): Promise<IMongoMessage> {
    const message = this.messages.find((m) => m.id === id);
    return message ? Message.fromMongo(message) : undefined;
  }
}

export { LocalMessagesRepositories };
