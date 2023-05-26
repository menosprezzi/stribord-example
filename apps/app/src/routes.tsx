import { IonRoute } from "@ionic/react";
import { useFactory } from "@stribord/react-client";
import React, { useMemo } from "react";

import { DashboardPage } from "./components/dashboard-page";
import { RoutesFactory } from "./extension-points/routes-extension";

export const AppRoutes = React.memo(() => {
  const externalRoutesFn = useFactory<RoutesFactory>("routes", true);
  const externalRoutes = useMemo(
    () => externalRoutesFn().reduce((acc, route) => acc.concat(route), []),
    [externalRoutesFn]
  );

  return (
    <>
      <IonRoute render={() => <DashboardPage />} path="/" exact />
      {externalRoutes}
    </>
  );
});
