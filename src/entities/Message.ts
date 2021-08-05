interface IMessage {
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

  static fromJson(message: IMessage): Message {
    return new Message({
      id: message.id,
      title: message.title.trim(),
      body: message.body.trim(),
      timer: parseInt(message.timer.trim()),
      created_date: new Date(message.created_date.trim()),
    });
  }

  static toJson(message: Message): IMessage {
    return {
      title: message.title,
      body: message.body,
      timer: message.timer.toString(),
      created_date: message.created_date.toDateString(),
    };
  }
}

export { Message, IMessage };
