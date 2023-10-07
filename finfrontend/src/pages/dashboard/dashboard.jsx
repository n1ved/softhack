import ChatBubble from "./chat_bubble.jsx";
import "./dashboard.css";
import Content from "./Content.jsx";
export default function Dashboard() {
  return (
    <div className="dashboard-container text-[black] flex h-screen box-border">
      <div className="box-border flex-none w-20 rounded-md bg-slate-500 m-3 fixed h-[680px]">
        <div className="avatar">
          <div className="w-16 p-2 mt-2">
            <img src="https://picsum.photos/200/300" className="rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex-1 w-1/4 flex ml-20">
        <Content />
      </div>
      <div className="flex-none flex flex-col-reverse w-96 fixed right-0 bg-slate-500 rounded-md h-[680px] m-3 box-border ">
        <input
          type="text"
          className="chat-input input m-6"
          placeholder="chat"
        />
        <div className="flex flex-col chat-container  min-w-96 px-7 box-border">
          <ChatBubble sent={false} message="hi" />
          <ChatBubble sent={true} message="hello" />
          <ChatBubble sent={true} message="what u doing" />
        </div>
      </div>
    </div>
  );
}
