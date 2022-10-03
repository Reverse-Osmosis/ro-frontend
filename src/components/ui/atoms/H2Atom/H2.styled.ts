import styled from "styled-components";

interface H2WrapperPropsI {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    margin?: string;
    padding?: string;
    fontFamily?: string;
    fontSizeTablet?: string;
    marginTablet?: string;
    fontSizeMobile?: string;
    marginMobile?: string;
    textAlign?: string;
}

export const H2Wrapper = styled.h2`
  font-size: ${({fontSize}: H2WrapperPropsI) => fontSize};
  color: ${({color}: H2WrapperPropsI) => color};
  font-family: ${({fontFamily}: H2WrapperPropsI) => fontFamily};
  font-variation-settings: 'wght' ${({fontWeight}: H2WrapperPropsI) => fontWeight};
  font-weight: ${({fontWeight}: H2WrapperPropsI) => fontWeight};
  margin: ${({margin}: H2WrapperPropsI) => margin};
  padding: ${({padding}: H2WrapperPropsI) => padding};
  text-align: ${({textAlign}: H2WrapperPropsI) => textAlign};
  @media (max-width: 1274px) {
    font-size: ${({fontSizeTablet}: H2WrapperPropsI) => fontSizeTablet};
    margin: ${({marginTablet}: H2WrapperPropsI) => marginTablet};
  }
  @media (max-width: 560px) {
    font-size: ${({fontSizeMobile}: H2WrapperPropsI) => fontSizeMobile};
    margin: ${({marginMobile}: H2WrapperPropsI) => marginMobile};
  }
`;
