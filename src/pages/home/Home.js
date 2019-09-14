import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import "./Home.css";
import schema from "../../mock/schema.json";
import data from "../../mock/data.json";
import Loan from "../../components/Loan";

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <ErrorBoundary>
          <Loan schema={schema.loan_type} data={Object.values(data)[0]} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Home;
