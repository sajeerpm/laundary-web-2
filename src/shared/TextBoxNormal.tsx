import "./Textbox.css";

type Props = {
  placeholder: string;
  type: string;
};

const TextBoxNormal = ({ placeholder }: Props) => {
  return (
    <div className="textbox-container h-[39px] w-full rounded-none bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className="textbox-input w-full border focus:outline-none"
      />
    </div>
  );
};

export default TextBoxNormal;
