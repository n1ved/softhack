export default function ChatBubble({ sent, message }) {
  var sender;
  if (sent === true) {
    sender = "chat-end self-end py-5";
  } else {
    sender = "chat-start py-5";
  }
  return (
    <div className={sender}>
      <div className="chat-bubble max-w-xs">{message}</div>
    </div>
  );
}
