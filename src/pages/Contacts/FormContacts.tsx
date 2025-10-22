import { IoMdAdd } from "react-icons/io";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import BasicTableOne from "../../components/tables/BasicTables/ContactsTable";


//Hooks
//Hooks

import { useModal } from "../../hooks/useModal";

// Utilities components
import { Modal } from "../../components/ui/modal";
import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import DropzoneComponent from "../../components/form/form-elements/DropZone";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import InputGroup from "../../components/form/form-elements/InputGroup";
import InputStates from "../../components/form/form-elements/InputStates";
import RadioButtons from "../../components/form/form-elements/RadioButtons";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch";
// import Button from "../../components/Utilities/Button";


export default function Blank() {
  // Estado del modal
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <PageBreadcrumb pageTitle="Contactos" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="w-full space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Contactos</h2>
              <p className="text-sm text-gray-500">
                Gestiona la información de los clientes que podrás asociar en tus documentos de venta.
              </p>
            </div>
            <button onClick={openModal} className="rounded-2xl border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <IoMdAdd className="text-lg" />
              Nuevo Contacto
            </button>
          </div>

          {/* Table */}
          

          <ComponentCard title="Contactos registrados">
          <BasicTableOne />
        </ComponentCard>

      <Modal isOpen={isOpen}  onClose={closeModal} className="max-w-[100vw] max-h-[100vh] p-6 lg:p-10">
                      {/* Contenido del modal */}
                      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <DefaultInputs />
        <SelectInputs />
        <TextAreaInput />
        <InputStates />
      </div>
      <div className="space-y-6">
        <InputGroup />
        <FileInputExample />
        <CheckboxComponents />
        <RadioButtons />
        <ToggleSwitch />
        <DropzoneComponent />
      </div>
    </div>
                    </Modal>

        </div>
      </div>
    </div>
  );
}
