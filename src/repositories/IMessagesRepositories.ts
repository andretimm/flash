import { IMongoMessage, Message } from "../entities/Message";

interface IMessagesRepositories {
  create(message: IMongoMessage): Promise<Message>;
  getMessage(id: string): Promise<IMongoMessage>;
}

export { IMessagesRepositories };
