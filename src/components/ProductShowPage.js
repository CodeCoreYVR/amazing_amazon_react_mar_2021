import { ProductDetails } from './ProductDetails'
import { ReviewDetails } from './ReviewDetails'
import { product } from '../data/product'
import { ReviewList } from './ReviewList'

export default function ProductShowPage() {
  let { title, description, created_at, seller, price, reviews } = product
  return (
    <>
      <ProductDetails
        title={title}
        description={description}
        fullName={seller.full_name}
        price={price}
        createdAt={created_at}
      />
      <ReviewList reviews={reviews} />
    </>
  )
}
