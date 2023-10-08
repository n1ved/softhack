import {useEffect, useState} from "react";

export default function News({companyName}){
    const [news, setNews] = useState([]);
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        fetch(`https://13.211.197.74:8000/fintech/news/${companyName}`)
            .then((response) => response.json())
            .then((data) => setNewsArticles(data.news));
    }, []);

    console.log(newsArticles);

    return (
        <div className="flex flex-col bg-base-200">
            {newsArticles.map((article) => (
                <div className="card w-full shadow-md p-0 m-2 bg-base-100 h-fit text-left box-border">
                    <div className="card-body">
                        <h2 className="card-title font-medium">
                            {article}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );

}