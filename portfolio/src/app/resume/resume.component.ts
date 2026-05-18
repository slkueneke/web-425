export interface ResumeExperience {
  jobTitle: string,
  employer: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
}

export interface ResumeSkills {
  techSkill: string[],
  busSkill: string[],
  platforms: string[]
}

export interface ResumeCertifications {
  certificationName: string,
  institute: string,
  certDate: string,
  description?: string
}

export interface ResumeEducation {
  degreeName: string,
  college: string
}

import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flexWrapper">
      <section class="colLeft">
        <section id="resumeNav">
          <h2 class="font-bubble">Jump To Section</h2>
          <ul class="font-clean">
            <li>
              <a
                id="nav_experience"
                (click)="scrollToSection('experience'); $event.preventDefault()"
                data-target="experience"
                >Experience</a
              >
            </li>
            <li>
              <a
                id="nav_skills"
                (click)="scrollToSection('skills'); $event.preventDefault()"
                data-target="skills"
                >Skills</a
              >
            </li>
            <li>
              <a
                id="nav_certifications"
                (click)="
                  scrollToSection('certifications'); $event.preventDefault()
                "
                data-target="certifications"
                >Certifications</a
              >
            </li>
            <li>
              <a
                id="nav_education"
                (click)="scrollToSection('education'); $event.preventDefault()"
                data-target="education"
                >Education</a
              >
            </li>
          </ul>

          <a
            href="ShannonKueneke-Resume2026.pdf"
            download="ShannonKueneke-Resume2026.pdf"
            class="cta cta-onDark desktop"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#1f1f1f"
                d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"
              />
            </svg>
            Download Resume
          </a>

          <ul _ngcontent-ng-c3469074573="" id="socialLinks">
            <li>
              <a
                href="ShannonKueneke-Resume2026.pdf"
                download="ShannonKueneke-Resume2026.pdf"
                title="Download resume"
                class="mobile tablet"
              >
                <svg
                  _ngcontent-ng-c2944580614=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    _ngcontent-ng-c2944580614=""
                    fill="#1f1f1f"
                    d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"
                  ></path>
                </svg>
              </a>
            </li>
            <li _ngcontent-ng-c3469074573="">
              <a
                _ngcontent-ng-c3469074573=""
                href="https://linkedin.com/in/shannonkueneke"
                target="_blank"
                title="go to linkedin"
                ><svg
                  _ngcontent-ng-c3469074573=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    _ngcontent-ng-c3469074573=""
                    fill="#4c4c47ff"
                    d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z"
                  ></path></svg
              ></a>
            </li>
            <li _ngcontent-ng-c3469074573="">
              <a
                _ngcontent-ng-c3469074573=""
                href="https://www.github.com/slkueneke"
                target="_blank"
                title="go to github"
                ><svg
                  _ngcontent-ng-c3469074573=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    _ngcontent-ng-c3469074573=""
                    fill="#4c4c47ff"
                    d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"
                  ></path></svg
              ></a>
            </li>
            <li _ngcontent-ng-c3469074573="">
              <a
                _ngcontent-ng-c3469074573=""
                href="mailto:slkueneke@gmail.com"
                title="email me"
                ><svg
                  _ngcontent-ng-c3469074573=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    _ngcontent-ng-c3469074573=""
                    fill="#4c4c47ff"
                    d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
                  ></path></svg
              ></a>
            </li>
          </ul>
        </section>
      </section>

      <section class="colRight">
        <h2 class="font-mono subpage">Resume_</h2>

        <section>
          <section class="resumeSec" id="experience">
            <h4 class="font-bubble">Experience</h4>

            @for (exp of experience; track exp) {
              <ul class="experience-container">
                <h5>{{ exp.jobTitle }}</h5>

                <li>{{ exp.employer }}, {{ exp.location }}</li>
                <li>{{ exp.startDate }} - {{ exp.endDate }}</li>
                <li>{{ exp.description }}</li>
              </ul>
            }

            <svg
              class="bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              (click)="scrollToSection('skills')"
            >
              <!--!Font Awesome Pro v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.-->
              <path
                fill="#4d4d48"
                d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
              />
            </svg>
          </section>

          <section class="resumeSec" id="skills">
            <h4 class="font-bubble">Skills</h4>

            <h5>Technical Skills</h5>
            <ul>
              @for (skill of skills.techSkill; track skill) {
                <li>
                  {{ skill }}
                </li>
              }
            </ul>

            <h5>Business Skills</h5>
            <ul>
              @for (skill of skills.busSkill; track skill) {
                <li>
                  {{ skill }}
                </li>
              }
            </ul>

            <h5>Platforms</h5>
            <ul>
              @for (skill of skills.platforms; track skill) {
                <li>
                  {{ skill }}
                </li>
              }
            </ul>

            <svg
              class="bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              (click)="scrollToSection('certifications')"
            >
              <!--!Font Awesome Pro v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.-->
              <path
                fill="#4d4d48"
                d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
              />
            </svg>
          </section>

          <section class="resumeSec" id="certifications">
            <h4 class="font-bubble">Certifications</h4>

            <ul class="certifications-container">
              @for (cert of certifications; track cert) {
                <li>
                  <span class="bold">{{ cert.certificationName }}</span
                  ><br />
                  {{ cert.institute }}, {{ cert.certDate }}
                </li>
              }
            </ul>

            <svg
              class="bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              (click)="scrollToSection('education')"
            >
              <!--!Font Awesome Pro v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.-->
              <path
                fill="#4d4d48"
                d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
              />
            </svg>
          </section>

          <section class="resumeSec" id="education">
            <h4 class="font-bubble">Education</h4>

            <ul class="education-container">
              @for (edu of education; track edu) {
                <li>
                  <span class="bold">{{ edu.degreeName }}</span
                  ><br />
                  {{ edu.college }}
                </li>
              }
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-up bounce"
              viewBox="0 0 16 16"
              (click)="scrollToSection('experience')"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          </section>
        </section>
      </section>
    </div>
  `,
  styles: `
    #resumeNav a.cta {
      margin-left: 2em;
      margin-top: 3em;
      display: block;
      font-size: 0.8em;
    }

    #resumeNav svg {
      width: 20px;
      height: 20px;
      vertical-align: text-bottom;
    }

    #resumeNav svg path {
      fill: #a8a892ff;
    }

    #socialLinks {
      display: flex;
      flex-direction: row;
      margin-left: 2em;
      width: fit-content;
      gap: 2.5em;
      margin-top: 1em;
    }

    #socialLinks li:hover svg path {
      fill: #1b1b1bff;
    }

    #socialLinks svg {
      height: 30px;
      width: 30px;
    }

    #socialLinks svg path {
      fill: #4c4c47ff;
    }

    .experience-container {
      margin-bottom: 2em;
    }

    .resumeSec {
      min-height: 100vh;
      scroll-snap-align: start;
    }

    .colRight > section {
      height: 100vh;
      overflow: hidden;
      scroll-behavior: smooth;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      scrollbar-width: none;

      scroll-snap-type: y proximity;
    }

    .resumeSec svg {
      width: 16px;
      margin: 0 auto;
      display: block;
    }

    .resumeSec ul {
      list-style: none;
    }

    .resumeSec li {
      font-family: 'Quicksand', sans-serif;
      font-size: 0.8em;
    }

    #experience li:last-child {
      margin-top: 1em;
    }

    #experience > ul:nth-child(4) {
      margin-bottom: 1em;
    }

    #skills ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      gap: 1em;
      margin-bottom: 2em;
    }

    #skills li {
      border: 1px solid gray;
      border-radius: 4px;
      padding: 1px 5px;
      background: #dedec3;
    }

    #certifications li,
    #education li {
      margin-bottom: 2em;
    }

    h5,
    .bold {
      font-family: 'Google Sans Code', monospace;
      margin: 0;
      font-size: 0.9em;
      font-weight: 400;
      margin-bottom: 0.3em;
    }

    .bold {
      font-size: 1.1em;
    }

    #skills h5 {
      margin-bottom: 1em;
    }

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

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .bounce {
      animation: bounce 2s infinite ease-in-out;
    }

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

      #socialLinks {
        margin-left: 0;
        justify-content: center;
        flex-wrap: wrap;
        width: initial;
        margin-top: 0;
      }

      #resumeNav a.cta {
        margin: 0 auto;
        max-width: 80%;
        display: none;
      }

      .flexWrapper {
        flex-direction: column;
      }

      /*.colLeft {
        order: 1;
        margin-bottom: 1em;
        width: 100%;
      }*/

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

      .colRight {
        order: 2;
        width: 100%;
      }

      .colRight > section {
        padding: 0 1em;
      }
    }
  `,
})
export class ResumeComponent {
  experience: ResumeExperience[];
  skills: ResumeSkills;
  certifications: ResumeCertifications[];
  education: ResumeEducation[];

  constructor() {
    this.experience = [
      {
        jobTitle: 'Digital Optimization Developer, Senior',
        employer: 'USAA',
        location: 'Remote from San Diego, CA',
        startDate: 'April 2018',
        endDate: 'Present',
        description:
          'Engineers end-to-end A/B, multivariate, and personalization tests, translating business requirements into technical specs, coding test logic, validating functionality, and ensuring compliance with the design ecosystem.',
      },
      {
        jobTitle: 'Lead Technical Consultant / Solutions Engineer',
        employer: 'Oracle Maxymiser',
        location: 'New York, NY',
        startDate: 'July 2013',
        endDate: 'April 2018',
        description:
          'Engineers advanced A/B and multivariate tests in Maxymiser using JavaScript, jQuery, HTML, and CSS, delivering custom solutions, ensuring cross-browser quality, and troubleshooting complex issues. Leads the self-serve Solutions Engineering team, trains clients on best practices, and provides product feedback to improve platform capabilities.',
      },
      {
        jobTitle: 'Front End Development Intern',
        employer: 'Mind Movies',
        location: 'San Diego, CA',
        startDate: 'January 2013',
        endDate: 'June 2013',
        description:
          'Develop responsive marketing webpages from requirements, implement HTML/CSS best practices, troubleshoot compatibility issues, and extend existing functionality through PHP, JavaScript, video encoding, and database manipulation.',
      },
    ];
    ((this.skills = {
      techSkill: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'Python',
        'AngularJS',
        'Node.js',
        'TypeScript',
        'JQuery',
        'NoSQL',
        'MongoDB',
        'Express.js',
        'Flask',
        'Basicdb',
        'REST APIs',
        'Test Driven Development (TDD)',
        'Responsive Web Design',
        'MEAN Stack Development',
      ],
      busSkill: [
        'Digital Optimization',
        'A/B Testing',
        'Multivariate Testing (MVT)',
        'Technical Consulting',
        'Technical Product Training',
      ],
      platforms: [
        'GitHub',
        'Optimizely Web Experimentation',
        'Optimizely Feature Experimentation',
        'Adobe Target',
        'Maxymiser',
        'SharePoint',
        'Angular CLI',
      ],
    }),
      (this.certifications = [
        {
          certificationName: 'Web App Development (Python)',
          institute: 'Cornell University',
          certDate: 'March 2025',
        },
        {
          certificationName: 'SAFe 5 Product Owner/Project Manager',
          institute: 'SAFe by Scaled Agile',
          certDate: 'April 2021',
        },
      ]));
    this.education = [
      {
        degreeName: 'BS Web Development',
        college: 'Bellevue University',
      },
      {
        degreeName: 'BA Criminology and Justice Studies',
        college: 'California State University - San Marcos',
      },
    ];
  }

  ngAfterViewInit() {
    const container = document.querySelector('.colRight > section');
    container?.addEventListener('scroll', () => this.updateActiveNav());
  }

  updateActiveNav() {
    const container = document.querySelector('.colRight > section');
    const sections = Array.from(document.querySelectorAll('.resumeSec'));
    const navLinks = document.querySelectorAll('#resumeNav a');

    if (!container) return;

    // Find the section closest to the top of the container
    let closestSection = sections[0];
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(rect.top - containerRect.top);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    const activeId = closestSection.getAttribute('id');

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('data-target') === activeId,
      );
    });
  }

  scrollToSection(id: string) {
    const container = document.querySelector('.colRight > section');
    const target = document.getElementById(id);

    if (container && target) {
      container.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  }
}
