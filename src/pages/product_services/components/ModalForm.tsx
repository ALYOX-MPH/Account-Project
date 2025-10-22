
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
                  <h3 className="text-2xl font-semibold mb-4">Agregar Nuevo Producto o Servicio</h3>
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

                   <div className="modal-action w-full flex justify-end" >

                    <a className="me-auto link text-gray-300 mt-2" href="#">ir a formulario avanzado</a>

                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Cerrar</button>
                    </form>

                    <button className="btn btn-primary">Crear nuevo producto/servicio</button>

                    
                  </div>
        </div>
    );
}