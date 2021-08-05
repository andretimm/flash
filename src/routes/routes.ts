import { Router } from "express";
import { body } from "express-validator";
import { messageFactory } from "../modules/Message/MessageFactory";

const router = Router();
const _messageFactory = messageFactory();

router.get("/message/:messageID", (req, res) => {
  _messageFactory.getMessageByID(req, res);
});

router.post("/message", body('title'),body('body'),body('timer').isNumeric(), (req, res) => {
  _messageFactory.createNewMessage(req, res);
});

export { router };
