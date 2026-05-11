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
            intro copy here in quicksand font, carbon black dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
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

      @media all and (max-width: 576px) {
        .flexWrapper {
          flex-direction: column;
        }

        .colRight {
          order: 1;
          width: 100%;
        }

        .colRight p {
          font-size: 1.5em;
        }

        .colLeft {
          order: 2;
          width: 100%;
          margin-bottom: 4em;
        }

        .colLeft h2 {
          text-align: center;
          font-size: 2em;
        }

        .colLeft ul {
          font-size: 1.25em;
          width: fit-content;
          margin: 0 auto;
        }

        .cta {
          width: 100%;
          display: block;
          max-width: unset;
          margin-bottom: 1.5em;
          font-size: 1.25em;
        }
      }
    `,
  ],
})
export class HomeComponent {}
