import React from "react";
import Details from "../components/Details.js";
import BookGridDetails from "../components/BookGridDetails.js";

class DetailsPage extends React.Component {
  render() {
    return (
      <>
        <Details books={this.props.books} />
        <BookGridDetails
          limit={4}
          books={this.props.books}
        />
      </>
    );
  }
}

export default DetailsPage;
