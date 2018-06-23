import React from "react";

interface IWowProps {
  msg: string;
}

const Wow: React.SFC<IWowProps> = ({ msg }) => <div>{msg}</div>;

export default Wow;
