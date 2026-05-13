import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <div class="flexWrapper">
      <section class="colLeft">
        <section id="resumeNav">
          <h2 class="font-bubble">View Project</h2>
          <ul class="font-clean">
            <li><a href="#">Project 1</a></li>
            <li><a href="#">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
            <li><a href="#">Project 4</a></li>
            <li><a href="#">Project 5</a></li>
          </ul>
        </section>
      </section>

      <section class="colRight">
        <section>
          <h2 class="font-mono color-sage subpage">Projects_</h2>

          <section class="projSec" id="">
            <h3 class="font-bubble">Name</h3>

            <div class="projImg"></div>

            <div class="projText">
              <div>
                <h4 class="font-mono color-dark">Description</h4>
                <p class="color-grey">
                  dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
              <div>
                <h4 class="font-mono color-dark">Learnings</h4>
                <p class="color-grey">
                  dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Donec
                  quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  `,
  styles: [
    `
      .projImg {
        min-height: 300px;
        width: 100%;
        border: 1px solid #a8a892ff;
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
export class ProjectsComponent {}
