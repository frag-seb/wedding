import React from "react";

interface Props {
  email: string;
}

const Mailto: React.FC<Props> = ({ email }: Props) => {
  return <a href={`mailto:${email}`}>{email}</a>;
};

export default Mailto;
