import styled from "styled-components";

type ButtonPropsT = {
    background?: string;
    backgroundColor?: string;
    backgroundColorHover?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    gradientColorPrimary?: string;
    gradientColorSecondary?: string;
    height?: string;
    hoverBackground?: string;
    hoverBackgroundColor?: string;
    hoverBorder?: string;
    hoverBorderColor?: string;
    hoverColor?: string;
    width?: string;
    alignSelf?: string;
    justifySelf?: string;
    padding?: string;
}

export const Button = styled.button<ButtonPropsT>`
  color: ${(props) => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  background: ${props => props.background};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border} solid ${(props) => props.borderColor};
  height: ${(props) => props.height};
  width: ${({width}) => width};
  align-self: ${({alignSelf}) => alignSelf};
  justify-self: ${({justifySelf}) => justifySelf};
  padding: ${({padding}) => padding};
  transition: all 0.5s ease-in-out;

  &:hover {
    border: ${(props) => props.hoverBorder} solid ${(props) => props.hoverBorderColor};
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBackground};
  }
`;
