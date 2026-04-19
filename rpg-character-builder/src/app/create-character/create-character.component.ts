export interface Character {
  id: number;
  name: string;
  gender: 'male' | 'female' | 'other';
  class: 'mage' | 'rogue' | 'warrior';
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-creator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="creator-container">
      <form class="creator-form" (ngSubmit)="addCharacter()" #charForm="ngForm">
        <h1 class="font3">Create a New Character</h1>

        <fieldset>
          <legend class="font2">Character Details</legend>

          <!-- Character Name -->
          <label class="font2" for="name">Character Name</label>
          <input
            type="text"
            id="name"
            name="name"
            [(ngModel)]="name"
            required
          />

          <!-- Gender -->
          <label class="font2" for="gender">Gender</label>
          <select id="gender" name="gender" [(ngModel)]="gender" required>
            @for (g of genders; track g) {
              <option [value]="g">{{ g }}</option>
            }
          </select>

          <!-- Class -->
          <label class="font2" for="class">Class</label>
          <select id="class" name="class" [(ngModel)]="charClass" required>
            @for (c of classes; track c) {
              <option [value]="c">{{ c }}</option>
            }
          </select>

          <button
            class="font2"
            type="submit"
            value="Add Character"
            [disabled]="charForm.invalid"
          >
            Add Character
          </button>
        </fieldset>
      </form>

      <div class="character-summary">
        <h1 class="font3">Characters Created</h1>

        @if (characters.length > 0) {
          <ul>
            @for (char of characters; track char) {
              <li class="font2">
                <span>{{ char.name }}</span
                ><br />
                Gender: {{ char.gender }}<br />
                Class: {{ char.class }}<br />
                Character ID: {{ char.id }}
              </li>
            }
          </ul>
        } @else {
          <p class="font2">No characters created yet.</p>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .creator-container {
        display: flex;
        gap: 20px;
      }
      .creator-form {
        flex: 1;
      }
      .character-summary {
        flex: 1;
      }
      .font2 {
        font-family: 'Unica One', sans-serif;
      }
      .font3 {
        font-family: 'Bitcount Grid Single Ink', system-ui;
      }
      h1 {
        font-size: 1.5em;
      }
      fieldset {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-top: 10px;
      }
      input,
      select {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        box-sizing: border-box;
      }
      button[type='submit'] {
        margin-top: 15px;
        width: auto;
        float: right;
        background-color: #974a97;
        border: none;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        color: #fff;
        font-size: 1.2rem;
        display: inline-block;
        text-decoration: none;
      }
      button[type='submit']:hover {
        cursor: pointer;
        background-color: #000;
      }
      button[type='submit']:disabled {
        cursor:not-allowed;
        background-color:#ccc;
      }
      .character-summary li {
        margin-bottom: 10px;
      }
      .character-summary li span {
        font-weight: bold;
        font-size: 1.5em;
      }
    `,
  ],
})
export class CreateCharacterComponent {
  characters: Character[] = [];
  name: string = '';
  gender: 'male' | 'female' | 'other' = 'male';
  charClass: 'mage' | 'rogue' | 'warrior' = 'mage';

  genders = ['male', 'female', 'other'];
  classes = ['mage', 'rogue', 'warrior'];

  addCharacter() {
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.name,
      gender: this.gender,
      class: this.charClass,
    };

    this.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.gender = 'male';
    this.charClass = 'mage';
  }
}
