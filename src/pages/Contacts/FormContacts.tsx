import { IoMdAdd } from "react-icons/io";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Blank() {
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <PageBreadcrumb pageTitle="Contactos" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="w-full space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Contactos</h2>
              <p className="text-sm text-gray-500">
                Gestiona la información de los clientes que podrás asociar en tus documentos de venta.
              </p>
            </div>
            <button>
              <IoMdAdd className="text-lg" />
              Nuevo Contacto
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-200">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 font-semibold">Tipo</th>
                  <th className="px-6 py-3 font-semibold">Nombre</th>
                  <th className="px-6 py-3 font-semibold">RNC</th>
                  <th className="px-6 py-3 font-semibold">Número</th>
                  <th className="px-6 py-3 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-3">Cliente</td>
                  <td className="px-6 py-3">Álvaro Miguel Pérez</td>
                  <td className="px-6 py-3">615651651</td>
                  <td className="px-6 py-3">809-651-2211</td>
                  <td className="px-6 py-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-800 dark:text-green-200">
                      Activo
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-3">Proveedor</td>
                  <td className="px-6 py-3">Jose Peralta Gutierrez</td>
                  <td className="px-6 py-3">615651651</td>
                  <td className="px-6 py-3">809-651-2211</td>
                  <td className="px-6 py-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-800 dark:text-green-200">
                      Activo
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
