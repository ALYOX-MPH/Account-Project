// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

// Icons
import { CiExport } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

//Libraries
import { Link } from "react-router";

//Components
import { ContactSeccion } from "./components/ContactSeccion";
import { TableSeccion } from "./components/TableSeccion";



export function CreateInvoice(){
    return (
    <div>
      <PageMeta
        title="Create Invoices | Accounting System"
        description="This is the Invoices page for the Accounting System"
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white ">
          Nueva Factura
        </h1>

        <div className="flex space-x-3">
          <button className="btn btn-outline ">    
            <CiExport className="text-2xl" />
            Exportar
          </button> 
          <button className="btn btn-primary"> <GoPlus className="text-2xl" />
              <Link to="/Invoice/create"> Nueva Factura  </Link>
           </button>
        </div>
      </div>

      {/* Invoice Options */}
      <div className="mb-5 h-25 border-1 bg-gray-100 flex items-center px-4 gap-x-6 dark:bg-gray-800 dark:border-gray-700 ">
        {/* Almacen */}
        <div>
            <label htmlFor="Storage" className="label mb-2 dark:text-gray-300">Almacen</label>

            <select defaultValue="Principal" className="select rounded-lg ">
                <option>Principal</option>
                <option>Ventas</option>
            </select>
        </div>

        {/* Lista de precio */}
        <div>
            <label htmlFor="Storage" className="label mb-2 dark:text-gray-300">Lista de precios</label>

            <select defaultValue="General" className="select rounded-lg">
                <option>General</option>
                <option>Targeta (10.00%) </option>
                <option>Al por mayor (15.00%) </option>
            </select>
        </div>

        {/* Vendedor */}
        <div>
            <label htmlFor="Storage" className="label mb-2 dark:text-gray-300">Lista de precios</label>

            <select defaultValue="General" className="select rounded-lg">
                <option>Empty</option>
                <option>Empty</option>
                <option>Empty</option>
            </select>
        </div>

      </div>

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

        {/* Big Card */}
        <div className="w-full  text-center flex flex-col gap-y-10">

            <ContactSeccion />

            <TableSeccion />


        


        </div>
      </div>
    </div>
  );
}