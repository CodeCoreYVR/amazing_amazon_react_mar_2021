import { StarRating } from './StarRating'

export function ReviewDetails(props) {
  /** This way of destructuring props gives the same result as in Product Details */
  let { id, rating, body, created_at, reviewer, deleteReview } = props
  console.log(`Reviewer: ${reviewer}`)
  return (
    <div>
      <hr/>
      <h3 className='header'>
        <StarRating max={5} currentNumber={rating} />
      </h3>
      <p>id: {id}</p>
      <p>body: {body}</p>
      <p>Reviewed by: {reviewer}</p>
      <p>created_at: {created_at}</p>{' '}
      <button onClick={ () => deleteReview(id) }>Delete</button>
      <hr/>
    </div>
  )
}
