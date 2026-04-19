export interface PlayerOption {
  name: string,
  gender: string,
  class: string,
  faction: string,
  startingLocation: string,
  funFact: string
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [/*RouterLink, */ CommonModule],
  template: `
    <div>
      <h1 class="font2 center">Players</h1>
      <ul class="player-container">
        @for (option of players; track option) {
          <li class="player-option">
            <div class="card">
              <h3 class="font2">{{ option.name }}</h3>

              <table class="playerStats">
                <td>
                  <tr class="font3">
                    <td>Gender:</td>
                    <td>{{ option.gender }}</td>
                  </tr>
                  <tr class="font3">
                    <td>Class:</td>
                    <td>{{ option.class }}</td>
                  </tr>
                  <tr class="font3">
                    <td>Faction:</td>
                    <td>{{ option.faction }}</td>
                  </tr>
                  <tr class="font3">
                    <td>Starting Location:</td>
                    <td>{{ option.startingLocation }}</td>
                  </tr>
                  <tr class="font3">
                    <td>Fun Fact:</td>
                    <td>{{ option.funFact }}</td>
                  </tr>
                </td>
              </table>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    li {
      font-family: Arial, sans-serif;
    }

    .font2 {
      font-family: 'Bitcount Grid Single Ink', system-ui;
    }

    .font3 {
      font-family: 'Unica One', sans-serif;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 0;
    }

    h2 {
      margin-top: 0;
    }

    table {
      border-collapse: collapse;
    }

    .playerStats tr > td {
      padding: 10px;
    }

    .player-option h3 {
      margin-top: 0;
    }

    p,
    li {
      font-size: 1.2rem;
    }

    .playerStats {
      display: flex;
    }

    .playerStats tr.font3 > td:first-child {
      text-transform: uppercase;
      font-weight: bold;
      text-wrap: nowrap;
    }

    .playerStats tr.font3 > td:last-child {
      text-align: right;
    }

    .playerStats td tr.font3:nth-child(odd) {
      background-color: #a24aa224;
    }

    tr.font3 td:last-child {
      font-family: arial;
      font-weight: normal;
      font-size: 16px;
    }

    .center {
      text-align: center;
    }

    .player-container .card h3 {
      font-size: 2rem;
    }

    .player-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    .player-option {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .player-option:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
    }

    .card {
      padding: 20px;
      background-color: white;
    }
  `,
})
export class PlayersComponent {
  players: PlayerOption[];
  constructor() {
    this.players = [
      {
        name: 'Astra Veylan',
        gender: 'female',
        class: 'Starcaller',
        faction: 'Celestial Concord',
        startingLocation: 'Luminous Spire',
        funFact: 'She can predict meteor showers with eerie accuracy.',
      },
      {
        name: 'Brannik Thornshield',
        gender: 'male',
        class: 'Guardian',
        faction: 'Ironwall Legion',
        startingLocation: 'Fort Granitehold',
        funFact: 'He once stopped a charging boar with just his shield.',
      },
      {
        name: 'Kess Emberline',
        gender: 'other',
        class: 'Pyromancer',
        faction: 'Ashen Circle',
        startingLocation: 'Cinderstep Outpost',
        funFact: 'They can ignite candles by snapping their fingers.',
      },
      {
        name: 'Lyra Moonsong',
        gender: 'female',
        class: 'Bard',
        faction: 'Wandering Chorus',
        startingLocation: 'Silverwind Caravan',
        funFact: 'Her lullabies can calm even wild beasts.',
      },
      {
        name: 'Dorian Blackroot',
        gender: 'male',
        class: 'Shadowblade',
        faction: 'Nightveil Syndicate',
        startingLocation: 'Gloommarket Alley',
        funFact: 'He collects rare poisons as a hobby.',
      },
      {
        name: 'Tova Flintbreaker',
        gender: 'female',
        class: 'Berserker',
        faction: 'Stoneblood Clan',
        startingLocation: 'Craghammer Village',
        funFact: 'She arm-wrestled a troll and nearly won.',
      },
      {
        name: 'Elyndor Wraithleaf',
        gender: 'other',
        class: 'Druid',
        faction: 'Verdant Pact',
        startingLocation: 'Whispergrove',
        funFact: 'Plants grow faster when they hum nearby.',
      },
      {
        name: 'Rook Halverson',
        gender: 'male',
        class: 'Ranger',
        faction: 'Falconwatch Order',
        startingLocation: 'Highwind Cliffs',
        funFact: 'His falcon, Sable, refuses to listen to anyone else.',
      },
      {
        name: 'Seraphine Vale',
        gender: 'female',
        class: 'Cleric',
        faction: 'Sanctum of Dawn',
        startingLocation: 'Radiant Chapel',
        funFact: 'She brews surprisingly good herbal tea.',
      },
      {
        name: 'Merrit Quillforge',
        gender: 'other',
        class: 'Artificer',
        faction: 'Cogwright Guild',
        startingLocation: 'Gearfall Workshop',
        funFact:
          'They once built a mechanical cat that acts just like a real one.',
      },
    ];
  }
}
