import React from "react";
import Header from "./Header";

import "./Layout.css";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const cssPrefix = "Layout";

  return (
    <div className={`${cssPrefix}__main`}>
      <Header headline="Tanja & Jochen" />

      <div className={`${cssPrefix}__content`}>{children}</div>
    </div>
  );
};

export default Layout;
