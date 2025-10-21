
export function ProductForm() {
    return (
        <div>
            <h4 className="text-xl font-semibold mb-2">Detalles del Producto</h4>
            {/* Product fields go here */}

            <div className="flex justify-between">
                {/* Name field */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label htmlFor="Name">Nombre</label>
                    <input 
                    type="text" 
                    placeholder="Juan Antonio" 
                    name="Name" 
                    id="Name"
                    
                    />
                </div>

                {/* Unit field */}
                <div className="flex flex-col mb-4 w-full mr-2 text-white ">
                    <label htmlFor="">Unidad de medida</label>

                   <select name="Metrics" id="">
                        <option  value="1">Unidad</option>
                        <option value="2">Paquete</option>
                        <option value="3">Botella</option>
                        <option value="4">Docena</option>
                   </select>

                    
                    
                </div>
            </div>
        </div>
    );
}