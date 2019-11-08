(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = void 0;

var handleMessageNotif = function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
};

exports.handleMessageNotif = handleMessageNotif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLElBQUksRUFBSTtBQUFBLE1BQ2hDQyxPQURnQyxHQUNWRCxJQURVLENBQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxRQUR1QixHQUNWRixJQURVLENBQ3ZCRSxRQUR1QjtBQUV4Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZ0JBQTZCRCxPQUE3QjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlTWVzc2FnZU5vdGlmID0gZGF0YSA9PiB7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX0gOiAke21lc3NhZ2V9YCk7XHJcbn07XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socketIo = io("/");

var sendMessage = function sendMessage(message) {
  socketIo.emit("newMessage", {
    message: message
  });
  console.log("YOU : ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socketIo.emit("setNickname", {
    nickname: nickname
  });
};

socketIo.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZWRmODU3NC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRJbyIsImlvIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJzZXROaWNrbmFtZSIsIm5pY2tuYW1lIiwib24iLCJoYW5kbGVNZXNzYWdlTm90aWYiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFuQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxPQUFPLEVBQUk7QUFDN0JILEVBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjLFlBQWQsRUFBNEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFQQTtBQUFGLEdBQTVCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixpQkFBcUJILE9BQXJCO0FBQ0QsQ0FIRDs7QUFJQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxRQUFRLEVBQUk7QUFDOUJSLEVBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjLGFBQWQsRUFBNkI7QUFBRUksSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTdCO0FBQ0QsQ0FGRDs7QUFJQVIsUUFBUSxDQUFDUyxFQUFULENBQVksY0FBWixFQUE0QkMsd0JBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5jb25zdCBzb2NrZXRJbyA9IGlvKFwiL1wiKTtcclxuXHJcbmNvbnN0IHNlbmRNZXNzYWdlID0gbWVzc2FnZSA9PiB7XHJcbiAgc29ja2V0SW8uZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xyXG4gIGNvbnNvbGUubG9nKGBZT1UgOiAke21lc3NhZ2V9YCk7XHJcbn07XHJcbmNvbnN0IHNldE5pY2tuYW1lID0gbmlja25hbWUgPT4ge1xyXG4gIHNvY2tldElvLmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xyXG59O1xyXG5cclxuc29ja2V0SW8ub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTtcclxuIl19
},{"./chat":1}]},{},[2])