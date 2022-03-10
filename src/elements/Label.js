import React from "react";
import styled from "styled-components";

const Label = props => {
  const { text, _label } = props;

  if (_label === "big") {
    return (
      <React.Fragment>
        <BigLabel>
          <LabelText>{text}</LabelText>
        </BigLabel>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <SmallLabel>
        <LabelText>{text}</LabelText>
      </SmallLabel>
    </React.Fragment>
  );
};

const SmallLabel = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border: 0.568419px solid #d2d6da;
  border-radius: ${props => props.radius || "5px"};
  padding: 5px 11px;
  font-size: 10px;
  margin-right: 4px;
`;

const BigLabel = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 5px 11px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fontColor04};
`;

const LabelText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

Label.defaultProps = {
  _label: "small",
};

export default Label;
