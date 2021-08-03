interface IMongoMessage {
  id?: string;
  title: string;
  body: string;
  timer: string;
  created_date: string;
}

class Message {
  id?: string;
  title: string;
  body: string;
  timer: number;
  created_date: Date;

  public constructor({ id, title, body, timer, created_date }: Message) {
    return Object.assign(this, {
      id,
      title,
      body,
      timer,
      created_date,
    });
  }

  static sanitize(mongoMessage: IMongoMessage): Message {
    return new Message({
      id: mongoMessage.id,
      title: mongoMessage.title.trim(),
      body: mongoMessage.body.trim(),
      timer: parseInt(mongoMessage.timer.trim()),
      created_date: new Date(mongoMessage.created_date.trim()),
    });
  }

  static fromMongo(message: Message): IMongoMessage {
    return {
      title: message.title,
      body: message.body,
      timer: message.timer.toString(),
      created_date: message.created_date.toDateString(),
    };
  }
}

export { Message, IMongoMessage };
