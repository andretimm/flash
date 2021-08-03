import { Router } from "express";
import { messageFactory } from "../modules/Message/MessageFactory";

const router = Router();
const _messageFactory = messageFactory();

router.get("/:messageID", (req, res) => {
  _messageFactory.getMessageByID(req, res);
});

export { router };
