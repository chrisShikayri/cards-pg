import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, ButtonModule, CommonModule], // Añade CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards';

  cards = [
    {
      title: 'Card 1',
      subheader: 'Subheader 1',
      image: 'https://external-preview.redd.it/WkUs8_9ib0qr0G1RzRnUFOuu0_oyyOsLyi_yYUocw1Y.jpg?width=1080&crop=smart&auto=webp&s=d3e4d3f36965423fb89a178450f8dcadaebb5ab7',
      text: 'Me gusta que me acaricien, las manos y los dedos y los piesitos con tu voz.'
    },
    {
      title: 'Card 2',
      subheader: 'Subheader 2',
      image: 'https://i.ytimg.com/vi/qCKGaQM7qJE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3mkQVpoSXEY4xabXlovxmVZNPVA',
      text: 'Este es el texto para la tarjeta número 2.'
    },
    {
      title: 'Card 3',
      subheader: 'Subheader 3',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbqMjtAlC3L90bSyeskhHgyZ62Grv-gzylkI540hn4Q51IcPHRIP0E2uOw36zr0Ja01YSOPiR6RIGNSIQP9kVbhQEwGRCA_Gzn3PVwtSJ9viLTJAig60GtSP91IkO0N9qoHHk1AIhC1QK1DwnXXjIsH6dfdAyHkMkj3oK2XtytyjJrSnkUTbApVv08wbyA/s800/re-zero-s3.jpg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 4',
      subheader: 'Subheader 3',
      image: 'https://sm.ign.com/ign_es/gallery/a/arcane-sea/arcane-season-2-september-2024-trailer-stills_wt68.jpg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 5',
      subheader: 'Subheader 3',
      image: 'https://cdn.eldestapeweb.com/eldestape/032023/1680121468628.webp?cw=770&ch=440&extw=jpg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 6',
      subheader: 'Subheader 3',
      image: 'https://www.mundodeportivo.com/alfabeta/hero/2024/10/frieren.jpg?width=768&aspect_ratio=16:9&format=nowebp',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 7',
      subheader: 'Subheader 3',
      image: 'https://sugoicast.com/wp-content/uploads/2024/04/frieren-resena-anime.jpg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 8',
      subheader: 'Subheader 3',
      image: 'https://somoskudasai.com/wp-content/uploads/2022/05/portada_spy-x-family-64.jpg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 9',
      subheader: 'Subheader 3',
      image: 'https://i.blogs.es/3194cd/one-piece/500_333.jpeg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 10',
      subheader: 'Subheader 3',
      image: 'https://www.anmosugoi.com/wp-content/uploads/2024/06/Dandadan-Momo-Ayase-min-1.webp',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 11',
      subheader: 'Subheader 3',
      image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2024/07/ranma-1-2-proyeccion-especial-nyc-2024.jpg',
      text: 'Texto único para la tarjeta 3.'
    },
    {
      title: 'Card 12',
      subheader: 'Subheader 3',
      image: 'https://c4.wallpaperflare.com/wallpaper/318/921/156/evangelion-neon-genesis-evangelion-evangelion-unit-01-rei-ayanami-sachiel-neon-genesis-evengelion-hd-wallpaper-preview.jpg',
      text: 'Texto único para la tarjeta 3.'
    }
  ];
}
