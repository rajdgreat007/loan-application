import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Image from "./Image";
import Address from './Address';
import LoanApplicant from './LoanApplicant';
import LoanTerms from './LoanTerms';
import Repayment from './Repayment';
import isValidData from "../utils/util";


const Loan = (props) => {
  const {schema, data, title} = props;
  const image = isValidData(schema.image.type, data.image) ? 
    <Image data={data.image} /> : null;
  const address = isValidData(schema["Borrower Location"].type, data["Borrower Location"]) ? 
    <Address data={data["Borrower Location"]} /> : null;
  const applicant = isValidData(schema["Applicant Details"].type, data["Applicant Details"]) ? 
    <LoanApplicant data={data["Applicant Details"]} /> : null;
  const terms = isValidData(schema["Loan Terms"].type, data["Loan Terms"]) ? 
    <LoanTerms data={data["Loan Terms"]} /> : null;
  const repayment = isValidData(schema["Repayment Schedule"].type, data["Repayment Schedule"]) ? 
    <Repayment data={data["Repayment Schedule"]} /> : null;
  return (
    <ErrorBoundary>
      <div className="Loan">
        <div className="title">{title}</div>
        {image}
        {address}
        {applicant}
        {terms}
        {repayment}
      </div>
    </ErrorBoundary>
  )
};

export default Loan;