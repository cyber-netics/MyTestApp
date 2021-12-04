import styled, { css } from "styled-components";
import { InputProps } from "Components/Input";
import { inputStyles } from "Components/Input/styles";
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const inputBase = css`
  &&& {
    ${inputStyles};
    background: #fff;
  }
`;

export const CardCvc = styled(CardCvcElement)<InputProps>`
  ${inputBase};
`;

export const CardExpiry = styled(CardExpiryElement)<InputProps>`
  ${inputBase};
`;

export const CardNumber = styled(CardNumberElement)<InputProps>`
  ${inputBase};
`;
