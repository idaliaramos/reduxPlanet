import React from "react";
import { Image, Item } from "semantic-ui-react";
const { planetInfo } = this.props;
const ItemComponent = () => (
  <Item.Group>
    <Item>
      <Item.Image size="tiny" src={planetInfo.hdrul} />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>{planetInfo.explanation}</Item.Meta>
        <Item.Description>
          <Image src="/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="tiny" src="/images/wireframe/image.png" />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemComponent;
