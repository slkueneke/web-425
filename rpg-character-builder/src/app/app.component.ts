import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single+Ink:wght@100..900&family=Bitcount+Grid+Single:wght@100..900&family=Unica+One&display=swap"
        rel="stylesheet"
      />
      <header class="banner">
        <h1 class="font2">RPG Character Builder</h1>
        <h2>forge your hero.</h2>
      </header>
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a class="font3" routerLink="/">Home</a></li>
            <li><a class="font3" routerLink="/players">Players</a></li>
            <li><a class="font3" routerLink="/signin">Sign In</a></li>
            <li>
              <a class="font3" routerLink="/create-character"
                >Create Character</a
              >
            </li>
            <li>
              <a class="font3" routerLink="/create-guild">Create Guild</a>
            </li>
            <li>
              <a class="font3" routerLink="/character-faction"
                >Character Faction</a
              >
            </li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <div class="footer-links">
            <a class="font3" routerLink="/">Home</a>
            <a class="font3" routerLink="/players">Players</a>
            <a class="font3" routerLink="/signin">Sign In</a>
            <a class="font3" routerLink="/create-character">Create Character</a>
            <a class="font3" routerLink="/create-guild">Create Guild</a>
            <a class="font3" routerLink="/character-faction"
              >Character Faction</a
            >
          </div>
          <p class="font2">&copy; RPG Character Builder 2026</p>
        </nav>
      </footer>
    </div>
  `,
  styles: [
    `
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      a,
      li,
      span {
        font-family: Arial, sans-serif;
      }

      h1 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 0;
      }

      h2 {
        text-align: center;
        font-weight: normal;
        letter-spacing: 1rem;
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 2rem;
      }

      a {
        text-decoration: none;
        color: #000;
      }

      a:visited {
        color: #000;
      }

      a:hover {
        text-transform: uppercase;
        color: #974a97;
      }

      .font2 {
        font-family: 'Bitcount Grid Single Ink', system-ui;
      }

      .font3 {
        font-family: 'Unica One', sans-serif;
      }

      .wrapper {
        margin: 0 auto;
        width: 80%;
      }

      .navbar {
        border-top: 4px dashed #000;
        border-bottom: 4px dashed #000;
      }

      nav ul {
        padding: 0;
        font-size: 1.6rem;
        margin: 1rem 0;
      }

      nav ul,
      footer nav {
        list-style: none;
        display: flex;
      }

      nav ul {
        justify-content: space-evenly;
      }

      nav li {
        text-align: center;
      }

      footer nav {
        justify-content: space-between;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-top: 2px dashed #000;
        padding-top: 1rem;
      }

      footer nav p {
        margin: 0;
      }

      footer nav .footer-links {
        display: flex;
        justify-content: space-between;
        min-width: 30%;
      }

      footer nav .footer-links a {
        padding-right: 2rem;
      }

      footer nav .footer-links a:before {
        content: url(../../public/alien.png);
        vertical-align: middle;
        padding-right: 5px;
      }

      @media all and (max-width: 768px) {
        footer nav .footer-links a:before {
          content: '';
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'rpg-character-builder';
}
