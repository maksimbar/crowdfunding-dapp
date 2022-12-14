import React from "react";
import * as S from "./styles.jsx";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
  id,
}) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{labelName}</S.Label>
      {isTextArea ? (
        <S.Textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
        />
      ) : (
        <S.Input
          required
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={inputType}
        ></S.Input>
      )}
    </S.Wrapper>
  );
};

export default FormField;
