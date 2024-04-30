/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CartContent } from './Itemsss';

export default function ProductDetails({ id, title, img, description, price }) {
    const { deleteProduct } = useContext(CartContent)
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6  py-6 ">
            <div
                class="flex items-center flex-col min-[550px]:flex-row gap-3  min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div class="img-box"><img src={img} alt="perfume bottle image" class="xl:w-[140px]" /></div>
                <div class="pro-data w-full max-w-sm ">
                    <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{title}

                    </h5>
                    <p
                        class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                        {description}</p>
                    <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">₹{price}</h6>
                </div>
            </div>
            <div
                class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <div className="flex items-center w-full mx-auto justify-center">
                    <button
                        className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        onClick={decrement} // Call decrement function on button click
                    >
                        <AiOutlineMinus className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" />
                    </button>
                    <input
                        type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        placeholder="1"
                        value={count} // Bind input value to count state
                        readOnly // Make input read-only
                    />
                    <button
                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        onClick={increment} // Call increment function on button click
                    >
                        <AiOutlinePlus className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" />
                    </button>
                </div>

                <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                    ₹{price}</h6>

                <button
                    class="text-red-600 border hover:bg-red-500 hover:text-white cursor-pointer p-2 rounded-3xl border-red-300 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center" onClick={() => deleteProduct(id)}>
                    Remove</button>
            </div>





        </div>
    )
}
