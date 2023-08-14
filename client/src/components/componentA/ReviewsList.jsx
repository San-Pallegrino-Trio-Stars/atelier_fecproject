import React, {useEffect, useState} from 'react';
import ReviewEntry from './ReviewEntry.jsx'
import axios from 'axios';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    return axios.get('http://localhost:3000/reviews/getAllReviews')
      .then(response => {
        // console.log(response.data);
        setReviews(response.data);
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
    <div className="relative overflow-y-auto h-64 reviews-list ">
      <h2>Reviews List</h2>
      {reviews.slice(0, visible).map(review => (
        <ReviewEntry review={review} key={review.review_id} />
      ))}

      <button onClick={showMoreReviews}> More Reviews</button>
    </div>
  );
};

export default ReviewsList;