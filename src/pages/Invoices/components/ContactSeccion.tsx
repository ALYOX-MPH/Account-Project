
//Icons
import { CiSettings } from "react-icons/ci";

export function ContactSeccion() {
    return (
        <div className="flex flex-col gap-y-10">
            {/* Enterprice settings */}
            <div className="flex  justify-between gapx-20 items-center">
                <div className="flex flex-col justify-center w-90 bg-gray-100 h-25 border-3 border-dashed text-gray-300 hover:bg-gray-200 hover:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-600 dark:hover:text-gray-500 cursor-pointer px-4 py-3">
                    <span className="text-2xl font-bold">Utilizar mi logo</span>
                    <span className="">178 x 51 pixeles</span>
                </div>

                <span className="text-2xl mb-15 text-gray-500">Gas Damian</span>

                <div className="">
                    <select defaultValue="Pick a font" className="select  select-ghost mb-2 ">
                        <option>Credito fiscal (01)</option>
                        <option>Consumo (02)</option>
                        <option>Regimen especial de tributacion (14)</option>
                        <option>Gubernamentales (15)</option>
                        <option>Comprobante para exportacion (16)</option>
                    </select>

                    <div className="flex items-center gap-x-2">
                        <span>NFC</span>

                        <input type="text" disabled className="input" value={"B0100000002"} />

                        <button>
                            <CiSettings className="text-2xl" />
                        </button>
                    </div>

                </div>
            </div>

            <hr />

            {/* Contact Data */}
            <div className="flex justify-between">

                {/* left side */}

                <div className="flex flex-col gap-y-4">
                    {/* Contacto */}
                    <div className="flex gap-x-2">
                        <label htmlFor="Contact" className="label dark:text-gray-300">Contacto</label>

                        <select defaultValue="Seleccionar contacto" className="select rounded-lg w-80">
                            <option>Seleccionar contacto</option>
                            <option>Cliente 1</option>
                            <option>Cliente 2</option>
                        </select>

                        <button className="text-blue-400" >+ Nuevo contacto</button>
                    </div>

                    {/* Vendedor */}
                    <div className="flex gap-x-2">
                        <label htmlFor="RNC" className="label dark:text-gray-300">Contacto</label>

                        <input type="text" name="RNC" className="input" disabled placeholder="4021374758" />



                    </div>

                    {/* Telefono */}
                    <div className="flex gap-x-2">
                        <label htmlFor="Phone" className="label dark:text-gray-300">Telefono</label>

                        <input type="text" name="Phone" className="input" disabled placeholder="000-000-0000" />



                    </div>


                </div>

                {/* right side */}
                <div className="flex flex-col gap-y-4">
                    {/* Fecha */}
                    <div className="flex gap-x-2">
                        <label htmlFor="Date" className="label dark:text-gray-300">Fecha</label>

                        <input type="date" className="input" />
                    </div>

                    {/* Plazo de pago */}
                    <div className="flex gap-x-2 ">
                        <label htmlFor="Date" className="label dark:text-gray-300">plazo de pago</label>

                        <select name="Plaze" className="select w-65">
                            <option>De contado</option>
                            <option>8 Dias</option>
                            <option>15 Dias</option>
                            <option>30 Dias</option>
                            <option>60 Dias</option>
                        </select>
                    </div>

                   {/* Fecha */}
                    <div className="flex gap-x-2">
                        <label htmlFor="vencimiento" className="label dark:text-gray-300">Vencimiento</label>

                        <input type="vencimiento" className="input" />
                    </div>


                </div>
            </div>
        </div>
    );
}