import { Message } from "../entities/Message";

interface IMessagesRepositories {
  create(message: Message): Promise<Message>;
  getMessage(id: string): Promise<Message>;
}

export { IMessagesRepositories };
