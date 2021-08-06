import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Errors } from "../../entities/Error";
import { MessageService } from "./MessageService";

class MessageController {
  constructor(private messageService: MessageService) {}

  async getMessageByID(req: Request, res: Response) {
    const { messageID } = req.params;
    try {
      return res.json(await this.messageService.findOne(messageID));
    } catch (error) {
      return res.status(400).send(new Errors({ msg: error.message }));
    }
  }

  async createNewMessage(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let message = req.body;
    message.created_date = new Date().toDateString();
    try {
      return res.json(await this.messageService.createMessage(message));
    } catch (error) {
      return res.status(400).send(new Errors({ msg: error.message }));
    }
  }
}

export { MessageController };
