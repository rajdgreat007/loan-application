import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import "./Image.css";

const Image = (props) => {
  const {data: {url, label}} = props;
  return (
    <ErrorBoundary>
      <div className="Image">
        <img src={url} alt={label} />
        <div className="label">{label}</div>
      </div>
    </ErrorBoundary>
  )
};

export default Image;