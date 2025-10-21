import { useState } from "react";


export function SelectTypeOfProduct({onTypeChange}: {onTypeChange: (type: string) => void}) {  
    const [selectedType, setSelectedType] = useState("productos");


    return (
        <div>
            <label htmlFor="typeOfProduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipo de Producto o Servicio</label>

            <ul className="flex gap-3 text-dark dark:text-white mt-5"> 
                <li onClick={() => {
                    setSelectedType("productos");
                    onTypeChange("productos");
                }} 
                className={
                    `cursor-pointer
                    border
                    py-2
                    px-6
                    rounded-2xl 
                    transition-colors
                    duration-500

                    ${selectedType === "productos" ? "bg-blue-400" : ""}`}>Productos</li>


                <li onClick={() => {
                    setSelectedType("servicios");
                    onTypeChange("servicios");
                }} className={
                    `cursor-pointer
                    border
                    py-2
                    px-6
                    rounded-2xl
                    transition-colors
                    ${selectedType === "servicios" ? "bg-blue-400" : ""}`}>Servicios</li>
            </ul>

        </div>
    );
}