import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon";
import "./Textbox.css";

type Props = {
  icon: string;
  placeholder: string;
};

const TextBox = ({ icon, placeholder }: Props) => {
  return (
    <div className="textbox-container mt-3 h-[48px] bg-white">
      <ArrowLongRightIcon className="h-6 w-6 text-black" />
      <input
        type="text"
        placeholder={placeholder}
        className="textbox-input w-full border text-center focus:outline-none"
      />
    </div>
  );
};

export default TextBox;
