import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Item from "./Item";
import "./Repayment.css";


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
      <div className="Repayment Box">
        <div className="BoxHeading">Repayment Schedule</div>
        {repayments}
      </div>
    </ErrorBoundary>
  )
};

export default Repayment;