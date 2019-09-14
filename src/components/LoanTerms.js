import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Item from "./Item";

const LoanTerms = (props) => {
  const {data} = props;
  const duration = data.Duration;
  const interest = data["Interest Rate"];
  const amount = data["Loan Amount"];
  const product = data["Loan Product"];

  return (
    <ErrorBoundary>
      <div className="LoanTerms">
        <Item heading="Duration" content={duration} />
        <Item heading="Interest Rate" content={interest} />
        <Item heading="Loan Amount" content={amount} />
        <Item heading="Loan Product" content={product} />
      </div>
    </ErrorBoundary>
  )
};

export default LoanTerms;