import ChatBubble from "./chat_bubble.jsx";
import "./dashboard.css";
import Content from "./Content.jsx";
import MiniCard from "../../components/mini_card.jsx";
export default function Dashboard() {
  return (
    <div className="dashboard-container text-[black] flex h-screen box-border bg-[#1D232A]">
      <div className="box-border flex-none w-20 rounded-md bg-slate-500 m-3 fixed h-screen">
        <div className="avatar">
          <div className="w-16 p-2 mt-2">
            <img src="https://picsum.photos/200/300" className="rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex-1 w-1/4 flex ml-20">
        <div className="flex flex-col">
          <Content />
          <h2 className="self-start px-14 py-4 text-xl">Tracked stocks</h2>
          <div className="card-container flex flex-row mx-8">
            <MiniCard
              name={"Apple Inc"}
              imgurl={"https://logo.uplead.com/apple.com"}
              noimage={false}
            />
            <MiniCard
              name={"Google LLC"}
              imgurl={"https://logo.uplead.com/google.com"}
              noimage={false}
            />
            <MiniCard
              name={"Amazon "}
              imgurl={"https://logo.uplead.com/amazon.com"}
              noimage={false}
            />
          </div>
          <div className="">
            <iframe
              className=" w-3/4 rounded-md my-8 mx-14"
              frameBorder="0"
              src="https://widget.finnhub.io/widgets/etf-holdings?symbol=ARKK&theme=light"
              title="ARKK Holdings Data by Finnhub Stock API"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex-none flex flex-col-reverse w-96 fixed right-0 bg-slate-500 rounded-md h-screen m-3 box-border ">
        <input
          type="text"
          className="chat-input input m-8"
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
