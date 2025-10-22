// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";


export default function Invoice() {
  return (
    <div>
      <PageMeta
        title="Invoices | Accounting System"
        description="This is the Invoices page for the Accounting System"
      />

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Factura de venta
          </h1>

          <div className="flex space-x-3">
            <button className="btn btn-outline">Default</button>
            <button className="btn btn-primary">+ Nueva factura de venta</button>
          </div>

          
        </div>
      
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">

        {/* Big Card */}
        <div className="mx-auto w-full max-w-[630px] text-center">

          
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Card Title Here
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Start putting content on grids or panels, you can also use different
            combinations of grids.Please check out the dashboard and other pages
          </p>
        </div>
      </div>
    </div>
  );
}
