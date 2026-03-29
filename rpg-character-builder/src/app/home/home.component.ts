import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section id="hero">
      <div class="img-container">
        <img src="/create-your-hero.png" alt="create your hero" />
      </div>
      <div class="text-container">
        <h3 class="font2">
          Step into the forge — where imagination becomes form and every choice
          shapes a legend.
        </h3>

        <p>
          Build characters in minutes, refine them endlessly, and bring your
          stories to life with tools crafted for creators, GMs, and adventurers
          of every kind.
        </p>

        <div class="cta-container">
          <a href="#" class="font3 button">
            Start Building
          </a>

          <a href="#" class="font3 button">
            Explore Features
          </a>
        </div>
      </div>
    </section>

    <section id="create">
      <h3 class="font2">Create Without Limits</h3>

      <p>
        Heroes aren't born. They're built — one decision, one trait, one spark
        at a time. Our intuitive builder lets you craft fully realized
        characters with ease:
      </p>

      <ul>
        <li>Gender identity, class, and background selection</li>
        <li>Ability scores, skills, and combat stats</li>
        <li>Personality traits, ideals, bonds, and flaws</li>
        <li>Custom notes, art, and variations</li>
      </ul>

      <p>
        Whether you're prepping for a session tonight or dreaming up your next
        epic campaign, everything you need is right here.
      </p>
    </section>

    <section id="tools">
      <div class="text-container">
        <h3 class="font2">Tools for Storytellers</h3>
        <p>
          Designed for both players and game masters, the builder adapts to your
          workflow:
        </p>

        <ul>
          <li>Save unlimited characters</li>
          <li>Duplicate builds to explore alternate paths</li>
          <li>Track progression as your hero evolves</li>
          <li>Export clean, game-ready sheets</li>
        </ul>

        <p>
          No more scattered notebooks or half-finished ideas &mdash; just clean,
          organized creativity.
        </p>
      </div>

      <div class="img-container">
        <img src="/sheet.png" alt="create your hero" />
      </div>
    </section>

    <section id="guide">
      <h3 class="font2">Guided By Creativity</h3>

      <p>
        Every creator works differently, so RPG Character Builder is built to support
        your style.
      </p>

      <p>Prefer fast builds? Jump straight into streamlined presets.
        Love deep customization? Explore advanced options that let you tweak
        every detail, from combat stats to personality nuances.</p>

      <p> Our guided
        prompts help spark ideas when you're stuck, while flexible tools let you
        expand when inspiration strikes. Whether you're crafting a first-time
        adventurer or refining a long-running character, the forge adapts to the
        way you imagine.
      </p>
    </section>

    <section id="begin">
      <div class="img-container">
        <img src="/world.png" alt="create your hero" />
      </div>

      <div class="text-container">
        <h3 class="font2">Built For Every World</h3>

        <p>
          From high fantasy to grimdark, from homebrew realms to classic
          settings, RPG Character Creator supports any style of play. Start with
          familiar archetypes or break the mold entirely. Your world, your
          rules.
        </p>

        <p>
          Your next hero is waiting to be shaped. Step into the forge and craft
          a character worthy of the journey ahead.
        </p>

        <a href="#" class="font3 button">
          Forge Your Hero Now
        </a>
      </div>
    </section>
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

      .font2 {
        font-family: 'Bitcount Grid Single Ink', system-ui;
      }

      .font3 {
        font-family: 'Unica One', sans-serif;
      }

      h3 {
        font-size: 2rem;
      }

      p, li {
        font-size:1.2rem;
      }

      section {
        padding: 0 3rem 1.5rem;
        margin-top: 2rem;
      }

      a.button {
        background-color: #974a97;
        border:none;
        margin-right:2rem;
        margin-top:1rem;
        padding:0.5rem 1rem;
        color:#fff;
        font-size:1.2rem;
        display:inline-block;
        text-decoration:none;
      }

      a.button:hover {
        background-color:#000;
      }

      #create,
      #guide {
        border: 2px dashed #000;
      }

      #create h3,
      #guide h3 {
        text-align: center;
      }

      img {
        max-height: 400px;
        max-width: 400px;
      }

      #hero,
      #tools,
      #begin {
        display: flex;
        justify-content:space-between;
      }

      #begin img {
        margin-top:1.5rem;
        margin-right:1.5rem;
      }

    `,
  ],
})
export class HomeComponent {}


