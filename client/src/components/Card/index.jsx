import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.jsx";
import { shortenAddress } from "../../utils/index.js";

const Card = ({ fundraiser }) => {
  const navigate = useNavigate();

  const details = () => {
    navigate("/details", { state: fundraiser });
  };

  return (
    <S.Wrapper
      onClick={() => {
        details();
      }}
    >
      <S.Picture src={fundraiser.image} />
      <S.Content>
        <S.Title>{fundraiser.title}</S.Title>
        <S.Description>{fundraiser.description}</S.Description>
        <S.Details>
          <S.DetailsBlock>
            <S.Tag>
              {fundraiser.amountCollected} / {fundraiser.target} ETH
            </S.Tag>
          </S.DetailsBlock>
          <S.DetailsBlock>
            <S.Tag>{fundraiser.deadline} days left</S.Tag>
          </S.DetailsBlock>
        </S.Details>
        <S.Owner>by {shortenAddress(fundraiser.owner)}</S.Owner>
      </S.Content>
    </S.Wrapper>
  );
};

export default Card;
