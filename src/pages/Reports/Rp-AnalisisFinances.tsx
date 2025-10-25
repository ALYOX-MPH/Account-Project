
import { FaRobot, FaChartLine, FaCoins, FaBalanceScale, FaBullseye, FaRegChartBar } from "react-icons/fa";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export function RPAnalisisFinances() {
  const reports = [
    {
      icon: <FaChartLine className="w-[90px] h-[90px] text-blue-500" />,
      title: "Predicción de Flujo de Caja (IA)",
      description:
        "Modelo predictivo basado en aprendizaje automático que anticipa tu flujo de caja neto durante los próximos 90 días con un 94% de precisión.",
      action: "Ver Proyección",
    },
    {
      icon: <FaBalanceScale className="w-[90px] h-[90px] text-green-500" />,
      title: "Índice de Salud Financiera",
      description:
        "Análisis global que mide liquidez, solvencia y rentabilidad para ofrecer una calificación inteligente de la estabilidad de la empresa.",
      action: "Ver Informe",
    },
    {
      icon: <FaCoins className="w-[90px] h-[90px] text-yellow-500" />,
      title: "Análisis de Rentabilidad por Producto",
      description:
        "IA que identifica los productos o servicios más rentables según comportamiento histórico, márgenes y estacionalidad.",
      action: "Analizar Rentabilidad",
    },
    {
      icon: <FaBullseye className="w-[90px] h-[90px] text-red-500" />,
      title: "Detección de Riesgo Financiero",
      description:
        "Algoritmo de machine learning que evalúa los patrones de gasto, ingresos e inversiones para anticipar posibles crisis financieras.",
      action: "Evaluar Riesgo",
    },
    {
      icon: <FaRegChartBar className="w-[90px] h-[90px] text-purple-500" />,
      title: "Proyección de Ingresos y Gastos",
      description:
        "Simulación automatizada de escenarios futuros basados en tendencias del mercado, inflación y comportamiento interno.",
      action: "Generar Escenario",
    },
    {
      icon: <FaRobot className="w-[90px] h-[90px] text-pink-500" />,
      title: "Movimiento Predictorio",
      description:
        "Reporte De analisis predictivo que sugiere acciones financieras óptimas para maximizar beneficios y minimizar riesgos.",
      action: "Activar Reporte",
    },
  ];

  return (
    <div>
      <PageMeta
        title="Análisis Financiero Predictivo | SmartReports IA"
        description="Panel de análisis financiero con reportes inteligentes, IA predictiva y simulación avanzada."
      />
      <PageBreadcrumb pageTitle="Análisis Financiero Predictivo" />

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
