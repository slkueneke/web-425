import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flexWrapper">
      <section class="colLeft">
        <section>
          <h2 class="font-bubble">Bucket List</h2>
          <ul class="font-clean">
            <li>Create a native app</li>
            <li>Master Python</li>
            <li>Learn React</li>
          </ul>
        </section>
      </section>

      <section class="colRight">
        <section>
          <h2 class="font-mono color-dark">Hi, I'm Shannon.</h2>
          <p class="font-clean color-grey">
            I'm a developer who loves turning ideas into interactive, beautifully structured digital experiences. From character builders to real-world apps, I craft clean, modular systems powered by modern front and back-end engineering.
          </p>
          <button class="cta" routerLink="/resume">View Resume</button>
          <button class="cta" routerLink="/projects">My Projects</button>
        </section>
      </section>
    </div>
  `,
  styles: [
    `
      .colLeft ul {
        list-style: none;
      }

      .colLeft li::before {
        content: '> ';
      }

      .colLeft > section {
        padding: 2em;
      }

      .colRight > section {
        padding: 3em;
      }

      .colRight h2 {
        font-size: 2em;
      }

      .colRight p {
        font-size: 1.2em;
      }
    `,
  ],
})
export class HomeComponent {}
