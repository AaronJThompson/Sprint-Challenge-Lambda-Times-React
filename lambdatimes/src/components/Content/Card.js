import React from 'react';
import pt from 'prop-types';
const Card = props => {
  let { headline, tab, img, author } = props;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: pt.string.isRequired,
  tab: pt.string.isRequired,
  img: pt.string.isRequired,
  author: pt.string.isRequired,
}

export default Card;
