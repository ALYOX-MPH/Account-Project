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

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-4 py-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
              Bancos
            </h2>
            <p className="text-sm text-gray-500">
              Controla tus movimientos de dinero con tus cuentas de banco, efectivo y tarjetas de crédito.
            </p>
          </div>

          <button className="flex items-center justify-center gap-1 rounded-xl border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <IoMdAdd className="text-lg" />
            Nuevo Banco
          </button>
        </div>

        {/* Big Card */}
        <div className="mx-auto w-full text-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl bg-white p-4 shadow-md dark:bg-gray-900">
            {/* Tarjeta 1 */}
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-indigo-500 text-center text-gray-900 dark:text-white p-3">
              <p className="text-lg sm:text-xl font-medium mb-2">Saldo Total de Bancos</p>
              <h2 className="text-3xl sm:text-4xl text-green-500 font-bold">RD$200,00</h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                Última actualización: 01/01/2023
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-indigo-500 text-center text-gray-900 dark:text-white p-3">
              <p className="text-lg sm:text-xl font-medium mb-2">
                Deducciones de Bancos y Tarjetas
              </p>
              <h2 className="text-3xl sm:text-4xl text-red-500 font-bold">RD$60,00</h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                Última actualización: 01/05/2023
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="text-center text-gray-900 dark:text-white p-3">
              <p className="text-lg sm:text-xl font-medium mb-2">Otros Ingresos</p>
              <h2 className="text-3xl sm:text-4xl text-green-500 font-bold">RD$25,000</h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                Última actualización: 01/08/2023
              </p>
            </div>
          </div>

          {/* Gráfica */}
          <div className="mt-6 space-y-4">
            <ComponentCard title="Gráfico de Movimientos">
              <div className="overflow-x-auto">
                <LineChartOne />
              </div>
            </ComponentCard>
          </div>

          {/* Tabla */}
          <div className="mt-6">
            <ComponentCard title="Tabla de Bancos">
              <div className="overflow-x-auto">
                <BasicTableOne />
              </div>
            </ComponentCard>
          </div>
        </div>
      </div>
    </div>
  );
}
