import React from 'react';
import './Comment.css';

const CommentCard = ({ name, comment, avatar, rating }) => {
  return (
    <div className="comment-card">
      <div className="comment-card-header">
        <img src={avatar} alt={`${name}'s avatar`} className="comment-card-avatar" />
        <div className="comment-card-info">
          <h4 className="comment-card-name">{name}</h4>
          <div className="comment-card-rating">
            {Array(rating).fill().map((_, i) => (
              <span key={i} className="star">⭐</span>
            ))}
          </div>
        </div>
      </div>
      <p className="comment-card-comment">{comment}</p>
    </div>
  );
};

export default CommentCard;
