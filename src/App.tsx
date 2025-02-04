import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import LikeButton from "./components/LikeButton";
import { useState } from "react";

function App() {
  let items = ["New York", "LA", "London", "Paris"];
  let heading = "Cities";
  // let text = "Hello world";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisiable, setAlertVisiablity] = useState(false);

  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      {alertVisiable && (
        <Alert onClose={() => setAlertVisiablity(false)}>
          Hello <strong>World</strong>
        </Alert>
      )}
      {/* pass text as a child to the component */}
      <Button color="danger" onClick={() => setAlertVisiablity(true)}>
        Alert Button
      </Button>

      <LikeButton onClick={() => console.log("Cliked")} />
    </div>
  );
}

export default App;
