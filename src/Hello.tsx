import React from "react";
import styled from "react-emotion";

const Div = styled.div`
  color: #007acc;
  background: white;
  padding: 1rem;
`;

interface IWowProps {
  msg: string;
}

const Wow: React.SFC<IWowProps> = ({ msg }) => <Div>{msg}</Div>;

export default Wow;
