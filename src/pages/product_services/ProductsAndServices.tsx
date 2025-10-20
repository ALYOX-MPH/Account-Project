import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

//Hooks
import { useState } from "react";
import { useModal } from "../../hooks/useModal";

// Utilities components
import { Modal } from "../../components/ui/modal";
// import Button from "../../components/Utilities/Button";





export default function ProductsAndServices() {

  // Estado del modal
    const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <PageMeta
        title="Products and Services | Accounting System"
        description="This is the Products and Services page for the Accounting System"
      />
      <PageBreadcrumb pageTitle="Productos y servicios" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

        {/* Big Card */}
        <div className="w-full">
          {/* header */}
          <div className="grid grid-cols-2 ">

            {/* left text */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl text-black dark:text-gray-400 mb-4">Productos y servicios</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                Administra tus productos y servicios desde esta sección.
              </p>
            </div>

            {/* right button */}
            <div className="flex justify-end">
              <button onClick={openModal} className="rounded h-10 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                + Nuevo Producto o Servicio
              </button>

              {/*Modal add product or service */}
              <Modal isOpen={isOpen}  onClose={closeModal} className="max-w-[700px] p-6 lg:p-10">
                {/* Contenido del modal */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-dark dark:text-white">Agregar Nuevo Producto o Servicio</h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="description">
                        Descripción
                      </label>
                      <textarea
                        id="description"
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </Modal>
              

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
