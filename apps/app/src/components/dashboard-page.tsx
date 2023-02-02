import { IonButton, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import React, { useState } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis } from "recharts";

import { salesMtd, salesYtd } from "../mock-data/sales";
import { FilterBy } from "../types/filters";

import { DashboardCard } from "./dashboard-card";

export const DashboardPage = () => {
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.YTD);

  return (
    <IonContent className="ion-padding">
      <h1 style={{ fontWeight: "bold" }}>Dashboard</h1>
      <IonGrid className="ion-no-padding ion-margin-top">
        <IonRow style={{ gap: 16 }}>
          <h5>Filter by:</h5>
          <IonButton
            shape="round"
            fill={filterBy === FilterBy.YTD ? "solid" : "outline"}
            onClick={() => setFilterBy(FilterBy.YTD)}
          >
            YTD
          </IonButton>
          <IonButton
            shape="round"
            fill={filterBy === FilterBy.MTD ? "solid" : "outline"}
            onClick={() => setFilterBy(FilterBy.MTD)}
          >
            MTD
          </IonButton>
        </IonRow>
      </IonGrid>
      <IonGrid className="ion-no-padding ion-margin-top">
        <IonRow style={{ gap: 16 }}>
          <IonCol size="12" sizeMd="4">
            <DashboardCard title={"Sales in " + filterBy}>
              <ResponsiveContainer width="100%" height="100%" aspect={0}>
                <BarChart
                  data={filterBy === FilterBy.YTD ? salesYtd : salesMtd}
                >
                  <Bar dataKey="value" fill="#8884d8" />
                  <XAxis dataKey="date" />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </DashboardCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
