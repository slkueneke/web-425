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

import { Component } from '@angular/core';
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
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
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

            @for (exp of experience; track exp) {
              <ul class="experience-container">
                <h5>{{ exp.jobTitle }}</h5>

                <li>{{ exp.employer }}, {{ exp.location }}</li>
                <li>{{ exp.startDate }} - {{ exp.endDate }}</li>
                <li>{{ exp.description }}</li>
              </ul>
            }
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

    .experience-container {
      margin-bottom: 2em;
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

    #skills ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      gap: 1em;
      margin-bottom:2em;
    }

    #skills li {
      border: 1px solid gray;
      border-radius: 4px;
      padding: 1px 5px;
      background: #dedec3;
    }

    #certifications li,
    #education li {
      margin-bottom:2em;
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
      font-size:1.1em;
    }

    #skills h5 {
      margin-bottom:1em;
    }

    @media all and (max-width: 768px) {
      #resumeNav button {
        margin: 0 auto;
        max-width: 80%;
      }

      #resumeNav h2,
      #resumeNav ul {
        display: none;
      }

      .flexWrapper {
        flex-direction: column;
      }

      .colLeft {
        order: 2;
      }

      .colRight {
        order: 1;
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
          'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        jobTitle: 'Lead Technical Consultant / Solutions Engineer',
        employer: 'Oracle Maxymiser',
        location: 'New York, NY',
        startDate: 'July 2013',
        endDate: 'April 2018',
        description:
          'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        jobTitle: 'Front End Development Intern',
        employer: 'Mind Movies',
        location: 'San Diego, CA',
        startDate: 'January 2013',
        endDate: 'June 2013',
        description:
          'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
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
}
