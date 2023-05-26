import { IonButton, IonRouterLink } from "@ionic/react";
import { DashboardCardSlot } from "@stribord-examples/app-stribord-typings";
import React from "react";
import { Line, LineChart, Legend, ResponsiveContainer, XAxis } from "recharts";

import { leadsMtd, leadsYtd } from "../mock-data/leads";

/**
 * @stribordImplementation '@stribord-examples/app:dashboard-card'
 */
export const LeadsDashboardCard: DashboardCardSlot = ({
  wrapper: Wrapper,
  filterBy,
}) => {
  return (
    <Wrapper
      title={"New Leads " + filterBy}
      cardButtons={[
        <IonRouterLink routerLink={"leads"} key="leads">
          <IonButton fill="clear">View Details</IonButton>
        </IonRouterLink>,
      ]}
    >
      <LineChart
        width={300}
        height={360}
        data={filterBy === "YTD" ? leadsYtd : leadsMtd}
      >
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Legend />
        <XAxis dataKey="date" />
      </LineChart>
    </Wrapper>
  );
};
