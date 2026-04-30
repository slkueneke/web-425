import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Quicksand:wght@300..700&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  `,
  styles: [``],
})
export class AppComponent {
  title = 'portfolio';
}
