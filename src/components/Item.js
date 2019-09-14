import React from 'react';

const getContent = (content) => {
  if(content instanceof Array){
    return content.join(",");
  }
  return content;
};

const Item = (props) => {
  const {heading, content} = props;
  return (
    <div>
      <div className="Heading">
        {heading}
      </div>
      <div className="Content">
        {getContent(content)}
      </div>
    </div>
  );
};

export default Item;