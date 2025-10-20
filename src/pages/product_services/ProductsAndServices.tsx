import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";





export default function ProductsAndServices() {



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
              <button  className="rounded h-10 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                + Nuevo Producto o Servicio
              </button>

              {/*Modal add product or service */}
              <dialog>

              </dialog>
              

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
