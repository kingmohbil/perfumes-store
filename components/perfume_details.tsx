import React from 'react';
import StyledContainer from './styles/styled_perfume_details';
interface ComponentProps {
  percentage: number;
  type: string;
  color: string;
  background: string;
}
function Component({ percentage, type, background, color }: ComponentProps) {
  return (
    <StyledContainer
      percentage={percentage}
      background={background}
      color={color}
    >
      {type}
    </StyledContainer>
  );
}

export default Component;
