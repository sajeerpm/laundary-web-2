import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const ActionButton = ({ children, setSelectedPage, selectedPage }: Props) => {
  return (
    <AnchorLink
      className="w-full rounded-none bg-secondary-500 px-10 py-2 text-center hover:border hover:border-secondary-500 hover:bg-white"
      onClick={() => setSelectedPage(selectedPage)}
      href={`#${selectedPage}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
