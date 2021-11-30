import React from "react";
import {
  Content,
  InfoText,
  ResultName,
  RadioButton,
  ContentInfo,
  ContentName,
  RadioWrapper,
  ActionButton,
  ActionWrapper,
  ContentAction,
} from "./styles";

interface IBase {
  name: string;
  onChange: () => void;
}

interface VersionOneProps extends IBase {
  info: string;
  action: string;
}

interface VersionTwoProps extends IBase {
  result: string;
}

export const VersionOne: React.FC<VersionOneProps> = ({
  name,
  info,
  action,
  onChange,
}) => (
  <Content>
    <ContentName>{name}</ContentName>
    <ContentInfo>
      <InfoText>{info}</InfoText>
    </ContentInfo>
    <ContentAction>
      <ActionWrapper>
        <ActionButton onChange={onChange}>{action}</ActionButton>
      </ActionWrapper>
    </ContentAction>
  </Content>
);

export const VersionTwo: React.FC<VersionTwoProps> = ({
  name,
  result,
  onChange,
}) => (
  <Content>
    <RadioWrapper>
      <RadioButton onChange={onChange} />
    </RadioWrapper>
    <ContentInfo>
      <InfoText>{name}</InfoText>
    </ContentInfo>
    <ContentAction>
      <ResultName>{result}</ResultName>
    </ContentAction>
  </Content>
);
