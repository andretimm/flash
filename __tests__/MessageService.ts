import { IMessagesRepositories } from "../src/repositories/IMessagesRepositories";
import { MessageService } from "../src/modules/Message/MessageService";
import { LocalMessagesRepositories } from "../src/repositories/local/LocalMessagesRepositories";
import { Message } from "../src/entities/Message";

describe("Messages", () => {
  let messageRepository: IMessagesRepositories;
  let messageService: MessageService;

  beforeAll(() => {
    messageRepository = new LocalMessagesRepositories();
    messageService = new MessageService(messageRepository);
  });

  it("should create a new message", async () => {
    expect.assertions(2);
    const message: Message = new Message({
      title: "Test message",
      body: "Test message text",
      timer: 3600,
      created_date: new Date(),
    });
    const createdMessage = await messageService.createMessage(
      Message.fromMongo(message)
    );
    expect(createdMessage).toHaveProperty("id");
    expect(createdMessage.title).toBe("Test message");
  });

  it("should get one message", async () => {
    const message: Message = new Message({
      title: "Test message",
      body: "Test message text",
      timer: 3600,
      created_date: new Date(),
    });
    const teste = await messageService.createMessage(
      Message.fromMongo(message)
    );
    const messages = await messageService.findOne(teste.id);
    expect(messages).toHaveProperty("id");
  });

  it("should not get one message", async () => {
    try {
      expect(await messageService.findOne("123")).toHaveProperty("id");
    } catch (error) {
      expect(error.message).toBe("Message not found");
    }
  });
});
