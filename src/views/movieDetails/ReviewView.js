import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from 'components/MoreInfo/Reviews';
import { getReviewsInfo } from '../../api/api';
import NotFound from 'components/MoreInfo/NotFound/NotFound';

const ReviewView = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getReviewsInfo(movieId).then(data => !cancelled && setReviews(data));

    return () => {
      cancelled = true;
    };
  }, [movieId]);

  return <>{reviews.length > 0 ? <Reviews reviews={reviews} /> : <NotFound />}</>;
};

export default ReviewView;
