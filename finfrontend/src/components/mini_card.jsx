import {useState} from "react";

export default function MiniCard({imgurl , name , noimage , score=null}){
    var imgvisibility;
    var scorevisibility;
    if(score === null){
        scorevisibility = "hidden";
    }
    else{
        scorevisibility = "badge badge-accent";
    }
    if(noimage === false){
        imgvisibility = "avatar";
    }
    else{
        imgvisibility = "hidden";
    }
    return(
        <div className="card w-fit bg-base-300 shadow-md p-0 mx-5">
            <div className="card-body">
                <h2 className="card-title">
                    {/*Use when able to get image*/}
                    <div className={imgvisibility}>
                        <div className="w-12 rounded mr-4">
                            <img src={imgurl} alt={" "}/>
                        </div>
                    </div>
                    {name}
                    <div className={scorevisibility}>{score}</div>
                    <button className="ml-4 btn"></button>

                </h2>
            </div>
        </div>

    );
}