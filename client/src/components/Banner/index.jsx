import React from "react";
import * as S from "./styles";

const Banner = ({ msg }) => {
  return (
    <S.Backdrop>
      <S.Wrapper>
        <S.Warning>{msg}</S.Warning>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default Banner;
