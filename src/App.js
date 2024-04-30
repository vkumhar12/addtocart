/* eslint-disable jsx-a11y/img-redundant-alt */

import Itemsss from "./components/Itemsss"
// import { products } from "./products"


const App = () => {

  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
        </h2>
        <Itemsss />
      </div>
    </section>
  )
}

export default App
