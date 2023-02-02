import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonPopover,
  IonToolbar,
} from "@ionic/react";
import { personOutline, settingsOutline, logOutOutline } from "ionicons/icons";
import React from "react";

export const AppLayout = ({ children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <h3 className="ion-margin">Stribord Example</h3>
          <IonButtons slot="end" className="ion-margin-end">
            <IonAvatar style={{ width: 36, height: 36 }} id="avatarBtn">
              <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <IonPopover
              trigger="avatarBtn"
              side="bottom"
              alignment="end"
              arrow={false}
              showBackdrop={false}
            >
              <IonContent class="ion-padding">
                <IonList lines="none">
                  <IonItem button={true} detail={false}>
                    Profile
                    <IonIcon icon={personOutline} slot="start" />
                  </IonItem>
                  <IonItem button={true} detail={false}>
                    Settings
                    <IonIcon icon={settingsOutline} slot="start" />
                  </IonItem>
                  <IonItem button={true} detail={false}>
                    Log out
                    <IonIcon icon={logOutOutline} slot="start" />
                  </IonItem>
                </IonList>
              </IonContent>
            </IonPopover>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {children}
    </IonPage>
  );
};
