import { Router } from "express";
import { messageFactory } from "../modules/Message/MessageFactory";

const router = Router();
const _messageFactory = messageFactory();

router.get("/message/:messageID", (req, res) => {
  _messageFactory.getMessageByID(req, res);
});

router.post("/message", (req, res) => {
  _messageFactory.createNewMessage(req, res);
});

export { router };
