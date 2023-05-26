import { IonRoute } from "@ionic/react";
import { RoutesFactory } from "@stribord-examples/app-stribord-typings";
import React from "react";

import { LeadsDetailsPage } from "../components/leads-details-page";

/**
 * @stribordImplementation '@stribord-examples/app:routes'
 */
export const LeadsRoutes: RoutesFactory = () => {
  return [
    <IonRoute key="leads" render={() => <LeadsDetailsPage />} path="/leads" />,
  ];
};
