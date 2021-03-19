import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonItem, 
         IonLabel, 
         IonToggle } 
         from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SmartHouse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollEvents={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">IFAL</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br></br>
        <IonLabel> Luzes da casa</IonLabel>
        <IonItem>
          <IonLabel>Led Piscina </IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <IonItem>
          <IonLabel>Led Sala </IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <IonItem>
          <IonLabel>LDR </IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <br></br>
        <br></br>
        <IonLabel>Outros</IonLabel>
        <IonItem>
          <IonLabel>Sirene</IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <IonItem>
          <IonLabel>Alarme</IonLabel>
          <IonToggle color="primary" />
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
