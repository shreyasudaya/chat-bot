import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from "../controllers/chat-controller.js";

//Protected API
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  generateChatCompletion
);
chatRoutes.get("/all-chats", sendChatsToUser);
chatRoutes.delete("/delete", deleteChats);

export default chatRoutes;