import React, { useState } from 'react';

const Estrellas = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starCount) => {
    setRating(starCount);
  };

  return (
    <div>
      <h4>Calificación: {rating} estrellas</h4>
      {[1, 2, 3, 4, 5].map((starCount) => (
        <Star
          key={starCount}
          filled={starCount <= rating}
          onClick={() => handleStarClick(starCount)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <span
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    {filled ? '★' : '☆'}
  </span>
);

export default Estrellas;