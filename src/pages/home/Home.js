import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import schema from "../../mock/schema.json";
import data from "../../mock/data.json";
import Loan from "../../components/Loan";

const  Home = () => {
  const style = {background: "#eee"};
  return (
    <div className="Home" style={style}>
      <ErrorBoundary>
        <Loan schema={schema.loan_type} data={Object.values(data)[0]} />
      </ErrorBoundary>
    </div>
  );
}

export default Home;
