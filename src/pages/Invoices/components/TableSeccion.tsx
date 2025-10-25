
//Hooks
import { useState } from "react";

//Components
import { TableSeccion_tr } from "./TableSeccion_tr";


export function TableSeccion() {

    const [activeField, setActiveField] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Desc %</th>
                            <th>Impuesto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th> {/* Empty header for action buttons */}
                        </tr>
                    </thead>
                    <tbody>
                        <TableSeccion_tr />
                        <TableSeccion_tr />
                        <TableSeccion_tr />
                    </tbody>
                </table>

            </div>

            <button className="text-blue-400 me-auto mt-5 p-2 rounded-2xl hover:bg-gray-100">+ Agregar linea</button>
        </div>
    )
}