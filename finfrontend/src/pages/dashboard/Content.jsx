import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Content() {
  const navigate = useNavigate();
  const [badge, setBadge] = useState("hidden");
  const [visbility, setVisibility] = useState("hidden");
  const [loader, setLoader] = useState("hidden");
  const [score, setScore] = useState({});
  const [company, setCompany] = useState("");
  useEffect(() => {
    console.log(score);
  }, [score]);

  const handleSubmit = async (e) => {
    handleLoader();
    e.preventDefault();
    if (!company.trim()) {
      return;
    }
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/fintech/score/${company}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setScore(data);
        setBadge("badge badge-accent");
        setVisibility("mt-6 mx-8");
        setLoader("hidden");
      } else {
        console.error(`Failed to fetch data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setCompany(e.target.value);
  };
  const handleButtonClick = (e) => {
    const url = "/company/" + company;
    navigate(url);
  };
  const handleLoader = (e) => {
    setLoader("mx-5 loading loading-dots loading-sm");
  };
  return (
    <div className="flex flex-col">
      <form method="GET">
        <div className="my-5 flex">
          <input
            type="text"
            placeholder="Enter company name"
            className="rounded-lg  ml-12 mr-2  px-5 pr-20 py-2"
            onChange={handleChange}
          />
          <input
            type="submit"
            value={"search"}
            className="btn"
            onClick={handleSubmit}
            disabled={!company.trim()}
          />
          <span className={loader}></span>
        </div>
      </form>

      <div className={visbility}>
        <div className="card w-fit bg-base-300 shadow-md p-0 mx-5">
          <div className="card-body">
            <h2 className="card-title">
              {company}
              <div className={badge}>{(score.score * 100).toFixed(2)}</div>
              <button className="ml-4 btn btn-primary"> Track </button>
              <button className="ml-4 btn" onClick={handleButtonClick}>
                &rarr;
              </button>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
