import styled from "styled-components";
import { inputStyles } from "Components/Input/styles";
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

export const CardCvc = styled(CardCvcElement)`
  ${inputStyles};
`;

export const CardExpiry = styled(CardExpiryElement)`
  ${inputStyles};
`;

export const CardNumber = styled(CardNumberElement)`
  ${inputStyles};
`;
