import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";


 {/* Pages */}

import Contacts from "./pages/Contacts/FormContacts";
import ProductsAndServices from "./pages/product_services/ProductsAndServices";
import ChartofAccounts from "./pages/ChartofAccounts/ChartofAccounts";
import Invoice from "./pages/Invoices/Invoice";
import { CreateInvoice } from "./pages/Invoices/CreateInvoice";
import Banks from "./pages/Banks/Bancks";
import Registros from "./pages/RegistrosCK/ND/NCR/Registros";
import Purchases from "./pages/Purchases/Purchases";
import { CreatePurchases } from "./pages/Purchases/CreatePurchases";
import { RPHumanResources } from "./pages/Reports/Rp-HumanResources";
import { RPAccounting } from "./pages/Reports/Rp-Accounting";
import { RPContacts } from "./pages/Reports/RP-Contacts";
import { RPInventory } from "./pages/Reports/RP-Inventory";
import { RPInvoices } from "./pages/Reports/Rp-Invoices";
import { RPAnalisisFinances } from "./pages/Reports/Rp-AnalisisFinances";
import { RPPurchases } from "./pages/Reports/Rp-Purchases";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Accounting System */}
            <Route path="/productsAndServices" element={<ProductsAndServices />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/ChartofAccounts" element={<ChartofAccounts />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Invoice/create" element={<CreateInvoice />} />
            <Route path="/Banks" element={<Banks />} />
            <Route path="/RegistrosCKNDNCR" element={<Registros />} />
            <Route path="/Purchases" element={<Purchases />} />
            <Route path="/Purchases/create" element={<CreatePurchases />} />
            {/* Reportes */}
            <Route path="/RP-Contacts" element={<RPContacts />} />
            <Route path="/RP-Accounting" element={<RPAccounting />} />
            <Route path="/RP-Invoices" element={<RPInvoices />} />
            <Route path="/RP-Inventory" element={<RPInventory />} />
            <Route path="/RP-HumanResources" element={<RPHumanResources />} />
            <Route path="/RP-Purchases" element={<RPPurchases />} />
            <Route path="/RP-AnalisisFinances" element={<RPAnalisisFinances />} />
            


            

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
