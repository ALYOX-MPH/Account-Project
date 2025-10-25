

import { useState } from "react";

export function TableSeccion_tr() {

    const [activeField, setActiveField] = useState(false);

    return (
         <tr>
                            {/* Producto */}
                            <td>
                                <select className="select w-70 rounded-lg" onChange={() => setActiveField(true)}>
                                    <option value="" disabled selected  hidden>Selecciona un producto/servicio</option>
                                    <option>Oxigeno</option>
                                    <option>Gas</option>
                                </select>
                            </td>
                            {/* precio */}
                            <td>
                                <input type="number" className="input" disabled={!activeField}/>
                            </td>
                            {/* Desc % */}
                            <td>
                                <input type="number" className="input" placeholder="%" disabled={!activeField}/>
                            </td>
                            {/* Impuesto */}
                            <td>
                                <select name="Taxes" className="select select-bordered w-70 rounded-lg" disabled={!activeField}>
                                    <option value="" disabled selected  hidden>Selecciona el impuesto </option>    
                                    <option value="2">18% ITBIS </option>
                                    <option value="1">0% Exento</option>
                                    <option value="3">16% ITBIS</option>
                                </select>
                            </td>
                            {/* Cantidad */}
                            <td>
                                <input type="number" className="input" disabled={!activeField} />
                            </td>

                            <td>
                                <input type="text" className="input" disabled={!activeField} />
                            </td>

                            <td><button>X</button></td>
                        </tr>

    )
}
