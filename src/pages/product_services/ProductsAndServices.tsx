import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

//Hooks
import { useState } from "react";
import { useModal } from "../../hooks/useModal";

// Utilities components
import { Modal } from "../../components/ui/modal";
// import Button from "../../components/Utilities/Button";

// Main component
import {ModalForm } from "./components/ModalForm";





export default function ProductsAndServices() {

  // Estado del modal
  

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
              <button className="btn btn-primary" onClick={()=>document.getElementById('ModalAddContact').showModal()}>+ Nuevo Producto o Servicio</button>

              <dialog id="ModalAddContact" className="modal">
                <div className="modal-box max-w-2xl ">
                  <ModalForm />
                </div>
              </dialog>
              

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
