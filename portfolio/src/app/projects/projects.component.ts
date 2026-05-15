export interface Projects {
  id: string,
  name: string,
  image: string,
  link: string,
  tech: string[],
  desc: string,
  learnings: string
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

          <section class="projSec" *ngIf="selectedProject">
            <h3 class="font-bubble">{{ selectedProject.name }}</h3>

            <div class="projImg">
              <img
                *ngIf="selectedProject.image"
                [src]="selectedProject.image"
                alt=""
              />
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
      #resumeNav li:hover,
      .bounce:hover {
        cursor: pointer;
      }

      #resumeNav a.active {
        font-weight: bold;
      }

      #resumeNav a.active::before {
        content: '> ';
      }

      .projImg {
        min-height: 300px;
        width: 100%;
        border: 1px solid #a8a892ff;
      }

      .projTech ul {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        gap: 1em;
        margin-bottom: 2em;
      }

      .projTech li {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 1px 5px;
        background: #dedec3;
        font-family: "Quicksand", sans-serif;

      }

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
        image: '',
        link: '',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        desc: 'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        learnings:
          'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 'rpg',
        name: 'RPG Character Builder',
        image: '',
        link: '',
        tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
        desc: 'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        learnings:
          'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
    ];
  }

  selectProject(proj: Projects) {
    this.selectedProject = proj;
  }
}
