import React from "react";
import { Divider as BaseDivider } from "Components/Divider";

import { Content, ContentName, ContentBody, BodyText } from "./styles/styles";
import {
  ContentFooter,
  FooterWrapper,
  ActionButton,
  FooterText,
} from "./styles/styles";

export interface IContent {
  name: string;
  body: string;
  result?: string;
  action?: {
    actionName: string;
    function: () => void;
  };
}

export const ContentItem: React.FC<IContent> = (props) => {
  return (
    <Content>
      <ContentName>{props.name}</ContentName>
      <ContentBody>
        <BodyText>{props.body}</BodyText>
      </ContentBody>
      <ContentFooter>
        <FooterWrapper>
          {props.result && (
            <FooterText>
              <>{props.result}</>
            </FooterText>
          )}

          {props.action && (
            <ActionButton onClick={props.action.function}>
              {props.action.actionName}
            </ActionButton>
          )}
        </FooterWrapper>
      </ContentFooter>
    </Content>
  );
};

export const Divider: React.FC<{ index: number; length: number }> = (props) => {
  return <>{props.length - 1 > props.index && <BaseDivider />}</>;
};
