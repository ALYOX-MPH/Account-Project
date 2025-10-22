import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import { JSX, useState } from "react";
import { FaArrowTrendUp, FaAngleDown, FaAngleUp, FaEye, FaArrowTrendDown, FaBuilding, FaMoneyBillWave, FaUserShield, FaMoneyBillTransfer, FaChartLine, FaIndustry, FaCalendarCheck, FaFileInvoiceDollar } from "react-icons/fa6";



interface Order {
  id: number;
  nameCatalogo: {
    icon: JSX.Element;
    name: string;
    role: string;
  };
  subCatalogo: string;
  total: string;
  status: string;
  button: JSX.Element;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    nameCatalogo: {
      icon: <FaArrowTrendUp  style={{ color: "#4CAF50" }}/>,
      name: "Activo",
      role: "Contabilidad",
    },
    subCatalogo: "2",
    total: "DOP$: 150,000.00",
    status: "Active",
    button: <FaAngleDown />,
  },
  {
    id: 2,
    nameCatalogo: {
      icon: <FaBuilding  style={{ color: "#4CAF50" }} />,
      name: "Activo Fijo",
      role: "Contabilidad",
    },
    subCatalogo: "2",
    total: "DOP$: 200,000.00",
    status: "Pending",
    button: <FaAngleDown />,
  },
  {
    id: 3,
    nameCatalogo: {
      icon: <FaMoneyBillWave  style={{ color: "#4CAF50" }} />,
      name: "Activo a Corto Plazo",
      role: "Contabilidad",
    },
    subCatalogo: "2",
    total: "DOP$: 250,000.00",
    status: "Active",
    button: <FaAngleDown />,
  },
  {
    id: 5,
    nameCatalogo: {
      icon: <FaUserShield  style={{ color: "#6A1B9A" }} />,
      name: "Pasivo",
      role: "Contabilidad",
    },
    subCatalogo: "2",
    total: "DOP$: 12.7K",
    status: "Active",
    button: <FaAngleDown />,
  },
  {
    id: 6,
    nameCatalogo: {
      icon: <FaMoneyBillTransfer style={{ color: "#FB8C00" }} />,
      name: "Patrimonio",
      role: "Contabilidad",
    },
    subCatalogo: "2",
    total: "DOP$: 300,000.00",
    status: "Active",
    button: <FaAngleDown  style={{ color: "#6A1B9A" }}/>,
  },
  {
    id: 7,
    nameCatalogo: {
      icon: <FaIndustry  style={{ color: "red" }}/>,
      name: "Gastos",
      role: "Contabilidad",
    },
    subCatalogo: "2",
    total: "DOP$: 2.8K",
    status: "Cancel",
    button: <FaAngleDown  style={{ color: "#6A1B9A" }}/>,
  },
  {
    id: 8,
    nameCatalogo: {
      icon: <FaArrowTrendUp  style={{ color: "#4CAF50" }}/>,
      name: "Ingresos",
      role: "Contabilidad / Ventas",
    },
    subCatalogo: "2",
    total: "DOP$: 300,000.00",
    status: "Active",
    button: <FaAngleDown />,
  },
  {
    id: 9,
    nameCatalogo: {
      icon: <FaArrowTrendDown style={{ color: "red" }} />,
      name: "Costos",
      role: "Contabilidad / Ventas",
    },
    subCatalogo: "2",
    total: "DOP$: 300,000.00",
    status: "Active",
    button: <FaAngleDown  style={{ color: "#6A1B9A" }}/>,
  },
];

interface SubCatalogo {
  id: number;
  parentId: number;
  nameSubCatalogo: {
    icon: JSX.Element;
    name: string;
    role: string;
  };
  total: string;
  look?: JSX.Element;
}



const subCatalogoData: SubCatalogo[] = [
  // ======== ACTIVOS ========
  {
    id: 1,
    parentId: 1,
    nameSubCatalogo: {
      icon: <FaArrowTrendUp />,
      name: "Caja General",
      role: "Activo",
    },
    total: "DOP$: 50,000.00",
    look: <FaEye />,
  },
  {
    id: 2,
    parentId: 1,
    nameSubCatalogo: {
      icon: <FaArrowTrendUp />,
      name: "Banco Popular",
      role: "Activo",
    },
    total: "DOP$: 100,000.00",
    look: <FaEye />,
  },
  {
    id: 3,
    parentId: 2,
    nameSubCatalogo: {
      icon: <FaBuilding />,
      name: "Cuentas por Pagar",
      role: "Pasivo",
    },
    total: "DOP$: 80,000.00",
    look: <FaEye />,
  },
  {
    id: 4,
    parentId: 2,
    nameSubCatalogo: {
      icon: <FaMoneyBillWave />,
      name: "Cuentas por Cobrar",
      role: "Activo",
    },
    total: "DOP$: 70,000.00",
    look: <FaEye />,
  },
  {
    id: 5,
    parentId: 1,
    nameSubCatalogo: {
      icon: <FaMoneyBillWave />,
      name: "Efectivo y Equivalentes",
      role: "Activo",
    },
    total: "DOP$: 70,000.00",
    look: <FaEye />,
  },
  {
    id: 6,
    parentId: 3,
    nameSubCatalogo: {
      icon: <FaArrowTrendUp />,
      name: "Maquinaria",
      role: "Activo Fijo",
    },
    total: "DOP$: 200,000.00",
    look: <FaEye />,
  },
  {
    id: 7,
    parentId: 3,
    nameSubCatalogo: {
      icon: <FaFileInvoiceDollar />,
      name: "Deudores comerciales y otras cuentas por cobrar",
      role: "Activo a Corto Plazo",
    },
    total: "DOP$: 150,000.00",
    look: <FaEye />,
  },
  {
    id: 8,
    parentId: 3,
    nameSubCatalogo: {
      icon: <FaChartLine />,
      name: "Inversiones financieras a corto plazo",
      role: "Activo a Corto Plazo",
    },
    total: "DOP$: 100,000.00",
    look: <FaEye />,
  },
  {
    id: 9,
    parentId: 3,
    nameSubCatalogo: {
      icon: <FaCalendarCheck />,
      name: "Gastos pagados por anticipado",
      role: "Activo a Corto Plazo",
    },
    total: "DOP$: 50,000.00",
    look: <FaEye />,
  },

  // ======== PASIVO ========
  {
    id: 10,
    parentId: 5,
    nameSubCatalogo: {
      icon: <FaArrowTrendDown />,
      name: "Proveedores Nacionales",
      role: "Pasivo Corriente",
    },
    total: "DOP$: 45,000.00",
    look: <FaEye />,
  },
  {
    id: 11,
    parentId: 5,
    nameSubCatalogo: {
      icon: <FaArrowTrendDown />,
      name: "Obligaciones Bancarias",
      role: "Pasivo No Corriente",
    },
    total: "DOP$: 70,000.00",
    look: <FaEye />,
  },
  {
    id: 12,
    parentId: 5,
    nameSubCatalogo: {
      icon: <FaArrowTrendDown />,
      name: "Impuestos por Pagar",
      role: "Pasivo Corriente",
    },
    total: "DOP$: 15,000.00",
    look: <FaEye />,
  },
  {
    id: 13,
    parentId: 5,
    nameSubCatalogo: {
      icon: <FaArrowTrendDown />,
      name: "Retenciones por Pagar",
      role: "Pasivo Corriente",
    },
    total: "DOP$: 8,000.00",
    look: <FaEye />,
  },

  // ======== PATRIMONIO ========
  {
    id: 14,
    parentId: 6,
    nameSubCatalogo: {
      icon: <FaUserShield />,
      name: "Capital Social",
      role: "Patrimonio",
    },
    total: "DOP$: 250,000.00",
    look: <FaEye />,
  },
  {
    id: 15,
    parentId: 6,
    nameSubCatalogo: {
      icon: <FaUserShield />,
      name: "Resultados Acumulados",
      role: "Patrimonio",
    },
    total: "DOP$: 30,000.00",
    look: <FaEye />,
  },
  {
    id: 16,
    parentId: 6,
    nameSubCatalogo: {
      icon: <FaUserShield />,
      name: "Utilidad del Ejercicio",
      role: "Patrimonio",
    },
    total: "DOP$: 20,000.00",
    look: <FaEye />,
  },

  // ======== GASTOS ========
  {
    id: 17,
    parentId: 7,
    nameSubCatalogo: {
      icon: <FaIndustry />,
      name: "Gastos Administrativos",
      role: "Gastos",
    },
    total: "DOP$: 1,200.00",
    look: <FaEye />,
  },
  {
    id: 18,
    parentId: 7,
    nameSubCatalogo: {
      icon: <FaIndustry />,
      name: "Gastos de Ventas",
      role: "Gastos",
    },
    total: "DOP$: 900.00",
    look: <FaEye />,
  },
  {
    id: 19,
    parentId: 7,
    nameSubCatalogo: {
      icon: <FaIndustry />,
      name: "Gastos Financieros",
      role: "Gastos",
    },
    total: "DOP$: 700.00",
    look: <FaEye />,
  },

  // ======== INGRESOS ========
  {
    id: 20,
    parentId: 8,
    nameSubCatalogo: {
      icon: <FaArrowTrendUp />,
      name: "Ventas de Mercancías",
      role: "Ingresos",
    },
    total: "DOP$: 220,000.00",
    look: <FaEye />,
  },
  {
    id: 21,
    parentId: 8,
    nameSubCatalogo: {
      icon: <FaArrowTrendUp />,
      name: "Servicios Prestados",
      role: "Ingresos",
    },
    total: "DOP$: 60,000.00",
    look: <FaEye />,
  },
  {
    id: 22,
    parentId: 8,
    nameSubCatalogo: {
      icon: <FaArrowTrendUp />,
      name: "Ingresos Financieros",
      role: "Ingresos",
    },
    total: "DOP$: 20,000.00",
    look: <FaEye />,
  },

  // ======== COSTOS ========
  {
    id: 23,
    parentId: 9,
    nameSubCatalogo: {
      icon: <FaChartLine />,
      name: "Costo de Ventas",
      role: "Costos",
    },
    total: "DOP$: 150,000.00",
    look: <FaEye />,
  },
  {
    id: 24,
    parentId: 9,
    nameSubCatalogo: {
      icon: <FaChartLine />,
      name: "Costo de Producción",
      role: "Costos",
    },
    total: "DOP$: 100,000.00",
    look: <FaEye />,
  },
  {
    id: 25,
    parentId: 9,
    nameSubCatalogo: {
      icon: <FaChartLine />,
      name: "Costo de Servicios",
      role: "Costos",
    },
    total: "DOP$: 50,000.00",
    look: <FaEye />,
  },
];

export default function CatalogoTable() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Nombres
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                SubCatalogos
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Total
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Estatus
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Accciones
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <>
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/[0.03]">
                        {order.nameCatalogo.icon}
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.nameCatalogo.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.nameCatalogo.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.subCatalogo}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.total}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <button
                      onClick={() => toggleExpand(order.id)}
                      className="text-gray-600 hover:text-blue-500"
                    >
                      {expandedId === order.id ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    
                    <button className="ml-5 p-5 text-green-600 hover:text-green-500">
                      <FaEye/>
                    </button>
                  </TableCell>
                </TableRow>

                {/* Subcatalogos */}
                {expandedId === order.id &&
                  subCatalogoData
                    .filter((sub) => sub.parentId === order.id)
                    .map((sub) => (
                      <TableRow key={sub.id} className="bg-gray-50 dark:bg-white/[0.02]">
                        <TableCell className="px-10 py-3 text-start">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/[0.05]">
                              {sub.nameSubCatalogo.icon}
                            </div>
                            <div>
                              <span className="font-medium text-gray-700 dark:text-white/80">
                                {sub.nameSubCatalogo.name}
                              </span>
                              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                {sub.nameSubCatalogo.role}
                              </span>

                            </div>
                          </div>
                        </TableCell>
                        <TableCell colSpan={2} className="text-gray-500 text-start">
                          {sub.total}
                        </TableCell>
                        <TableCell colSpan={2}> <Badge color={sub.look === "" ? "warning" : "success"}>{sub.look}</Badge> </TableCell>
                      </TableRow>
                    ))}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
