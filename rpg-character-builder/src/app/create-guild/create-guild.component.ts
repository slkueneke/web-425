import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="guild-form-container">
      <form
        [formGroup]="createGuildForm"
        class="create-guild"
        (ngSubmit)="createGuild(); createGuildForm.reset()"
      >
        <h1>Create a New Guild</h1>
        <fieldset>
          <legend>Guild Details</legend>

          <label>Guild Name</label>
          <input type="text" formControlName="guildName" required />

          <label>Guild Description</label>
          <textarea rows="10" formControlName="guildDesc" required></textarea>

          <label>Guild Type</label>
          <select required formControlName="guildType">
            @for (option of type; track option) {
              <option [value]="option">{{ option }}</option>
            }
          </select>

          <br /><br />
          <label>Check to accept the terms and conditions of this site.</label>
          <div class="grouping-inline">
            <input type="checkbox" formControlName="guildTerms" required />
            <span class="font1">I accept.</span>
          </div>

          <br /><br />
          <label>Notification Preference</label>
          <div class="grouping">
            @for (option of notifs; track option) {
              <div class="radioGroup">
                <input
                  type="radio"
                  [value]="option"
                  formControlName="guildNotif"
                  required
                />
                <span class="font1"> {{ option }} </span><br />
              </div>
            }
          </div>
          <button
            type="submit"
            [disabled]="!createGuildForm.valid"
            value="Create Guild"
          >
            Create Guild
          </button>
        </fieldset>
      </form>

      <!--display created guilds-->
      <div class="guilds">
        <h1>Guilds Created</h1>
        <div class="guild-container">
          @if (guilds.length > 0) {
            <ul>
              @for (guild of guilds; track guild) {
                <li class="font2">
                  <h3>
                    <span>{{ guild.name }}</span>
                  </h3>

                  <p>
                    <span class="descriptor">Description:</span>
                    {{ guild.desc }}
                  </p>

                  <p><span class="descriptor">Type:</span> {{ guild.type }}</p>

                  <p>
                    <span class="descriptor">Notifications:</span>
                    {{ guild.notifs }}
                  </p>
                </li>
              }
            </ul>
          } @else {
            <p>No guilds created yet.</p>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .guild-form-container {
        display: flex;
        gap: 20px;
      }

      .grouping-inline,
      .grouping .radioGroup {
        display: flex;
        gap: 10px;
        align-items: center;
        margin: 10px;
      }
      .grouping-inline input,
      .grouping input {
        height: 20px;
        width: 20px;
        margin: 0;
      }
      .create-guild,
      .guilds {
        flex: 1;
      }
      fieldset,
      .font2,
      .guild-container > p {
        font-family: 'Unica One', sans-serif;
        margin-bottom: 20px;
      }
      h1 {
        font-family: 'Bitcount Grid Single Ink', system-ui;
      }
      .font1 {
        font-family: Arial, sans-serif;
        font-size: 14px;
      }
      input,
      textarea,
      select,
      label {
        display: block;
        width: 100%;
      }
      label {
        margin-top: 10px;
      }
      input,
      select {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        box-sizing: border-box;
      }
      input[type='checkbox'] {
        width: initial;
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
        cursor: not-allowed;
        background-color: #ccc;
      }
      .guilds li {
        margin-bottom: 10px;
        list-style: none;
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }
      .guilds li:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
      }

      .guilds li span {
        font-weight: bold;
        font-size: 1.5em;
      }
      .guild-container li p span {
        font-size: initial;
        color: #a143a1;
        display: block;
      }
    `,
  ],
})
export class CreateGuildComponent {
  type: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notifs: string[] = ['Email', 'SMS', 'In-App'];
  guilds: any[] = [];

  createGuildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    guildDesc: [null, Validators.compose([Validators.required])],
    guildType: [null, Validators.compose([Validators.required])],
    guildTerms: [null, Validators.compose([Validators.required])],
    guildNotif: [null, Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder) {}

  createGuild() {
    const newGuild = {
      name: this.createGuildForm.value.guildName,
      desc: this.createGuildForm.value.guildDesc,
      type: this.createGuildForm.value.guildType,
      terms: this.createGuildForm.value.guildTerms,
      notifs: this.createGuildForm.value.guildNotif,
    };

    this.guilds.push(newGuild);
  }
}
