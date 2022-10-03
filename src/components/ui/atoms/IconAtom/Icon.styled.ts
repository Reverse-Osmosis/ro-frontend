import styled from 'styled-components';

interface IconWrapperI {
    height?: string;
    width?: string;
}

export const IconWrapper = styled.img<IconWrapperI>` {
  height: ${({height}) => height};
  width: ${({width}) => width};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
`;
