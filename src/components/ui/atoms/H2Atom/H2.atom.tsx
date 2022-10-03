import {H2Wrapper} from "./H2.styled";

interface Props {
    text: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    margin?: string;
    padding?: string;
    fontFamily?: string;
    fontSizeTablet?: string;
    marginTablet?: string;
    marginMobile?: string;
    fontSizeMobile?: string;
    boldText?: string;
    textAlign?: string;
}

export const H2Atom = (props: Props) => {
const { text, fontSize = '3rem', color, fontWeight, margin, padding, fontFamily, fontSizeTablet, marginTablet, fontSizeMobile, marginMobile, boldText, textAlign } = props;

  return (
    <H2Wrapper
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        margin={margin}
        padding={padding}
        fontFamily={fontFamily}
        fontSizeTablet={fontSizeTablet}
        marginTablet={marginTablet}
        fontSizeMobile={fontSizeMobile}
        marginMobile={marginMobile}
        textAlign={textAlign}
    >
        {text}<b>{boldText}</b>
    </H2Wrapper>
  );

}
