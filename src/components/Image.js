import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const Image = (props) => {
  const {data: {url, label}} = props;
  return (
    <ErrorBoundary>
      <div className="Image">
        <img src={url} alt={label} />
        <p>{label}</p>
      </div>
    </ErrorBoundary>
  )
};

export default Image;