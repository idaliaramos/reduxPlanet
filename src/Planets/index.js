import React, { Component } from "react";
import { getPlanet } from "./planetActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//use the connects function
//mapdispatch to props

class Planets extends Component {
  retrivePlanets = () => {
    //other info together here to pass or check
    return this.props.getPlanet();
  };
  render() {
    console.warn(this.props, "prps");
    return (
      <div>
        <button onClick={this.retrivePlanets}>Click to get Planet</button>
        {this.props.planetInfo ? this.props.planetInfo.map(planet => <li> {planet}</li>): ''}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  planetInfo: state.planetInfo
});

//option 2
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       getPlanet
//     },
//     dispatch
//   );
// }

export default connect(mapStateToProps, { getPlanet })(Planets);
