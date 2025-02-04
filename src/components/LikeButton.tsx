import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return (
      <div>
        {" "}
        <AiFillHeart color="ff6b81" size={40} onClick={toggle} />
      </div>
    );
  return (
    <div>
      <AiOutlineHeart size={40} onClick={toggle} />
    </div>
  );
};

export default LikeButton;
