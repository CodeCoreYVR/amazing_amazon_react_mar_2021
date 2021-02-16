import { StarRating } from './StarRating'

export function ReviewDetails(props) {
  /** This way of destructuring props gives the same result as in Product Details */
  let { rating, body, createdAt, reviewer } = props
  return (
    <div>
      <hr/>
      <h3 className='header'>
        <StarRating max={5} currentNumber={rating} />
      </h3>
      <p>id: {id}</p>
      <p>body: {body}</p>
      <p>Reviewed by: {reviewer}</p>
      <p>createdAt: {createdAt}</p>{' '}
      <button onClick={ () => deleteReview(id) }>Delete</button>
      <hr/>
    </div>
  )
}
