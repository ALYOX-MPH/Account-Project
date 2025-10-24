// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

// Icons
import { CiExport } from "react-icons/ci";
import { LiaEdit } from "react-icons/lia";
import { MdAttachMoney } from "react-icons/md";   
import { SlOptionsVertical } from "react-icons/sl";
import { ImPrinter } from "react-icons/im";
import { TbXboxX } from "react-icons/tb";
import { GoPlus } from "react-icons/go";

//Libraries
import { Link } from "react-router";





export default function Invoice() {
  return (
    <div>
      <PageMeta
        title="Invoices | Accounting System"
        description="This is the Invoices page for the Accounting System"
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Factura de venta
        </h1>

        <div className="flex space-x-3">
          <button className="btn btn-outline">
            <CiExport className="text-2xl" />
            Exportar
          </button> 
          <button className="btn btn-primary"> <GoPlus className="text-2xl" />
              <Link to="/Invoice/create"> Nueva Factura  </Link>
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
                  <th>Cliente</th>
                  <th>Total</th>
                  <th>Por cobrar</th>
                  <th>Estado</th>
                  <th></th> {/* Empty header for action buttons */}
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-base-300">
                  <th>B00100001</th>
                  <td>20/11/2023</td>
                  <td>Luis antonio</td>
                  <td>6,000RD$</td>
                  <td>6,000RD$</td>
                  <td><span className="bg-orange-400 rounded-2xl text-center p-2">Pendiente</span></td>
                  <td className="flex justify-end">
                    <button className=""><MdAttachMoney  className="text-2xl" /></button>

                    <button className="" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }  as React.CSSProperties }>
                      <SlOptionsVertical className="" />
                    </button>

                    <ul className="dropdown dropdown-left mt-12 ms-12 menu w-52 rounded-box bg-base-100 shadow-sm"
                      popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }  as React.CSSProperties}>
                      <li><button><LiaEdit/> Editar</button> </li>
                      <li><button><ImPrinter/> Imprimir</button> </li>
                      <li><button className="text-red-500"> <TbXboxX /> Eliminar</button> </li> 
                    </ul>
                    
                  </td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-base-300">
                  <th>B00100002</th>
                  <td>22/11/2023</td>
                  <td>Maria lopez</td>
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
                      <li><button className="text-red-500"> <TbXboxX /> Eliminar</button> </li> 
                    </ul>
                  </td>
                </tr>

                {/* row 3 */}
                <tr className="hover:bg-base-300">
                  <th>B00100003</th>
                  <td>22/11/2023</td>
                  <td>Carlos Herrera</td>
                  <td>10,000RD$</td>
                  <td>0RD$</td>
                  <td><span className="bg-red-400 rounded-2xl text-center p-2">Cancelada</span></td>
                  <td className="flex justify-end">
                    <button className=""><MdAttachMoney  className="text-2xl" /></button>
                    <button className="" popoverTarget="popover-2" style={{ anchorName: "--anchor-2" }  as React.CSSProperties }>
                      <SlOptionsVertical className="" />
                    </button>
                    <ul className="dropdown dropdown-left mt-12 ms-12 menu w-52 rounded-box bg-base-100 shadow-sm"
                      popover="auto" id="popover-2" style={{ positionAnchor: "--anchor-2" }  as React.CSSProperties}>
                      <li><button><LiaEdit/> Editar</button> </li>
                      <li><button><ImPrinter/> Imprimir</button> </li>
                      <li><button className="text-red-500"> <TbXboxX /> Eliminar</button> </li> 
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
