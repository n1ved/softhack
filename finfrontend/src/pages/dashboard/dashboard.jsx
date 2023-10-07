export default function Dashboard() {
  return (
    <div className="dashboard-container text-[black] flex h-screen">
      <div className="flex-none w-20 rounded-md bg-slate-500 m-3 fixed h-[680px]">
        <div className="avatar">
          <div className="w-16 p-2 mt-2">
            <img src="https://picsum.photos/200/300" className="rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex-1 w-1/4">content</div>
      <div className="flex-none w-64 fixed right-0 bg-slate-500 rounded-md h-[680px] m-3">
        chat
      </div>
    </div>
  );
}
