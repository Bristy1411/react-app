import { BiMessage } from "react-icons/bi";
//PascalCasing
function Message() {
  //JSX JavaScript XML
  // const name = 'Bristy'
  const name = "";

  if (name) return <h1>Hello {name}</h1>;
  return (
    <h1>
      Hello World <BiMessage color="blue" size={30} />
    </h1>
  );
}

export default Message;
