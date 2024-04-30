import { useContext } from "react"
import { CartContent } from "./Itemsss"
import ProductDetails from "./ProductDetails"

export default function MainContent() {
    const { item, deleteAllProduct } = useContext(CartContent)
    return (
        <div>
            <div class="hidden lg:grid grid-cols-2 py-6 sticky top-0 border-b border-gray-200 bg-white">
                <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                    <span class="w-full max-w-[260px] text-center">Quantity</span>
                    <span class="w-full max-w-[200px] text-center">Total</span>
                    <span class="w-full max-w-[200px] text-center">Remove</span>
                </p>
            </div>
            {
                item.map((data) => {
                    return <ProductDetails key={data.id} {...data} />
                })
            }
            <div className="w-full flex items-end justify-end pt-5 pb-5">
                <h6
                    class="bg-red-600 border hover:bg-red-600  cursor-pointer p-2 text-white rounded border-red-300 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center" onClick={deleteAllProduct}>
                    Clear Cart</h6>
            </div>


            <div class="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div class="flex items-center justify-between w-full mb-6">
                    <p class="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">₹360.00</h6>
                </div>
                <div class="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p class="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">₹45.00</h6>
                </div>
                <div class="flex items-center justify-between w-full py-6">
                    <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-indigo-500">₹405.00</h6>
                </div>
            </div>
            <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    class="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                    <span class="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                    to Payment
                    <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
