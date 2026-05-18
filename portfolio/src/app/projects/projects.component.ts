export interface Projects {
  id: string;
  name: string;
  image: string;
  link: string;
  tech: string[];
  desc: string;
  learnings: string;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flexWrapper">
      <section class="colLeft">
        <section id="resumeNav">
          <h2 class="font-bubble">View Project</h2>
          <ul class="font-clean">
            @for (proj of project; track proj) {
              <li>
                <a
                  (click)="selectProject(proj); $event.preventDefault()"
                  [class.active]="selectedProject?.id === proj.id"
                >
                  {{ proj.name }}
                </a>
              </li>
            }
          </ul>
        </section>
      </section>

      <section class="colRight">
        <section>
          <h2 class="font-mono subpage">Projects_</h2>

          <section *ngIf="!selectedProject" class="projSec">
            <h3 class="font-bubble">Select a project</h3>
          </section>

          <section class="projSec" *ngIf="selectedProject">
            <h3 class="font-bubble">{{ selectedProject.name }}</h3>

            <div class="projImg">
              <a
                target="_blank"
                *ngIf="selectedProject.link"
                [href]="selectedProject.link"
              >
                <img
                  *ngIf="selectedProject.image"
                  [src]="selectedProject.image"
                  alt=""
                />
              </a>
            </div>

            <div class="projTech">
              <h4 class="font-mono color-dark">Technologies Used</h4>
              <ul>
                <li *ngFor="let t of selectedProject.tech">{{ t }}</li>
              </ul>
            </div>

            <div class="projText">
              <div>
                <h4 class="font-mono color-dark">Description</h4>
                <p class="color-grey">{{ selectedProject.desc }}</p>
              </div>

              <div>
                <h4 class="font-mono color-dark">Learnings</h4>
                <p class="color-grey">{{ selectedProject.learnings }}</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  `,
  styles: [
    `
      /*LEFT COL PROJECT NAV*/
      #resumeNav li:hover {
        cursor: pointer;
      }

      #resumeNav a.active {
        font-weight: bold;
      }

      #resumeNav a.active::before {
        content: '> ';
      }

      /*PROJECT IMAGES*/
      .projImg {
        width: 100%;
        border: 1px solid #a8a892ff;
      }

      /*TECHNOLOGY USED PILLS*/
      .projTech ul {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        gap: 1em;
        margin-bottom: 0.5em;
      }

      .projTech li {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 1px 5px;
        background: #dedec3;
        font-family: 'Quicksand', sans-serif;
      }

      /*PROJECT DESC/LEARNINGS TEXT*/
      .projText {
        display: flex;
        flex-direction: row;
        gap: 2em;
      }

      h4 {
        font-weight: normal;
        text-align: left;
        font-size: 0.9em;
      }

      /*TABLETS*/
      @media all and (max-width: 768px) {
        .flexWrapper .colLeft {
          order: 1;
          margin-bottom: 0;
          width: 100%;
          position: fixed;
          bottom: 0;
          background: #a8a892;
          z-index: 1;
        }

        .colLeft h2 {
          font-size: 1em;
          text-align: center;
        }

        .colLeft ul {
          font-size: 1em;
          width: auto;
          margin: 0 auto;
          display: flex;
          justify-content: space-evenly;
        }

        #resumeNav a.active {
          font-weight: bold;
        }

        #resumeNav a.active::before {
          content: none;
        }

        .projSec {
          padding: 0 1em 0;
        }
      }

      /*PHONES*/
      @media (max-width: 576px) {
        .colRight p {
          font-size: 1em;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  project: Projects[];

  selectedProject: Projects | null = null;

  constructor() {
    this.project = [
      {
        id: 'bio-site',
        name: 'Bio Site',
        image: '/biosite.png',
        link: 'https://slkueneke.github.io/bioSite/',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        desc: 'Creation of a responsive bio site for my friend, Fritzie Dizon. This site showcases details about her personal and professional life.',
        learnings:
          "Learned how to maintain my own design style while taking into consideration the client's preferences and requirements. Ensured the site remained interesting and accessible for all screen sizes.",
      },
      {
        id: 'rpg',
        name: 'RPG Character Builder',
        image: '/rpg.png',
        link: 'https://github.com/slkueneke/web-425/tree/master/rpg-character-builder',
        tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
        desc: 'Built a full, stateful, component-driven Angular application based around creating RPG characters for offline play.',
        learnings:
          'Learned real-world patterns: data modeling, form handling, TypeScript discipline, environment stability, debugging, and scalable UI architecture.',
      },
    ];
  }

  selectProject(proj: Projects) {
    this.selectedProject = proj;
  }
}
