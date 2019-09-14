import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Item from "./Item";

const Repayment = (props) => {
  const {data} = props;
  const repayments = data.map(d => {
    return (
      <>
        <Item heading="Date" content={d.Date} />
        <Item heading="Amount" content={d.Amount} />
      </>
    )
  });
  return (
    <ErrorBoundary>
      <div className="Repayment">
        {repayments}
      </div>
    </ErrorBoundary>
  )
};

export default Repayment;