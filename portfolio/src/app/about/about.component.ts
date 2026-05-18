import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flexWrapper">
      <section class="colLeft">
        <section>
          <div>
            <img src="/headshot.png" alt="Photo of Shannon" />
            <img id="bubble" src="/bubble.png" alt="Hello speech bubble" />
          </div>
          <h3 class="font-bubble desktop tablet">I'm Passionate About...</h3>
          <ul class="font-clean desktop tablet">
            <li>Clean, minimalist design</li>
            <li>Pixel-perfect, responsive websites</li>
            <li>Semantic, maintainable code</li>
            <li>Typography</li>
            <li>Always learning and bettering myself</li>
          </ul>
        </section>
      </section>

      <section class="colRight">
        <h2 class="font-mono color-dark subpage">About_</h2>
        <section>
          <h3 class="font-bubble">Hello!</h3>
          <p class="font-clean color-grey">
            My name is Shannon Kueneke (pronounced Ken-AH-kee). I am a full
            stack developer residing in San Diego, CA with my husband, Mike, and
            our dog Gatsby.
          </p>

          <h3 class="font-bubble">Journey Into Dev</h3>
          <p class="font-clean">
            I had always had an interest in web development from the dawn of the
            internet. In middle school, I had taught myself HTML and built
            countless Geocities websites for fun. However, in that time, there
            was no formal education for this as it was too new to be introduced
            into schools, so it became a thing of the past.
          </p>

          <p class="font-clean">
            After college, I worked for 5 years at a start-up doing digital
            content. In 2012, I was laid off and took the time to think about
            what I really wanted to do with my life and went back to my old
            middle school passion. I spent the next year teaching myself modern
            HTML, CSS, and JavaScript and moved from San Diego to NYC to pursue
            a job in tech.
          </p>

          <p class="font-clean">
            I landed at a mid-sized SaaS company where I was able to cultivate
            my technical skills over 5 years. I then left to my current company
            where they offered free educational programs. I took advantage and
            got a second bachelors degree in web development, learning the MEAN
            stack.
          </p>

          <h3 class="font-bubble mobile">I'm Passionate About...</h3>
          <ul class="font-clean mobile">
            <li>Clean, minimalist design</li>
            <li>Pixel-perfect, responsive websites</li>
            <li>Semantic, maintainable code</li>
            <li>Typography</li>
            <li>Always learning and bettering myself</li>
          </ul>
        </section>
      </section>
    </div>
  `,
  styles: [
    `
      .mobile {
        display:none;
      }

      .colLeft img {
        width: 200px;
        display: block;
        margin: 0 auto;
        padding-right: 3em;
      }

      .colLeft h3 {
        background-color: #dedec3;
        margin-right: 2em;
        margin-top: 0;
      }

      .colLeft ul {
        font-size: 0.85em;
      }

      .colLeft li::before,
      .colRight li::before {
        content: '> ';
      }

      .colLeft > section > div {
        position: relative;
        max-width: 400px;
      }

      #bubble {
        position: absolute;
        transform: rotate(15deg);
        top: 0;
        right: -2em;
      }

      .colRight ul {
        padding-right: 2em;
        list-style: none;
      }

      .colRight > section {
        padding: 0 1em;
      }

      /*SMALL SCREENS, TABLETS, PHONES*/
      @media all and (max-width: 1024px) {
        #bubble {
          right: -3em;
        }
      }

      /*TABLETS, PHONES*/
      @media all and (max-width: 768px) {
        .tablet {
          display:block;
        }

        #bubble {
          right: -4em;
        }

        .flexWrapper {
          margin-top: 2em;
        }
      }

      /*PHONES*/
      @media all and (max-width: 576px) {
        /*mobile*/
        .tablet {
          display:none;
        }

        .mobile {
          display:block;
        }

        .colLeft {
          order: 1;
        }

        .colRight {
          order: 2;
        }

        .colLeft {
          margin-bottom: -1.5em;
        }

        #bubble {
          right: -2em;
        }


      }
    `,
  ],
})
export class AboutComponent {}
