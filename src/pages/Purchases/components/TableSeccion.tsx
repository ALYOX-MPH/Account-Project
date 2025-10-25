
export function TableSeccion() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="bg-gray-200">
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
                        {/* row 1 */}
                        <tr>
                            {/* Producto */}
                            <td>
                                <select className="select w-70 rounded-lg">
                                    <option>Oxigeno</option>
                                    <option>Gas</option>
                                </select>
                            </td>
                            {/* precio */}
                            <td>
                                <input type="text" className="input" />
                            </td>
                            {/* Desc % */}
                            <td>
                                <input type="number" className="input" placeholder="%" />
                            </td>
                            {/* Impuesto */}
                            <td>
                                <select name="Taxes" className="select select-bordered w-70 rounded-lg ">
                                    <option value="2">18% ITBIS </option>
                                    <option value="1">0% Exento</option>
                                    <option value="3">16% ITBIS</option>
                                </select>
                            </td>
                            {/* Cantidad */}
                            <td>
                                <input type="number" className="input" />
                            </td>

                            <td>RD$ 0.00</td>

                            <td><button>X</button></td>
                        </tr>

                        {/* row 2 */}
                        <tr>
                            {/* Producto */}
                            <td>
                                <select className="select w-70 rounded-lg">
                                    <option>Oxigeno</option>
                                    <option>Gas</option>
                                </select>
                            </td>
                            {/* precio */}
                            <td>
                                <input type="text" className="input" />
                            </td>
                            {/* Desc % */}
                            <td>
                                <input type="number" className="input" placeholder="%" />
                            </td>
                            {/* Impuesto */}
                            <td>
                                <select name="Taxes" className="select select-bordered w-70 rounded-lg ">
                                    <option value="2">18% ITBIS </option>
                                    <option value="1">0% Exento</option>
                                    <option value="3">16% ITBIS</option>
                                </select>
                            </td>
                            {/* Cantidad */}
                            <td>
                                <input type="number" className="input" />
                            </td>

                            <td>RD$ 0.00</td>

                            <td><button>X</button></td>
                        </tr>

                         {/* row 3 */}
                        <tr>
                            {/* Producto */}
                            <td>
                                <select className="select w-70 rounded-lg">
                                    <option>Oxigeno</option>
                                    <option>Gas</option>
                                </select>
                            </td>
                            {/* precio */}
                            <td>
                                <input type="text" className="input" />
                            </td>
                            {/* Desc % */}
                            <td>
                                <input type="number" className="input" placeholder="%" />
                            </td>
                            {/* Impuesto */}
                            <td>
                                <select name="Taxes" className="select select-bordered w-70 rounded-lg ">
                                    <option value="2">18% ITBIS </option>
                                    <option value="1">0% Exento</option>
                                    <option value="3">16% ITBIS</option>
                                </select>
                            </td>
                            {/* Cantidad */}
                            <td>
                                <input type="number" className="input" />
                            </td>

                            <td>RD$ 0.00</td>

                            <td><button>X</button></td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>

            <button className="text-blue-400 me-auto mt-5 p-2 rounded-2xl hover:bg-gray-100">+ Agregar linea</button>
        </div>
    )
}