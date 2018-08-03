// import React from "react";
// import { Image, Item } from "semantic-ui-react";
// // const { planetInfo } = this.props;
//
// const ItemComponent = () => (
//   <Item.Group>
//     <Item>
//       {/* <Item.Image size="tiny" src={this.props.planetInfo.hdrul} /> */}
//
//       <Item.Content>
//         <Item.Header as="a">Header</Item.Header>
//         {/* <Item.Meta>{this.props.planetInfo.explanation}</Item.Meta> */}
//         <Item.Description>
//           <Image src="/images/wireframe/short-paragraph.png" />
//         </Item.Description>
//         <Item.Extra>Additional Details</Item.Extra>
//       </Item.Content>
//     </Item>
//   </Item.Group>
// );
//
// export default ItemComponent;

import React, { Component } from "react";
import { Image, Item } from "semantic-ui-react";
// const { planetInfo } = this.props;

class ItemComponent extends Component {
  render() {
    let planetInfo = this.props.planetInfo[0];
    console.log(planetInfo, "planetInfoNew");
    return (
      <Item.Group>
        <Item>
          {/* <Item.Image size="large" src={planetInfo ? planetInfo.hdurl : "#"} /> */}

          <Item.Content>
            <Item.Header as="a">Hello</Item.Header>
            <Item.Meta>
              {planetInfo ? planetInfo.explanation : "this is a test"}
            </Item.Meta>
            <Item.Description>
              <Image src={planetInfo ? planetInfo.hdurl : "#"} />
            </Item.Description>
            {/* <Item.Extra>{planetInfo.explanation}</Item.Extra> */}
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default ItemComponent;
