import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Order {
  id: number;
  Type: string;
  Nombre: {
    image: string;
    name: string;
    role: string;
  };
  RNC: string;
  Numero: string;
  status: string;
  
}

// ...existing code...
const tableData: Order[] = [
  {
    id: 1,
    Type: "Cliente",
    Nombre: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    RNC: "615651651",
    Numero: "809-651-2211",
    status: "Active",
  },
  {
    id: 2,
    Type: "Proveedor",
    Nombre: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    RNC: "615651652",
    Numero: "809-651-2212",
    status: "Inactive",
  },  
  {
    id: 3,
    Type: "Cliente",
    Nombre: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    RNC: "615651653",
    Numero: "809-651-2213",
    status: "Active",
  },
  {
    id: 4,
    Type: "Cliente",
    Nombre: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    RNC: "615651654",
    Numero: "809-651-2214",
    status: "Active",
  },
  {
    id: 5,
    Type: "Cliente",
    Nombre: {
      image: "/images/user/user-27.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    RNC: "615651655",
    Numero: "809-651-2215",
    status: "Active",
  },
  {
    id: 6,
    Type: "Proveedor",
    Nombre: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    RNC: "615651654",
    Numero: "809-651-2214",
    status: "Active",
  },  
 
  {
    id: 8,
    Type: "Cliente",
    Nombre: {
      image: "/images/user/user-29.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    RNC: "615651656",
    Numero: "809-651-2216",
    status: "Active",
  },
  {
    id: 9,
    Type: "Proveedor",
    Nombre: {
      image: "/images/user/user-30.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    RNC: "615651657",
    Numero: "809-651-2217",
    status: "Active",
  },
  {
    id: 10,
    Type: "Cliente",
    Nombre: {
      image: "/images/user/user-31.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    RNC: "615651658",
    Numero: "809-651-2218",
    status: "Cancel",
  },
  {
    id: 11,
    Type: "Proveedor",
    Nombre: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    RNC: "615651659",
    Numero: "809-651-2219",
    status: "Active",
  },
];

export default function BasicTableOne() {
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
                Tipo
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Nombre
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                RNC
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Número
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Estado
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                {/* Tipo (agregado) */}
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <span className="text-theme-sm text-gray-700 dark:text-white/90">{order.Type}</span>
                </TableCell>

                {/* Nombre */}
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.Nombre.image}
                        alt={order.Nombre.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.Nombre.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.Nombre.role}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* RNC */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.RNC}
                </TableCell>

                {/* Número */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.Numero}
                </TableCell>

                {/* Estado */}
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}