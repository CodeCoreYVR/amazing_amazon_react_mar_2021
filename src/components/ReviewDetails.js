import { StarRating } from './StarRating'

export function ReviewDetails(props) {
  /** This way of destructuring props gives the same result as in Product Details */
  let { rating, body, createdAt, reviewerName } = props
  return (
    <div>
      <h3 className='header'>
        <StarRating max={5} currentNumber={rating} />
      </h3>
      <p>body: {body}</p>
      <p>Reviewed by: {reviewerName}</p>
      <p>createdAt: {createdAt}</p>{' '}
    </div>
  )
}
