// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

// Icons

import { LiaEdit } from "react-icons/lia";
import { MdAttachMoney } from "react-icons/md";   
import { SlOptionsVertical } from "react-icons/sl";
import { ImPrinter } from "react-icons/im";
import { TbXboxX } from "react-icons/tb";


//Libraries
import { Link } from "react-router";
import { FaFileAlt, FaPlusCircle } from "react-icons/fa";
import { FaFileImport, FaChartBar, FaFolderPlus, FaMoneyBillTransfer } from "react-icons/fa6";





export default function Purchases() {
  return (
    <div>
      <PageMeta
        title="Invoices | Accounting System"
        description="This is the Invoices page for the Accounting System"
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Compras Registradas
        </h1>

<div className="flex flex-wrap items-center gap-3">

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
                  Nota de Entrega
                </button>

                {/* Nuevo SubCatálogo */}
                <button
                  onClick={() => (document.getElementById('subcatalogo') as HTMLDialogElement)?.showModal()}
                  className="flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-all duration-200 shadow-sm"
                >
                  <FaPlusCircle className="text-white text-lg" />
                  Orden de Compra
                </button>

                {/* Nuevo Catálogo */}
                <button
          
                  className="flex items-center gap-2 rounded-xl border border-sky-400 bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 transition-all duration-200 shadow-sm"
                >
                  <FaFolderPlus className="text-white text-lg" />
                  <Link to="/Purchases/create"> Nueva Compra</Link>
                </button>
              </div>



      </div>

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

        {/* Big Card */}
        <div className="w-full  text-center">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Num. factura</th>
                  <th>Fecha</th>
                  <th>Proveedor</th>
                  <th>Total</th>
                  <th>Por cobrar</th>
                  <th>Estado</th>
                  <th></th> {/* Empty header for action buttons */}
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-base-300">
                  <th>B0100001</th>
                  <td>20/11/2023</td>
                  <td><button className="btn btn-link text-gray-300 text-sm" ><Link to="/Contacts">Texaco</Link></button></td>
                  <td>6,000RD$</td>
                  <td>6,000RD$</td>
                  <td><span className="bg-orange-400 rounded-2xl text-center p-2">Pendiente Pago</span></td>
                  <td className="flex justify-end">
                    <button className=""><MdAttachMoney  className="text-2xl" /></button>

                    <button className="" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }  as React.CSSProperties }>
                      <SlOptionsVertical className="" />
                    </button>

                    <ul className="dropdown dropdown-left mt-12 ms-12 menu w-52 rounded-box bg-base-100 shadow-sm"
                      popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }  as React.CSSProperties}>
                      <li><button><FaMoneyBillTransfer />Registrar Pago</button> </li>
                      <li><button><LiaEdit/> Editar</button> </li>
                      <li><button className="text-red-500"> <TbXboxX />Nota de Devito</button> </li> 
                      <li><button><ImPrinter/> Imprimir</button> </li>
                    </ul>
                    
                  </td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-base-300">
                  <th>B0100002</th>
                  <td>22/11/2023</td>
                   <td><button className="btn btn-link text-gray-300 text-sm" ><Link to="/Contacts">Shell</Link></button></td>
                  <td>10,000RD$</td>
                  <td>0RD$</td>
                  <td><span className="bg-blue-400 rounded-2xl text-center p-2">Pagada</span></td>
                  <td className="flex justify-end">
                    <button className=""><MdAttachMoney  className="text-2xl" /></button>
                    <button className="" popoverTarget="popover-2" style={{ anchorName: "--anchor-2" }  as React.CSSProperties }>
                      <SlOptionsVertical className="" />
                    </button>
                    <ul className="dropdown dropdown-left mt-12 ms-12 menu w-52 rounded-box bg-base-100 shadow-sm"
                      popover="auto" id="popover-2" style={{ positionAnchor: "--anchor-2" }  as React.CSSProperties}>
                      <li><button><LiaEdit/> Editar</button> </li>
                      <li><button><ImPrinter/> Imprimir</button> </li>
                      <li><button className="text-red-500"> <TbXboxX />Devolucion</button> </li> 
                    </ul>
                  </td>
                </tr>

                {/* row 3 */}
                <tr className="hover:bg-base-300">
                  <th>B0100003</th>
                  <td>22/11/2023</td>
                   <td><button className="btn btn-link text-gray-300 text-sm" ><Link to="/Contacts">Esso</Link></button></td>
                  <td>10,000RD$</td>
                  <td>0RD$</td>
                  <td><span className="bg-red-400 rounded-2xl text-center p-2">Devuelta</span></td>
                  <td className="flex justify-end">
                    <button className=""><MdAttachMoney  className="text-2xl" /></button>
                    <button className="" popoverTarget="popover-2" style={{ anchorName: "--anchor-2" }  as React.CSSProperties }>
                      <SlOptionsVertical className="" />
                    </button>
                    <ul className="dropdown dropdown-left mt-12 ms-12 menu w-52 rounded-box bg-base-100 shadow-sm"
                      popover="auto" id="popover-2" style={{ positionAnchor: "--anchor-2" }  as React.CSSProperties}>
                      <li><button><LiaEdit/> Editar</button> </li>
                      <li><button><ImPrinter/> Imprimir</button> </li>
                    </ul>
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
