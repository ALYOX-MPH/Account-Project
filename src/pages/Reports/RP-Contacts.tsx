import { 
  FaChartLine, 
  FaBalanceScale, 
  FaCoins, 
  FaBullseye, 
  FaRegChartBar, 
  FaFileInvoice, 
  FaUserSlash, 
  FaTruckLoading, 
  FaCreditCard, 
  FaUsersCog, 
  FaMoneyBillWave, 
  FaMoneyCheckAlt 
} from "react-icons/fa";

import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export function RPContacts() {
  const reports = [
    {
      icon: <FaChartLine className="w-[90px] h-[90px] text-blue-500" />,
      title: "Estado de Cuentas de Clientes y Proveedores",
      description:
        "Informe detallado que muestra saldos, movimientos y antigüedad de cuentas por cobrar y pagar para una gestión eficiente.",
      action: "Ver Proyección",
    },
    {
      icon: <FaFileInvoice className="w-[90px] h-[90px] text-green-600" />,
      title: "Facturas y Compras",
      description:
        "Informe que detalla las facturas emitidas y recibidas, así como su estado de pago.",
      action: "Ver Informe",
    },
    {
      icon: <FaCoins className="w-[90px] h-[90px] text-yellow-500" />,
      title: "Devoluciones",
      description:
        "Informe que detalla las devoluciones de productos y servicios, incluyendo motivos y estados.",
      action: "Analizar Devoluciones",
    },
    {
      icon: <FaBalanceScale className="w-[90px] h-[90px] text-emerald-500" />,
      title: "Nota de Crédito y Nota de Débito",
      description:
        "Informe que detalla las notas de crédito y débito emitidas, incluyendo motivos y estados.",
      action: "Evaluar Notas",
    },
    {
      icon: <FaRegChartBar className="w-[90px] h-[90px] text-purple-500" />,
      title: "Órdenes de Venta y Compra",
      description:
        "Informe que detalla las órdenes de venta y compra, incluyendo estados y fechas.",
      action: "Generar Escenario",
    },
    {
      icon: <FaBullseye className="w-[90px] h-[90px] text-red-500" />,
      title: "Cotizaciones",
      description:
        "Informe que detalla las cotizaciones emitidas y recibidas, incluyendo estados y fechas.",
      action: "Activar Reporte",
    },
    {
      icon: <FaUserSlash className="w-[90px] h-[90px] text-gray-500" />,
      title: "Contactos Inactivos",
      description:
        "Informe que identifica clientes y proveedores inactivos para optimizar la gestión de relaciones.",
      action: "Activar Reporte",
    },
    {
      icon: <FaTruckLoading className="w-[90px] h-[90px] text-orange-500" />,
      title: "Nota de Entrega",
      description:
        "Informe que muestra el estado de entregas realizadas, fechas, cantidades y observaciones.",
      action: "Activar Reporte",
    },
    {
      icon: <FaCreditCard className="w-[90px] h-[90px] text-sky-500" />,
      title: "Análisis de Créditos y Cobros",
      description:
        "Informe que analiza la efectividad de las políticas de crédito y cobro para mejorar el flujo de caja.",
      action: "Activar Reporte",
    },
    {
      icon: <FaUsersCog className="w-[90px] h-[90px] text-pink-500" />,
      title: "Segmentación de Clientes y Proveedores",
      description:
        "Informe que clasifica a los clientes y proveedores según su comportamiento y características para una gestión más efectiva.",
      action: "Activar Reporte",
    },
    {
      icon: <FaMoneyBillWave className="w-[90px] h-[90px] text-lime-600" />,
      title: "Cuentas por Cobrar",
      description:
        "Informe que muestra las cuentas pendientes por cobrar con detalles de montos y plazos.",
      action: "Activar Reporte",
    },
    {
      icon: <FaMoneyCheckAlt className="w-[90px] h-[90px] text-indigo-600" />,
      title: "Cuentas por Pagar",
      description:
        "Informe que muestra las cuentas pendientes por pagar, sus fechas límite y estado actual.",
      action: "Activar Reporte",
    },
  ];

  return (
    <div>
      <PageMeta
        title="Reportes de Clientes / Proveedores | SmartReports"
        description="Panel de análisis financiero y de relaciones comerciales para clientes y proveedores."
      />
      <PageBreadcrumb pageTitle="Reportes de Clientes / Proveedores" />

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
                  <button className="btn btn-primary btn-sm">{report.action}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
