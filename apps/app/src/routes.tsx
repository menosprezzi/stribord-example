import { IonRoute } from "@ionic/react";
import React from "react";

import { DashboardPage } from "./components/dashboard-page";

export const AppRoutes = React.memo(() => {
  return (
    <>
      <IonRoute render={() => <DashboardPage />} path="/" exact />
    </>
  );
});
