import React, { Component } from 'react';
import Card from './Card';
import pt from 'prop-types';
const Cards = props => {
  let { cards } = props;
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {
        cards.map((card) => {
          return (
            <Card {...card} />
          )
        })
      }
    </div>
  )
}

Cards.propTypes = {
  cards: pt.arrayOf(pt.shape({
    headline: pt.string,
    tab: pt.string,
    img: pt.string,
    author: pt.string,
  })).isRequired,
}

export default Cards;