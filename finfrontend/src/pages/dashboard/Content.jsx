import { useState, useEffect } from "react";
import MiniCard from "../../components/mini_card.jsx";
export default function Content() {
  const [score, setScore] = useState({});
  const [company, setCompany] = useState("");
  useEffect(() => {
    console.log(score);
  }, [score]);

  const handleSubmit = async (e) => {
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
  return (
    <div className="flex flex-col">
      <form method="GET">
        <div className="my-5 flex">
          <input
            type="text"
            placeholder="Enter company name"
            className="rounded-lg  ml-10 mr-2 w-full px-5 py-2"
            onChange={handleChange}
          />
          <input
            type="submit"
            value={"search"}
            className="btn"
            onClick={handleSubmit}
            disabled={!company.trim()}
          />
        </div>
      </form>
      <div className="mt-6 mx-8">
        <MiniCard name={company} noimage={true} score={score.score}/>
      </div>
    </div>
  );
}
