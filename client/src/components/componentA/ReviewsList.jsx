import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    return axios.get('http://localhost:3000/api/reviews')
      .then(response => {
        console.log(response.data);
        setReviews(response.data.reviews);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };


  const showMoreReviews = () => {
    setVisible((prevValue) => prevValue + 2);
  }



  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="reviews-list">
      <h2>Reviews List</h2>
      {reviews.slice(0, visible).map(review => (
        <div className="reviewTile" key={review.review_id}>
          <p>Reviewer name: {review.reviewer_name}</p>
          <p>Rating: {review.rating}</p>
          <p>Summary: {review.summary}</p>
          <p>Recommend: {review.recommend ? 'Yes' : 'No'}</p>
          <p>Helpfulness: {review.helpfulness}</p>

          {/* Render other review details as needed */}
        </div>
      ))}

      <button onClick={showMoreReviews}> More Reviews</button>
    </div>
  );
};

export default ReviewsList;