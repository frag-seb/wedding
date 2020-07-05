import React from "react";

import "./HeadlineImage.css";

interface Props {
  children?: any;
}
const HeadlineImage: React.FC<Props> = ({ children }: Props) => {
  const cssPrefix = "HeadlineImage";

  return <div className={`${cssPrefix}__background-image`}>{children}</div>;
};

export default HeadlineImage;
