import { useState } from "react";
import "../assets/fontawesome/css/all.min.css";
export default function Card(props) {
    const [star, setStar] = useState(true);   
    return (
        <div className="card">
            <div
                className="book"
                style={{
                    backgroundImage: `url(${props.src})`
                }}
            > 
            </div>
            <div className="text">
                <h3>{props.bookName}</h3>
                <span> {props.author} </span>
                <i  
                    className="fa-solid fa-star"
                    style={{color: star? "": "gold"}}
                    onClick={()=>setStar((prev) => !prev)}
                ></i>
            </div>
        </div>
    );
};
