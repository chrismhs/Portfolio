import React from "react";
import styled from "styled-components";

const Alt1 = styled.span`
  color: rgb(${(props) => props.theme.alt1});
  transition: 0.4s ease-in-out 0.3s;
`;
const Alt2 = styled.span`
  color: rgb(${(props) => props.theme.alt2});
  transition: 0.4s ease-in-out 0.3s;
`;
const Alt3 = styled.span`
  color: rgb(${(props) => props.theme.alt3});
  transition: 0.4s ease-in-out 0.3s;
`;

class PastWork extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-10 col-lg-7 offset-1">
            <h3>Worked at...</h3>
            <h4>
              <Alt1>Deliveroo,</Alt1> <Alt2>Albion London,</Alt2>{" "}
              <Alt3>Transport for London,</Alt3>{" "}
              <Alt1>Compare the Market,</Alt1> <Alt2>Vodafone,</Alt2>{" "}
              <Alt3>BAE Systems Applied Intelligence,</Alt3> <Alt1>FIXR.</Alt1>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default PastWork;
