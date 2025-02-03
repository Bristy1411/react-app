import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "LA", "London", "Paris"];
  // items = [];
  // let selectedIndex = 0;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const Message = items.length === 0 ? <p>No items found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      {/* {Message} */}
      {/* {getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("Clicked")}
            // onClick={() => console.log(item, index)}
            // onClick={(event) => console.log(event)}
            // onClick={handleClick} //passing reference
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
