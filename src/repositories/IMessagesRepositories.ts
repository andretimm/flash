import { IMessage } from "../interfaces/IMessage";

interface IMessagesRepositories {
  create(message: IMessage): Promise<IMessage>;
  getMessageById(id: string): Promise<IMessage>;
}

export { IMessagesRepositories };
