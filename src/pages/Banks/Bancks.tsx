import { IoMdAdd } from "react-icons/io";
import LineChartOne from "../../components/charts/line/LineChartOne";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/ContactsTable";


export default function Banks() {
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Bancos" />
      
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-5 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-4">
        {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3">
                    <div>
                      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Bancos</h2>
                      <p className="text-sm text-gray-500">
                        Controla tus movimientos de dinero con tus cuentas de banco, efectivo y tarjetas de crédito.
                      </p>
                    </div>
                    <button  className="rounded-2xl border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                      + Nuevo Bancos
                    </button>
                  </div>

        {/* Big Card */}
        <div className="mx-auto w-full  text-center">

          
          <div className="grid grid-cols-3 gab-3 rounded-xl bg-white p-4 shadow-md dark:bg-gray-900 ">

            <div className="col mb-5 border-r-4 border-indigo-500 text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
              <p className="text-2xl text-white-700 m-2">Saldo Total de Bancos</p>
                <h2 className="text-4xl text-success-500">RD$200,00</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 m-2 ">Ultima actualizacion: 01/01/2023</p>
            </div>
            <div className="col mb-5 border-r-4 border-indigo-500 text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl m-2">
              <p className="text-2xl text-white-700 m-2">Deduciones de Bancos y Targetas</p>
                <h2 className="text-4xl text-red-500">RD$60,00</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 m-2">Ultima actualizacion: 01/05/2023</p>
            </div>
            <div className="col mb-5 text-center text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
              <p className="text-2xl text-white-700 m-2">Otros Ingresos</p>
                <h2 className="text-4xl text-success-500">RD$25,000</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 m-2">Ultima actualizacion: 01/08/2023</p>
            </div>
          </div>

          {/* Grafica */}
          <div className="space-y-1 mt-3 h-120">
                <ComponentCard title="Line Chart 1">
                <LineChartOne />
                </ComponentCard>
            </div>

            {/* Tabla */}
            <div className="">
              <ComponentCard title="Tabla Normal">
                <BasicTableOne />
              </ComponentCard>
            </div>
        </div>
      </div>
    </div>
  );
}
