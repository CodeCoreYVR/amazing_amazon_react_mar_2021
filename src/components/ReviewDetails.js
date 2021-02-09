export function ReviewDetails(props) {
  /** This way of destructuring props gives the same result as in Product Details */
  let { rating, body, createdAt, reviewerName } = props
  return (
    <div>
      <h1 className='header'>{rating} out of 5 stars</h1>
      <p>body: {body}</p>
      <p>Reviewed by: {reviewerName}</p>
      <p>createdAt: {createdAt}</p>{' '}
    </div>
  )
}
