
export default function CartButton() {
    return (
        <div id="" className="relative">
            <div className="bg-sky-500 rounded-full h-5 w-5 flex items-center justify-center absolute z-10 -top-1.5 -right-1.5">
                <p className="text-[.8rem]">0</p> {/* cuando se encuentren mas de 9 objetos en el carrito se colcara +9 */}
            </div>
            <button className="bg-[#FFBC39] h-[2.7rem] w-[6.4rem] rounded-lg flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                <p className="text-[#1C1C1C] font-medium text-[1.2rem]">Cart</p>
            </button>
        </div>
    );
}