import { IMongoMessage, Message } from "../entities/Message";

interface IMessagesRepositories {
  create(message: IMongoMessage): Promise<Message>;
  getMessageById(id: string): Promise<IMongoMessage>;
}

export { IMessagesRepositories };
