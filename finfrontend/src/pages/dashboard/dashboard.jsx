import "./dashboard.css";
import Content from "./Content.jsx";
import MiniCard from "../../components/mini_card.jsx";
import {useEffect, useState} from "react";
export default function Dashboard() {
const [trackedList, setTrackedList] = useState([]);
  useEffect(() => {
    fetch("http://3.27.250.15:8000/fintech/tracklist")
        .then((response) => response.json())
        .then((data) => setTrackedList(data));
    console.log(trackedList);
  }, []);

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
    </div>
  );
}
