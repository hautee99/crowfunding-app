import CampaignPage from "pages/CampaignPage";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SingUpPage = lazy(() => import("./pages/SignUpPage"));
const SingInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route path="/sign-up" element={<SingUpPage></SingUpPage>}></Route>
        <Route path="/sign-in" element={<SingInPage></SingInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
