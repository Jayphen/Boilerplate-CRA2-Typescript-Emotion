import React from "react";
import styled from "react-emotion";

const Wow = styled.div`
  color: #007acc;
  background: white;
  padding: 1rem;
`;

interface IWowProps {
  msg: string;
}

const Hello: React.SFC<IWowProps> = ({ msg }) => <Wow>{msg}</Wow>;

export default Hello;
