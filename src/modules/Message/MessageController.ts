import { Request, Response } from "express";
import { MessageService } from "./MessageService";

class MessageController {
  constructor(private messageService: MessageService) {}

  async getMessageByID(req: Request, res: Response) {
    const { messageID } = req.params;
    try {
      return res.json(await this.messageService.findOne(messageID));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async createNewMessage(req: Request, res: Response) {
    const message = req.body;
    try {
      return res.json(await this.messageService.createMessage(message));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}

export { MessageController };
