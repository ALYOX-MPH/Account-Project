// src/pages/contabilidad/Registros.jsx
import { useState } from "react";
import { FaPlus, FaFileExport, FaFilter, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import PageMeta from "../../../../components/common/PageMeta";

const registrosMock = [
  { id: 1, tipo: "CK", fecha: "2025-10-22", cliente: "Cliente A", monto: 1000, estado: "Pendiente" },
  { id: 2, tipo: "ND", fecha: "2025-10-20", cliente: "Cliente B", monto: 500, estado: "Completado" },
  { id: 3, tipo: "NCR", fecha: "2025-10-18", cliente: "Cliente C", monto: 750, estado: "Pendiente" },
];

export default function Registros() {
  const [registros, setRegistros] = useState(registrosMock);
  const [showModal, setShowModal] = useState(false);
  const [nuevoRegistro, setNuevoRegistro] = useState({ tipo: "CK", fecha: "", cliente: "", monto: "", estado: "Pendiente" });

  const handleChange = (e) => {
    setNuevoRegistro({ ...nuevoRegistro, [e.target.name]: e.target.value });
  };

  const handleAddRegistro = () => {
    setRegistros([...registros, { id: registros.length + 1, ...nuevoRegistro }]);
    setNuevoRegistro({ tipo: "CK", fecha: "", cliente: "", monto: "", estado: "Pendiente" });
    setShowModal(false);
  };

  return (
    <div>
         <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Registros Contables" />
    <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Registros Contables</h1>
        <p className="text-gray-500">Contabilidad / Registros</p>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          <FaPlus /> Nuevo Registro
        </button>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
          <FaFileExport /> Exportar
        </button>
        <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition">
          <FaFilter /> Filtros
        </button>
      </div>

      {/* Tabla de registros */}
      <div className="overflow-x-auto border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <table className="min-w-full divide-y border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <thead className="border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <tr>
              {["ID", "Tipo", "Fecha", "Cliente", "Monto", "Estado", "Acciones"].map((head) => (
                <th key={head} className="px-4 py-2 text-left text-gray-500 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-900">
            {registros.map((reg) => (
              <tr key={reg.id} className="">
                <td className="px-4 py-2 text-gray-500">{reg.id}</td>
                <td className="px-4 py-2 text-gray-500">{reg.tipo}</td>
                <td className="px-4 py-2 text-gray-500">{reg.fecha}</td>
                <td className="px-4 py-2 text-gray-500">{reg.cliente}</td>
                <td className="px-4 py-2 text-gray-500">${reg.monto}</td>
                <td className={`px-4 py-2 font-semibold ${reg.estado === "Completado" ? "text-green-600" : "text-yellow-600"}`}>{reg.estado}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800"><FaEye /></button>
                  <button className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                  <button className="text-red-600 hover:text-red-800"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      {/* Modal Nuevo Registro */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-dark p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Nuevo Registro</h2>
            <div className="flex flex-col gap-3">
              <select name="tipo" value={nuevoRegistro.tipo} onChange={handleChange} className="border px-3 py-2 rounded">
                <option value="CK">CK</option>
                <option value="ND">ND</option>
                <option value="NCR">NCR</option>
              </select>
              <input type="date" name="fecha" value={nuevoRegistro.fecha} onChange={handleChange} className="border px-3 py-2 rounded" />
              <input type="text" name="cliente" placeholder="Cliente / Proveedor" value={nuevoRegistro.cliente} onChange={handleChange} className="border px-3 py-2 rounded" />
              <input type="number" name="monto" placeholder="Monto" value={nuevoRegistro.monto} onChange={handleChange} className="border px-3 py-2 rounded" />
              <select name="estado" value={nuevoRegistro.estado} onChange={handleChange} className="border px-3 py-2 rounded">
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition">Cancelar</button>
              <button onClick={handleAddRegistro} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
