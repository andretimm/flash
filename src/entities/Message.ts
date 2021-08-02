class Message {
  id?: string;
  title: string;
  body: string;
  timer: string;
  created_date: string;

  public constructor({ title, body, timer, created_date }: Message) {
    return Object.assign(this, {
      title,
      body,
      timer,
      created_date,
    });
  }

  static create({ title, body, timer, created_date }: Message): Message {
    const message = new Message({
      title,
      body,
      timer,
      created_date,
    });
    return message;
  }
}

export { Message };
