import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="flexWrapper">
      <section class="colLeft">
        <section id="resumeNav">
          <h2 class="font-bubble">Jump To Section</h2>
          <ul class="font-clean">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#awards">Awards</a></li>
          </ul>

          <button class="cta cta-onDark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#1f1f1f"
                d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"
              />
            </svg>
            Download Resume
          </button>
        </section>
      </section>

      <section class="colRight">
        <h2 class="font-mono color-sage subpage">Resume_</h2>

        <section>
          <section class="resumeSec" id="experience">
            <h4 class="font-bubble">Experience</h4>
          </section>

          <section class="resumeSec" id="skills">
            <h4 class="font-bubble">Skills</h4>
          </section>

          <section class="resumeSec" id="certifications">
            <h4 class="font-bubble">Certifications</h4>
          </section>

          <section class="resumeSec" id="education">
            <h4 class="font-bubble">Education</h4>
          </section>

          <section class="resumeSec" id="awards">
            <h4 class="font-bubble">Awards</h4>
          </section>
        </section>
      </section>
    </div>
  `,
  styles: `
    #resumeNav button {
      margin-left: 2em;
      margin-top: 3em;
    }

    #resumeNav svg {
      width: 20px;
      height: 20px;
      vertical-align: text-bottom;
    }

    #resumeNav svg path {
      fill: #a8a892ff;
    }
  `,
})
export class ResumeComponent {}
