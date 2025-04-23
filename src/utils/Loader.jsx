import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);  
  }
  

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          cssOverride={override}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
}
export default AwesomeComponent;