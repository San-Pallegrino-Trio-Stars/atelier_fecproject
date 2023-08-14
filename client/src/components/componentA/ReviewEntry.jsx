import React from 'react';

const ReviewEntry = ({ review }) => {
  const dateObj = new Date(review.date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return (
    <div className="relative box-border h-50 w-50 p-4 border-4 reviewTile" key={review.review_id}>
      <div className="absolute top-0 right-0 h-50 w-50">
        {review.reviewer_name},{formattedDate}
      </div>
      <div>Rating: {review.rating}</div>
      <div>Summary: {review.summary}</div>
      <div>Recommend: {review.recommend ? 'Yes' : 'No'}</div>
      <div>Helpfulness: {review.helpfulness}</div>

      {/* Render other review details as needed */}
    </div>
  );
}

export default ReviewEntry;
