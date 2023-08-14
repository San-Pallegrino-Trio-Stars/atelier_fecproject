import React from 'react';


const ReviewEntry = ({review}) => {
  return (
    <div className="relative box-border h-50 w-50 p-4 border-4 reviewTile" key={review.review_id}>
          <div className="absolute top-0 right-0 h-40 w-40" >Reviewer name: {review.reviewer_name} {review.date}</div>
          <div>Rating: {review.rating}</div>
          <div>Summary: {review.summary}</div>
          <div>Recommend: {review.recommend ? 'Yes' : 'No'}</div>
          <div>Helpfulness: {review.helpfulness}</div>

          {/* Render other review details as needed */}
    </div>
  )
}

export default ReviewEntry;