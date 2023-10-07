export default function Dashboard() {
  return (
    <div className="dashboard-container text-[black] flex h-screen box-border">
      <div className="box-border flex-none w-20 rounded-md bg-slate-500 m-3 fixed h-full">
        <div className="avatar">
          <div className="w-16 p-2 mt-2">
            <img src="https://picsum.photos/200/300" className="rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex-1 w-1/4">content</div>
      <div className="flex-none w-96 fixed right-0 bg-slate-500 rounded-md h-full m-3 box-border ">
        chat
      </div>
    </div>
  );
}
