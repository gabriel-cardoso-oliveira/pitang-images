import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;

  max-width: 34rem;
  display: flex;

  input {
    flex: 1;
    height: 4rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #d03e35;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 8rem;
    height: 4rem;
    background: #d03e35;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#d03e35")};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #d03e35;
  margin-top: 8px;
`;

export const Image = styled.img`
  height: 12rem;
  width: auto;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  margin: 0.25rem;
`;
