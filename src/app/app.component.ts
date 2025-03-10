import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  companyName = 'Eleganza Noleggio';
  presentationTitle = 'Noleggio Abiti da Cerimonia e Sera';

  weddingDressSection = {
    title: 'Abiti da Sposa su Misura',
    description:
      'Scopri la tua favola con i nostri abiti da sposa di alta qualità. Offriamo una selezione esclusiva di abiti da noleggio che rendono il tuo giorno speciale indimenticabile. Ogni abito è accuratamente selezionato e curato per farti sentire unica.',
    features: [
      'Collezioni firmate di alta moda',
      'Servizio di prova e adattamento personalizzato',
      'Igienizzazione e preparazione professionale',
    ],
    imageUrl: 'assets/images/weeding.jpg',
  };

  eveningDressSection = {
    title: 'Glamour per Serate Speciali',
    description:
      "Risplendi in ogni occasione con i nostri eleganti abiti da sera. Dal red carpet agli eventi di gala, la nostra collezione offre stile e raffinatezza a prezzi accessibili. Trova l'abito perfetto che esalta la tua personalità.",
    features: [
      'Taglie dalla 38 alla 48',
      'Stili che vanno dal classico al contemporaneo',
      'Consulenza di stile personalizzata',
    ],
    imageUrl: 'assets/images/night.jpg',
  };
}
