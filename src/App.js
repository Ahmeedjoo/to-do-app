import Card from "./components/Card";
import{ data }  from "./data";
import Todo from "./ToDo";

export default function App() {
  const books = data.map((el, index) => 
  <Card
    key={index}
    src={el.img}
    bookName={el.title}
    author={el.author} 
  />
  );
  return (
    <div className="app">
      {/* <h1>Amazon Best Sellers</h1>
      <div className="card-container">
        {books}
      </div> */}
      <Todo />
    </div>
  );
}
