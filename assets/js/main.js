import { handleMessageNotif } from "./chat";
const socketIo = io("/");

const sendMessage = message => {
  socketIo.emit("newMessage", { message });
  console.log(`YOU : ${message}`);
};
const setNickname = nickname => {
  socketIo.emit("setNickname", { nickname });
};

socketIo.on("messageNotif", handleMessageNotif);
