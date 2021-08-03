import { Request, Response } from "express";
import { MessageService } from "./MessageService";

class MessageController {
  constructor(private messageService: MessageService) {}

  async getMessageByID(req: Request, res: Response) {
    const { messageID } = req.params;
    const message = await this.messageService.findOne(messageID);
    return res.json(message);
  }
}

export { MessageController };
