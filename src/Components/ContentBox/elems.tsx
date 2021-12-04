import React from "react";
import {
  Content,
  ContentBody,
  ContentFooter,
  FooterWrapper,
} from "./styles/styles";

import {
  BodyText,
  FooterText,
  BaseDivider,
  ContentName,
  ActionButton,
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
