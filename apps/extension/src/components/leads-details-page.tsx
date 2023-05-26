import { IonContent, IonButton, IonRouterLink } from "@ionic/react";
import React from "react";

export const LeadsDetailsPage = () => {
  return (
    <IonContent className="ion-padding">
      <h1 style={{ fontWeight: "bold" }}>Leads</h1>
      <p>This is a new Page!</p>
      <IonRouterLink routerLink={""}>
        <IonButton fill="clear">Back to Home</IonButton>
      </IonRouterLink>
    </IonContent>
  );
};
