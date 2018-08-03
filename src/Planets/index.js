import React, { Component } from "react";
import { getPlanet } from "./planetActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemComponent from "../Components/ItemComponent";
//use the connects function
//mapdispatch to props

class Planets extends Component {
  retrivePlanets = () => {
    //other info together here to pass or check
    return this.props.getPlanet();
  };
  // onComponentdidMount() {
  //   return this.props.getPlanet();
  // }
  render() {
    console.warn(this.props.planetInfo, "prps");
    // getPlanet();
    return (
      <div>
        <button onClick={this.retrivePlanets}>Click to get Planet</button>
        {this.props.planetInfo ? (
          <ItemComponent planetInfo={this.props.planetInfo} />
        ) : (
          ""
        )}
        {/* <ItemComponent /> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  planetInfo: state.planetInfo
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPlanet
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
