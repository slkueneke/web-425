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
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
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
  styles: [`
    .colLeft ul {
      list-style:none;
    }

    .colLeft li::before {
      content: '> ';
    }

    .colLeft > section {
      padding:2em;
    }

    .colRight > section {
      padding:3em;
    }

    .colRight h2 {
      font-size:2em;
    }
    `],
})
export class HomeComponent {}
