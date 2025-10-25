import { FaBoxes, FaWarehouse, FaTags, FaExchangeAlt, FaClipboardList, FaTruckLoading } from "react-icons/fa";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { IoTicket } from "react-icons/io5";

export function RPInventory() {
  const inventoryItems = [
    {
      icon: <FaBoxes className="w-[90px] h-[90px] text-blue-500" />,
      title: "Productos y Servicios",
      description:
        "Gestione todos los productos y servicios disponibles en el sistema, incluyendo categorías, precios y estados.",
      action: "Ver Productos",
    },
    {
      icon: <FaWarehouse className="w-[90px] h-[90px] text-green-500" />,
      title: "Almacenes",
      description:
        "Administre los almacenes y puntos de almacenamiento de sus productos, con información actualizada en tiempo real.",
      action: "Ver Almacenes",
    },
    {
      icon: <FaTags className="w-[90px] h-[90px] text-yellow-500" />,
      title: "Listado de Precios",
      description:
        "Visualice y gestione listas de precios para productos y servicios según categoría o cliente.",
      action: "Ver Listado",
    },
    {
      icon: <FaTruckLoading className="w-[90px] h-[90px] text-orange-500" />,
      title: "Cargos | Descargos",
      description:
        "Controle los movimientos de entrada y salida de inventario, asegurando precisión en las existencias.",
      action: "Registrar Movimiento",
    },
    {
      icon: <FaExchangeAlt className="w-[90px] h-[90px] text-purple-500" />,
      title: "Traslados",
      description:
        "Gestione los traslados de productos entre almacenes, manteniendo trazabilidad y control total.",
      action: "Ver Traslados",
    },
    {
      icon: <FaClipboardList className="w-[90px] h-[90px] text-red-500" />,
      title: "Conteo de Inventario",
      description:
        "Realice conteos físicos y digitales de inventario para mantener la exactitud de las existencias.",
      action: "Iniciar Conteo",
    },
    {
      icon: <IoTicket className="w-[90px] h-[90px] text-red-500" />,
      title: "Etiqueta de Productos",
      description:
        "Gestione las etiquetas de productos para facilitar la identificación y el control de inventario.",
      action: "Iniciar Etiquetado",
    },
  ];

  return (
    <div>
      <PageMeta
        title="Gestión de Inventario | SmartInventory"
        description="Panel de gestión de inventario para controlar productos, almacenes y movimientos con eficiencia."
      />
      <PageBreadcrumb pageTitle="Módulo de Inventario" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {inventoryItems.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <figure className="pt-6">{item.icon}</figure>
              <div className="card-body text-center">
                <h2 className="card-title justify-center text-lg font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <div className="card-actions justify-center pt-4">
                  <button className="btn btn-primary btn-sm">{item.action}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
