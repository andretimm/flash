import { IMessage } from "../entities/Message";

interface IMessagesRepositories {
  create(message: IMessage): Promise<IMessage>;
  getMessageById(id: string): Promise<IMessage>;
}

export { IMessagesRepositories };
