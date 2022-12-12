import React from "react";
import "./styles";
import * as S from "./styles";

const Loader = () => {
  return (
    <S.Backdrop>
      <S.Spinner class="loader"></S.Spinner>
    </S.Backdrop>
  );
};

export default Loader;
