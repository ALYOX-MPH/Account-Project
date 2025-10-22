import { AiOutlineProduct } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { JSX } from "react";

interface ProductService {
  id: number;
  Name: {
    Icon: JSX.Element;
    name: string;
  };
  Amount: number;
  Price: number;
  Actions: {
    Delete: JSX.Element;
    Edit: JSX.Element;
  };
}

// Datos de ejemplo
const tableData: ProductService[] = [
  {
    id: 1,
    Name: {
      Icon: <AiOutlineProduct className="text-lg text-primary" />,
      name: "Café molido premium",
    },
    Amount: 25,
    Price: 450.5,
    Actions: {
      Delete: (
        <button className="text-red-500 hover:text-red-600 transition-colors">
          <FiTrash2 />
        </button>
      ),
      Edit: (
        <button className="text-blue-500 hover:text-blue-600 transition-colors">
          <FiEdit />
        </button>
      ),
    },
  },
  {
    id: 2,
    Name: {
      Icon: <AiOutlineProduct className="text-lg text-primary" />,
      name: "Botella de agua 500ml",
    },
    Amount: 80,
    Price: 25.0,
    Actions: {
      Delete: (
        <button className="text-red-500 hover:text-red-600 transition-colors">
          <FiTrash2 />
        </button>
      ),
      Edit: (
        <button className="text-blue-500 hover:text-blue-600 transition-colors">
          <FiEdit />
        </button>
      ),
    },
  },
  {
    id: 3,
    Name: {
      Icon: <AiOutlineProduct className="text-lg text-primary" />,
      name: "Servicio de mantenimiento mensual",
    },
    Amount: 1,
    Price: 2500.0,
    Actions: {
      Delete: (
        <button className="text-red-500 hover:text-red-600 transition-colors">
          <FiTrash2 />
        </button>
      ),
      Edit: (
        <button className="text-blue-500 hover:text-blue-600 transition-colors">
          <FiEdit />
        </button>
      ),
    },
  },
];

export function TableProductService() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05] bg-base-200 dark:bg-base-300">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-700 text-start text-theme-xs dark:text-gray-300"
              >
                Producto / Servicio
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-700 text-start text-theme-xs dark:text-gray-300"
              >
                Cantidad
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-700 text-start text-theme-xs dark:text-gray-300"
              >
                Precio
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-semibold text-gray-700 text-start text-theme-xs dark:text-gray-300"
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((product) => (
              <TableRow key={product.id}>
                {/* Producto */}
                <TableCell className="px-5 py-4 flex items-center gap-3 text-base-content">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-base-300 dark:bg-base-100">
                    {product.Name.Icon}
                  </div>
                  <span className="font-medium">{product.Name.name}</span>
                </TableCell>

                {/* Cantidad */}
                <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300 text-theme-sm">
                  {product.Amount}
                </TableCell>

                {/* Precio */}
                <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300 text-theme-sm">
                  RD$ {product.Price.toFixed(2)}
                </TableCell>

                {/* Acciones */}
                <TableCell className="px-4 py-3 flex gap-3">
                  {product.Actions.Edit}
                  {product.Actions.Delete}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
