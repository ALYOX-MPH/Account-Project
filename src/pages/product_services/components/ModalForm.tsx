
// Main component
import { SelectTypeOfProduct } from "./SelectTypeOfProduct";
import { ProductForm } from "./ProductForm";
import { ServiceForm } from "./ServiceForm";

//Hooks
import { useState } from "react";





export function ModalForm(){

    const [type, setType] = useState("productos");

    const ManageType = (selectedType: string) => {
        setType(selectedType);
    };

   


    return (
        <div>
                  <h3 className="text-2xl font-semibold mb-4 text-dark dark:text-white">Agregar Nuevo Producto o Servicio</h3>
                  <form>
                    {/* Select type of product or service */}
                    <SelectTypeOfProduct onTypeChange={ManageType} />

                    {/* Conditional rendering based on type */}
                    {type === "productos" ? (
                        <div className="mt-6">
                            {/* Renderizando formulario de productos */}
                            <ProductForm />
                        </div>
                    ) : (
                        
                        <div className="mt-6">
                             {/* Renderizando formulario de servicios */}
                            <ServiceForm />
                        </div>
                    )}

                  </form>
        </div>
    );
}