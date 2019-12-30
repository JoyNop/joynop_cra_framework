import React from "react";
import { connect } from "react-redux";
class PostDemo extends React.Component {
  render() {
    return <div>555</div>;
  }
  componentDidMount() {
    console.log(this.props);
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(PostDemo);
