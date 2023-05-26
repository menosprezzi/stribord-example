import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonRow,
  useIonPopover,
} from "@ionic/react";
import { ellipsisHorizontalOutline } from "ionicons/icons";
import React, { ReactNode } from "react";

export interface DashboardCardProps {
  title: string;

  cardButtons?: ReactNode;
}

const PopoverContent = () => {
  return (
    <IonContent class="ion-padding">
      <IonList lines="none">
        <IonItem button={true} detail={false}>
          Export as PDF
        </IonItem>
        <IonItem button={true} detail={false}>
          Remove
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export const DashboardCard: React.FC<DashboardCardProps> = ({
  children,
  title,
  cardButtons,
}) => {
  const [present] = useIonPopover(PopoverContent);
  return (
    <IonCard className="ion-no-margin" style={{ minWidth: 288, width: "100%" }}>
      <IonCardHeader>
        <IonRow className="ion-justify-content-between ion-align-items-center">
          {title}
          <IonButton
            size="small"
            fill="clear"
            onClick={({ nativeEvent }) =>
              present({
                alignment: "start",
                showBackdrop: false,
                side: "bottom",
                event: nativeEvent,
              })
            }
          >
            <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline} />
          </IonButton>
        </IonRow>
      </IonCardHeader>
      <IonCardContent
        style={{
          width: "100%",
          height: "360px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {children}
      </IonCardContent>
      {cardButtons}
    </IonCard>
  );
};
