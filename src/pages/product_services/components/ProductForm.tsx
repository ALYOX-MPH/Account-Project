
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
                    type="text" placeholder="Juan Antonio" name="Name" id="Name" 
                    
                    
                />
                </div>
            </div>
        </div>
    );
}