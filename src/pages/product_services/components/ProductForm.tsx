
export function ProductForm() {
    return (
        <div className="flex flex-col gap-y-2.5">
            <h4 className="text-xl font-semibold mb-2">Detalles del Producto</h4>
            {/* Product fields go here */}

            {/* first row */}
            <div className="flex justify-between gap-8">
                {/* Name field */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label className="label" htmlFor="Name">Nombre</label>
                    <input 
                    type="text" 
                    name="Name" 
                    id="Name"
                    className="input input-bordered "
                    
                    />
                </div>

                {/* Unit field */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label className="label" htmlFor="">Unidad de medida</label>

                   <select name="Metrics" className="select select-bordered ">
                        <option  value="1">Unidad</option>
                        <option value="2">Paquete</option>
                        <option value="3">Botella</option>
                        <option value="4">Docena</option>
                   </select>

                    
                    
                </div>
            </div>

            {/* second row */}
            <div >
                <label className="label" htmlFor="Almacen">Almacen</label>
                <select name="Price" className="select select-bordered w-full">
                    <option value="1">Principal</option>
                    <option value="2">Almacen 2</option>
                    <option value="3">Almacen 3</option>
                </select>
            </div>

            {/* third row */}
            <div className="flex w-full justify-between gap-8 ">
                {/* base price */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label className="label" htmlFor="Price">Precio base</label>
                    <input 
                    type="text" 
                    placeholder="RD$ 0.00" 
                    name="Price" 
                    id="Price"
                    className="input input-bordered "
                    
                    />
                </div>

                {/* Select impuestos */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label className="label" htmlFor="Taxes">Impuestos</label>
                    <select name="Taxes" className="select select-bordered ">
                        <option value="1">0% Exento</option>
                        <option value="2">18% ITBIS </option>
                        <option value="3">16% ITBIS</option>
                    </select>
                </div>

                 {/* Precio total */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label className="label" htmlFor="TotalPrice">Precio total</label>
                    <input 
                    type="text" 
                    placeholder="RD$ 0.00" 
                    name="TotalPrice" 
                    id="TotalPrice"
                    className="input input-bordered "
                    />
                </div>


            </div>   
        </div>
    );
}