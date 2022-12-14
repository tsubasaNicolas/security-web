import { FC } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  title: string;
}

export const ButtonAdd: FC<Props> = ({ url, title }) => {
  return (
    <button className="bg-blue-700 hover:bg-green-500 hover:text-white text-yellow-500  font-bold py-1 px-4 mb-3 rounded inline-flex items-center align-middle transition-colors">
      <Link to={url} className="px-2">
        {title}
      </Link>
      <FaPlusSquare color="white" />
    </button>
  );
};

export default ButtonAdd;
