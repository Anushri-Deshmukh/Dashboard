import React from 'react';
import './Feedback.css';
import CommentCard from './CommentComponent/Comment';
import Image from "../../Asset/Image.png";

const comments = [
  {
    name: 'Jenny Wilson',
    comment: 'The food was excellent and so was the service. I had the best experience.',
    avatar: Image,
    rating: 5
  },
  {
    name: 'Dianne Russell',
    comment: 'I’ve enjoyed the food; blended sweet homemade focaccia bread and coffee. Perfect service.',
    avatar: Image,
    rating: 5
  },
  {
    name: 'Devon Lane',
    comment: 'A truly delicious experience with dishes that are fresh and tender and every bite was perfection.',
    avatar: Image,
    rating: 4
    },
];

const Feedback = () => {
  return (
    <div className="Feedback">
          <div className="feedback-scroll">
        <h3 style={{ fontSize: "18px"}}>Customer's Feedback</h3>
        {comments?.map((comment, index) => (
          <CommentCard
            key={index}
            name={comment?.name}
            comment={comment?.comment}
            avatar={comment?.avatar}
            rating={comment?.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
