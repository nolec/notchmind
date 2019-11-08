import path from "path";
import express from "express";
import socketIO from "socket.io";
import morgan from "morgan";
const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
//Static is for files sent to the user, like images, css and client side JS
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.render("home");
});
const handleListening = () => {
  console.log(`server PORT${PORT}♣`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", socket => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anno"
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
