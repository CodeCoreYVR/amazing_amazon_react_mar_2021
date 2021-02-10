import { ReviewDetails } from './ReviewDetails'

export function ReviewList(props) {
  const { reviews } = props

  return (
    <div>
      {reviews.map((review) => {
        let { rating, body, created_at, reviewer, id } = review
        return (
          <ReviewDetails
            key={id}
            rating={rating}
            body={body}
            reviewerName={reviewer.full_name}
            createdAt={created_at}
          />
        )
      })}
    </div>
  )
}
