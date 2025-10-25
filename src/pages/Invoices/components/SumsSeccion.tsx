
export function SumsSeccion() {
    return (
        <div className="mt-8 flex justify-between items-center">
            
            {/* left side */}
            <div className="flex flex-col justify-center w-90 bg-gray-100 h-25 border-3 border-dashed text-gray-300 hover:bg-gray-200 hover:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-600 dark:hover:text-gray-500 cursor-pointer px-4 py-3">
                <span className="text-2xl font-bold">Utilizar mi firma</span>
                <span className="">178 x 51 pixeles</span>
            </div>

            {/* right side */}
            <div>
                <div className="flex justify-between gap-x-15 pb-3">
                    {/* left side (Retencion) */}
                    <div className="flex flex-col gap-y-4 text-gray-400">
                        <button className="text-blue-500  px-3 py-1 rounded-md bg-transparent hover:bg-blue-100 " >+ Agregar retencion</button>
                        <span>Subtotal</span>
                        <span>Descuento</span>
                        <span>Subtotal</span>
                    </div>

                    {/* right side (Conduce) */}
                     <div className="flex flex-col gap-y-4  text-gray-400">
                        <button className="text-blue-500 px-3 py-1 rounded-md bg-transparent hover:bg-blue-100 " >+ Agregar conduce</button>
                        <span>RD$ 0.00</span>
                        <span>-RD$ 0.00</span>
                        <span>RD$ 0.00</span>
                       
                    </div>

                </div>
                <hr />

                <div className="flex justify-between pb-3">
                    {/* Left side (Total) */}
                    <div className="flex flex-col gap-y-4 text-gray-400">
                        <span className="text-2xl font-bold">Total</span>
                    </div>

                    {/* Right side (Total) */}
                    <div className="flex flex-col gap-y-4 text-gray-400">
                        <span className="text-2xl font-bold">RD$ 0.00</span>
                   </div>
                </div>
            </div>
            
        </div>
    )
}