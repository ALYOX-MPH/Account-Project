
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import CatalogoCuentaTable from "../../components/tables/BasicTables/CatalogoCuentaTable";
import {
  FaFileImport,
  FaChartBar,
  FaFileAlt,
  FaPlusCircle,
  FaFolderPlus,
} from "react-icons/fa";
import { FaArrowTrendUp, FaAngleDown, FaAngleUp, FaEye, FaArrowTrendDown, FaBuilding, FaMoneyBillWave, FaUserShield, FaMoneyBillTransfer, FaChartLine, FaIndustry, FaCalendarCheck, FaFileInvoiceDollar } from "react-icons/fa6";

// Esta parte es de las opciones del select con iconos, Es una libreria
const options = [
  { value: "activo", label: <div className="flex items-center gap-2"><FaBuilding /> Activo</div> },
  { value: "activo_fijo", label: <div className="flex items-center gap-2"><FaMoneyBillWave /> Activo Fijo</div> },
  { value: "pasivo", label: <div className="flex items-center gap-2"><FaUserShield /> Pasivo</div> },
  { value: "patrimonio", label: <div className="flex items-center gap-2"><FaChartLine /> Patrimonio</div> },
];


export default function Blank() {
  // Estado del modal

  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <PageBreadcrumb pageTitle="" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="w-full space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Catalogo de Cuenta </h2>
              <p className="text-sm text-gray-500">
                Configura y personaliza las cuentas contables que hacen parte de tu catálogo.
              </p>
            </div>
                {/* Botones */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Importar */}
                <button
                  onClick={() => (document.getElementById('importar') as HTMLDialogElement)?.showModal() }
                  className="flex items-center gap-2 rounded-xl border border-indigo-500 bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 transition-all duration-200 shadow-sm"
                >
                  <FaFileImport className="text-white text-lg" />
                  Importar Catálogo
                </button>

                {/* Reportes */}
                <button
                 
                  className="flex items-center gap-2 rounded-xl border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-all duration-200 shadow-sm"
                >
                  <FaFileAlt className="text-white text-lg" />
                  Reportes
                </button>

                {/* Análisis y gráficas */}
                <button
                  
                  className="flex items-center gap-2 rounded-xl border border-purple-500 bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 transition-all duration-200 shadow-sm"
                >
                  <FaChartBar className="text-white text-lg" />
                  Análisis y Gráficas
                </button>

                {/* Nuevo SubCatálogo */}
                <button
                  onClick={() => (document.getElementById('subcatalogo') as HTMLDialogElement)?.showModal()}
                  className="flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-all duration-200 shadow-sm"
                >
                  <FaPlusCircle className="text-white text-lg" />
                  Nuevo SubCatálogo
                </button>

                {/* Nuevo Catálogo */}
                <button
                  onClick={() => (document.getElementById('catalogoCuenta') as HTMLDialogElement)?.showModal()}
                  className="flex items-center gap-2 rounded-xl border border-sky-400 bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 transition-all duration-200 shadow-sm"
                >
                  <FaFolderPlus className="text-white text-lg" />
                  Nuevo Catálogo
                </button>
              </div>
          </div>

          {/* Table */}
          

          <ComponentCard title="Catalogos agregados">
          <CatalogoCuentaTable />
        </ComponentCard>


        <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
      </div>
            {/* {Modal de Agregar Catalogo de cuentas} */}
          <dialog id="catalogoCuenta" className="modal">
            <div className="modal-box text-center">
              <h3 className="font-bold text-3xl border-b-1">Nueva cuenta</h3>
              <p className="py-4 text-sm text-gray-500">Crea y personaliza catalogos de cuenta enbase a tus necesidades</p>

              <fieldset>
                <legend className="fieldset-legend text-xl">Seleccione un icono</legend>
                <div className="icon-container flex justify-center gap-4 pb-4 pt-3">
                 <div className="btn text-xl hover:text-emerald-500"><FaBuilding /></div>
                    <div className="btn text-xl hover:text-emerald-500"><FaMoneyBillWave /></div>
                    <div className="btn text-xl hover:text-emerald-500"><FaUserShield /></div>
                    <div className="btn text-xl hover:text-emerald-500"><FaMoneyBillTransfer /></div>
                    <div className="btn text-xl hover:text-emerald-500"><FaChartLine /></div>
                    <div className="btn text-xl hover:text-emerald-500"><FaIndustry /></div>
                    <div className="btn text-xl hover:text-emerald-500"><FaCalendarCheck /></div>
    
                </div>
              </fieldset>

              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Nombre de la cuenta</legend>
                <input className="input" type="text" placeholder="Nombre de la cuenta" />
             
              </fieldset>
              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Código de la cuenta</legend>
                <input className="input" type="number" placeholder="Código de la cuenta" />
              </fieldset>
              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Naturaleza</legend>
                <input type="text" className="input" placeholder="Tipo de Naturaleza" list="browsers" />
                  <datalist id="browsers">
                    <option value="Deductoria"></option>
                    <option value="Acreedora"></option>
                  </datalist>
              </fieldset>
              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Descripción</legend>
                <textarea className="input" placeholder="Type here" />
              </fieldset>
              
              
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn rounded-xl border border-gray-700">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          {/* {Modal de Agregar SubCatalogo de cuentas} */}
          <dialog id="subcatalogo" className="modal">
            <div className="modal-box text-center">
              <h3 className="font-bold text-3xl border-b-1">Nuevo SubCatálogo</h3>
              <p className="py-4 text-sm text-gray-500">Crea y personaliza subcatálogos de cuenta enbase a tus necesidades</p>
              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Nombre del SubCatálogo</legend>
                <input className="input" type="text" placeholder="Nombre del SubCatálogo" />
              </fieldset>
              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Código del SubCatálogo</legend>
                <input className="input" type="number" placeholder="Código del SubCatálogo" />
              </fieldset>
              <fieldset className="flex items-center justify-center fieldset">
                <legend className="fieldset-legend text-xl">Descripción</legend>
                <textarea className="input" placeholder="Type here" />
              </fieldset>
              <fieldset >
                <legend className="fieldset-legend text-xl">Selecciona el Catálogo Principal</legend>
                <div className="icon-container flex justify-center gap-4 pb-4 pt-3">
                 <select className="input w-full max-w-xs">
                   <option value=""><FaBuilding />Activo</option>
                   <option value=""><FaBuilding />Activo Fijo</option>
                   <option value=""><FaBuilding />Activo a Corto Plazo</option>
                   <option value=""><FaBuilding />Pasivo</option>
                   <option value=""><FaBuilding />Patrimonio</option>
                   <option value=""><FaBuilding />Gastos</option>
                    <option value=""><FaBuilding />Ingresos</option>
                    <option value=""><FaBuilding />Costos</option>
                 </select>
               </div>
              </fieldset>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn rounded-xl border border-gray-700">Close</button>
                </form>
              </div>
            </div>
          </dialog>

        </div>
      </div>
    </div>
  );
}
