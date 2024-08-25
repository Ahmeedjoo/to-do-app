import { useState, useEffect } from "react";
import "./assets/fontawesome/css/all.min.css";

export default function Todo() {
  const [arrList, setList] = useState([]);
  const [flag, setFlag] = useState(0);

  const addItem = () => {
    let inputT = document.getElementById("inputT");
    if (inputT.value.trim()) {
      setList((prev) => [...prev, inputT.value]);
    }
  };

  const removeItem = (index) => {
    setList((prev) => prev.filter((_, idx) => idx !== index));
  };

  useEffect(() => {
    const elementItems = document.getElementById("list");
    const done = document.getElementById('done');
    if (elementItems.childElementCount === flag && elementItems.hasChildNodes()) {
      done.innerText = "Proud of you, Your`re finish your tasks today!";
    }
    else
    {
      done.innerText = "";
    }
    console.log(elementItems.childElementCount);
  }, [arrList, flag]);

  return (
    <div className="to-do">
      <h2>TO-DO-APP📜</h2>
      <div className="todo-input">
        <input type="text" id="inputT" placeholder="Add-Item"/>
        <button type="button" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="todo-list">
        <ul id="list">
          {arrList.map((el, idx) => (
            <div className="list-el" key={idx}>
              <li
              >
                {el}
              </li>
              <div className="icons">
                <i
                    className="fa-solid fa-trash"
                    onClick={() =>{
                        removeItem(idx);
                        setFlag(prev => prev > 1 ?prev-1 : prev)
                    }}
                ></i>
                <i 
                    className="fa-solid fa-thumbs-up icon"
                    onClick={(e)=>
                    {
                        e.currentTarget.classList.toggle("toggle-like");
                        e.currentTarget.parentElement.parentElement.children[0].classList.toggle('toggle-txtLine');
                        if(e.currentTarget.parentElement.parentElement.children[0].classList[0] === 'toggle-txtLine')
                        {
                            setFlag((prev) => prev+1);
                        }
                        else
                        {
                            setFlag((prev) => prev-1);
                        }
                        console.log("flag : "+flag)
                    }}
                ></i>
              </div>
            </div>
          ))}
        </ul>
        <p id="done"></p>
      </div>
    </div>
  );

}
