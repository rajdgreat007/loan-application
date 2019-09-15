import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Item from "./Item";
import "./LoanApplicant.css";


const LoanApplicant = (props) => {
  const {data} = props;
  const name = data.Name;
  const dob = data["Date of Birth"];
  const phone = data["Phone Number"];
  const maritalStatus = data["Marital Status"];
  const numDependents = data["No of Dependents"];
  return (
    <ErrorBoundary>
      <div className="LoanApplicant Box">
        <div className="BoxHeading">Applicant Details</div>
        <Item heading="Name" content={name} />
        <Item heading="Date of Birth" content={dob} />
        <Item heading="Phone Number" content={phone} />
        <Item heading="Marital Status" content={maritalStatus} />
        <Item heading="No of Dependents" content={numDependents} />
      </div>
    </ErrorBoundary>
  )
};

export default LoanApplicant;