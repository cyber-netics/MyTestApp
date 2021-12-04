import styled, { css } from "styled-components";
import { inputStyles } from "Components/Input/styles";
import { hightPrimary } from "Shared/styles";
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const inputBase = css`
  &&& {
    ${hightPrimary};
    background: #fff;
    padding: 15px !important;
  }
`;

export const CardCvc = styled(CardCvcElement)`
  ${inputBase};
  ${inputStyles};
`;

export const CardExpiry = styled(CardExpiryElement)`
  ${inputBase};
  ${inputStyles};
`;

export const CardNumber = styled(CardNumberElement)`
  ${inputBase};
  ${inputStyles};
`;
