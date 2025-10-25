
import {
  FaFileInvoiceDollar,
  FaBan,
  FaUndo,
  FaClipboardList,
  FaTruckLoading,
  FaWarehouse,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export function RPPurchases() {
  const reports = [
    {
      icon: (
        <FaFileInvoiceDollar className="w-[90px] h-[90px] text-blue-500" />
      ),
      title: "Reporte 606 – Compras de Bienes y Servicios",
      description:
        "Informe que genera el formato 606 con todas las compras registradas, incluyendo NCF, RNC, ITBIS y monto total, según las normativas de la DGII.",
      action: "Generar Reporte 606",
    },
    {
      icon: <FaBan className="w-[90px] h-[90px] text-red-500" />,
      title: "Reporte 608 – Comprobantes Anulados",
      description:
        "Listado detallado de los comprobantes fiscales anulados, indicando número, proveedor y motivo de anulación.",
      action: "Ver Reporte 608",
    },
    {
      icon: <FaUndo className="w-[90px] h-[90px] text-orange-500" />,
      title: "Devoluciones de Compras",
      description:
        "Informe de todas las devoluciones de compras realizadas, con detalle de productos, proveedor, motivo y valor total.",
      action: "Analizar Devoluciones",
    },
    {
      icon: <FaClipboardList className="w-[90px] h-[90px] text-purple-500" />,
      title: "Órdenes de Compra Pendientes / Ejecutadas",
      description:
        "Reporte que muestra el estado actual de todas las órdenes de compra, fechas, proveedores y montos.",
      action: "Ver Órdenes",
    },
    {
      icon: <FaTruckLoading className="w-[90px] h-[90px] text-yellow-500" />,
      title: "Notas de Entrega / Recepción",
      description:
        "Informe que detalla las notas de entrega y recepción de compras, vinculadas a almacenes y fechas de entrega.",
      action: "Revisar Notas",
    },
    {
      icon: <FaWarehouse className="w-[90px] h-[90px] text-green-500" />,
      title: "Costos por Almacén y Movimientos",
      description:
        "Reporte que muestra las compras y entradas de productos por almacén, con valores unitarios y totales.",
      action: "Ver Costos",
    },
    {
      icon: <FaMoneyCheckAlt className="w-[90px] h-[90px] text-teal-500" />,
      title: "Cuentas por Pagar a Proveedores",
      description:
        "Informe que muestra las cuentas pendientes de pago, fechas de vencimiento y saldo actual por proveedor.",
      action: "Revisar Cuentas",
    },
  ];

  return (
    <div>
      <PageMeta
        title="Reportes de Compras | SmartReports"
        description="Reportes del módulo de compras conforme a los formatos oficiales de la DGII, incluyendo el 606 y 608."
      />
      <PageBreadcrumb pageTitle="Reportes de Compras" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <figure className="pt-6">{report.icon}</figure>
              <div className="card-body text-center">
                <h2 className="card-title justify-center text-lg font-bold text-gray-800 dark:text-white">
                  {report.title}
                </h2>
                <p className="text-gray-400 text-sm">{report.description}</p>
                <div className="card-actions justify-center pt-4">
                  <button className="btn btn-primary btn-sm">
                    {report.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
