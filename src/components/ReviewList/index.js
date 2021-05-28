import React from 'react';
import { ReviewDetails } from '../ReviewDetails'

export function ReviewList(props) {
  const { reviews, deleteReview } = props

  return (
    <div>
      { reviews && reviews.map((review) => {
        let { rating, body, created_at, reviewer, id } = review
        return (
          <ReviewDetails
            key={id}
            id={id}
            rating={rating}
            body={body}
            reviewer={reviewer ? reviewer : ""}
            createdAt={created_at}
            deleteReview={id => deleteReview(id)}
            {...review}
          />
        )
      })}
    </div>
  )
}
