import './App.css'
import { ProductDetails } from './components/ProductDetails'
import { ReviewDetails } from './components/ReviewDetails'

function App() {
  return (
    <div className='App'>
      <ProductDetails
        title='Good Quality Wrench'
        description='So good please buy'
        fullName='John Schmoe'
        price={7}
        createdAt={new Date().toString()}
      />
      <ReviewDetails
        rating={4}
        body='It is as good as they say'
        reviewerName='Sally Bati'
        createdAt={new Date().toString()}
      />
    </div>
  )
}

export default App
