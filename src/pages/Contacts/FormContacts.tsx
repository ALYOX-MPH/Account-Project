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
      <PageBreadcrumb pageTitle="" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">       
        <div className="mx-auto w-full grid grid-cols-2 gap-5">
                    {/* Left text */}
                    <div>
                      <h2 className="text-4xl font-medium dark:text-white white:text-dark">Contactos</h2>
                      <p className="text-sm text-gray-500">Gestiona la información de los clientes que podrás asociar en tus documentos de venta.</p>
                    </div>
                    
                    {/* Right buttons */}
                    <div>
                      <button className="bg-indigo-500 hover:bg-fuchsia-500 rounded-lg shadow-xl text-white"><IoMdAdd /> Nuevo Contacto</button>
                    </div>
            </div>
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-152">
                <table>
                    <thead>
                        <th>Nombre</th>
                        <th>RNC</th>
                        <th>Numero</th>
                        <th>Estado</th>
                    </thead>
                    <tbody>
                        <td>Alvaro Miguel Perez</td>
                        <td>615651651</td>
                        <td>809-651-2211</td>
                        <td>Activo</td>

                    </tbody>
                </table>
            
            </div>
        </div>
      </div>
  );
}
