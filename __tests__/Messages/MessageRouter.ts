import request from "supertest";
import { app } from "../../src/app";
import { prisma } from "../../src/database/client";
import { Message } from "../../src/entities/Message";
import { MessageController } from "../../src/modules/Message/MessageController";
import { MessageService } from "../../src/modules/Message/MessageService";
import { IMessagesRepositories } from "../../src/repositories/IMessagesRepositories";
import { LocalMessagesRepositories } from "../../src/repositories/local/LocalMessagesRepositories";

describe("Message Routers", () => {
  afterAll(async () => {
    await prisma.message.deleteMany({});
  });

  it("should create a new message", async () => {
    const message: Message = new Message({
      title: "Test message",
      body: "Test message text",
      timer: 3600,
      created_date: new Date(),
    });
    const newMessage = await request(app)
      .post("/message")
      .send(Message.toJson(message));
    expect(newMessage.status).toBe(200);
    expect(newMessage.body).toHaveProperty("id");
    expect(newMessage.body.title).toBe(message.title);
  });

  it("should return a message by id", async () => {
    const message: Message = new Message({
      title: "Test message",
      body: "Test message text",
      timer: 3600,
      created_date: new Date(),
    });
    const newMessage = await request(app)
      .post("/message")
      .send(Message.toJson(message));
    expect(newMessage.status).toBe(200);
    expect(newMessage.body).toHaveProperty("id");
    expect(newMessage.body.title).toBe(message.title);

    const response = await request(app).get(`/message/${newMessage.body.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title");
    expect(response.body.title).toBe(newMessage.body.title);
  });

  it("should not return a message that does not exist", async () => {
    const message = await request(app).get(`/message/610827370074698d000bdd02`);
    expect(message.status).toBe(400);
    expect(message.body).toHaveProperty("errors");
  });

  it("shout not create a message with invalid data", async () => {
    const message = await request(app).post("/message").send({});
    expect(message.status).toBe(400);
    expect(message.body).toHaveProperty("errors");
  });
});

describe("Message Controller", () => {
  let messageRepository: IMessagesRepositories;
  let messageService: MessageService;
  let messageController: MessageController;

  beforeAll(() => {
    messageRepository = new LocalMessagesRepositories();
    messageService = new MessageService(messageRepository);
    messageController = new MessageController(messageService);
  });

  it("should return if the message is expired", async () => {
    const message: Message = new Message({
      title: "Test message",
      body: "Test message text expired",
      timer: 1000,
      created_date: new Date(),
    });

    //Sleep
    await new Promise((resolve) => setTimeout(resolve, 1001));

    const expiredMessage = messageController.isExpired(message);
    expect(expiredMessage).toBe(true);
  });

});
