import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon";
import "./Textbox.css";

type Props = {
    placeholder: string;
};

const SubcribeTextBox = ({ placeholder }: Props) => {
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

export default SubcribeTextBox;
