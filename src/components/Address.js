import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Item from "./Item";

const Address = (props) => {
  const {data: {lat, lng, address}} = props;
  return (
    <ErrorBoundary>
      <div className="Address">
        <h3 className="lat">{lat}</h3>
        <h3 className="long">{lng}</h3>
        <Item heading="Address" content={address} />
      </div>
    </ErrorBoundary>
  )
};

export default Address;