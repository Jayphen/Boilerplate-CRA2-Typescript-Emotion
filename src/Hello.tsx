import React from "react";

type WowProps = {
  msg: string;
};

const Wow: React.SFC<WowProps> = ({ msg }) => <div>{msg}</div>;

export default Wow;
