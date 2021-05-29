import React from 'react';
import { ReviewDetails } from '../ReviewDetails'

export function ReviewList(props) {
  const { reviews, deleteReview } = props
  console.log(`SingleProductReview: ${reviews}`)
  return (
    <div>
      { reviews && reviews.map((review) => {
        let { rating, body, created_at, reviewer, id } = review
        console.log(`Review: ${review}`)
        return (
          <ReviewDetails
            key={id}
            id={id}
            rating={rating}
            body={body}
            reviewer={reviewer ? reviewer : "hello"}
            created_at={created_at}
            deleteReview={id => deleteReview(id)}
            {...review}
          />
        )
      })}
    </div>
  )
}
