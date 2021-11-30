import React from "react";
import { VersionOne, VersionTwo } from "./versions";
import { Container, Wrapper, Divider } from "./styles";

interface IProps {
  onChange: () => void;
  items: any[];
}

interface DescriptionProps extends IProps {
  children?: JSX.Element[];
}

const Description: React.FC<DescriptionProps> = (props) => {
  const lg = props.items.length - 1;

  const ContentItem: React.FC<any> = (props) => {
    return props.info && props.action ? (
      <VersionOne {...props} />
    ) : (
      <VersionTwo {...props} />
    );
  };

  return (
    <Container>
      <Wrapper>
        {props.items.map((item: any, i: number) => (
          <>
            <ContentItem
              key={item.anem + i}
              onChnage={props.onChange}
              {...item}
            />
            {lg > i && <Divider />}
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Description;
