import React from "react";
import Eyecatcher from "../components/Text/Eyecatcher";
import MainNavigation from "../components/Navigation/MainNavigation";

import "./Header.css";

interface Props {
  headline: string;
}

const Header: React.FC<Props> = ({ headline }: Props) => {
  const cssPrefix = "Header";
  return (
    <header className={`${cssPrefix}__header`}>
      <h2>{headline}</h2>
      <span className={`${cssPrefix}__header-text`}>
        <Eyecatcher className={`${cssPrefix}__header-text-top`}>
          Just Married
        </Eyecatcher>
      </span>
      <MainNavigation />
    </header>
  );
};

export default Header;
