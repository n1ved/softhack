import {useNavigate} from "react-router-dom";

export default function MiniCard({imgurl , name }){
    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        const url = '/company/'+name;
        navigate(url);
    }
    const handleUntrack = async (e)  =>{
            const response = await fetch(`https://3.27.250.15:8000/fintech/untrack/${company}`, {
                method: "GET",
            });
            console.log(response);
    }
    return(
        <div className="card w-fit bg-base-300 shadow-md p-0 mx-5">
            <div className="card-body">
                <h2 className="card-title">
                    {/*Use when able to get image*/}
                    <div className="avatar">
                        <div className="w-12 rounded mr-4">
                            <img src={imgurl} alt={" "}/>
                        </div>
                    </div>
                    {name}
                    <button className="ml-4 btn btn-primary" onClick={handleUntrack}>{"Untrack"}</button>
                    <button className="ml-4 btn" onClick={handleButtonClick}>&rarr;</button>
                </h2>
            </div>
        </div>

    );
}