import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div id="circle" [class.circleFlyIn]="circleFlyIn"></div>
    <div id="animation" [class.hideText]="hideText">
      <p>>&nbsp;</p>
      <p [class.typing]="typing" id="initText">init portfolio</p>
      <p [class.blinkCaret]="blinkCaret" id="caret">_</p>
    </div>
    <div id="wrapper" [class.displayText]="displayText">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Quicksand:wght@300..700&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <header>
        <div id="name">
          <h1>> Shannon Kueneke<span>_</span></h1>
        </div>

        <nav class="desktop">
          <ul>
            <li>
              <a routerLink="/">Home</a>
            </li>
            <li>
              <a routerLink="/resume">Resume</a>
            </li>
            <li>
              <a routerLink="/about">About</a>
            </li>
            <li>
              <a routerLink="/projects">Projects</a>
            </li>
          </ul>
        </nav>

        <nav class="mobile tablet">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="#4c4c47"
              d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
            />
          </svg>

          <ul>
            <li>
              <a routerLink="/">Home</a>
            </li>
            <li>
              <a routerLink="/resume">Resume</a>
            </li>
            <li>
              <a routerLink="/about">About</a>
            </li>
            <li>
              <a routerLink="/projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>

      <main class="content">
        <router-outlet />
      </main>

      <footer>
        <nav id="footer_siteNav">
          <ul>
            <li>
              <a routerLink="/">Home</a>
            </li>
            <li>
              <a routerLink="/resume">Resume</a>
            </li>
            <li>
              <a routerLink="/about">About</a>
            </li>
            <li>
              <a routerLink="/projects">Projects</a>
            </li>
          </ul>
        </nav>

        <ul id="footer_socialLinks">
          <li>
            <a
              href="https://linkedin.com/in/shannonkueneke"
              target="_blank"
              title="go to linkedin"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                <path
                  fill="#4c4c47ff"
                  d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/slkueneke"
              target="_blank"
              title="go to github"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                <path
                  fill="#4c4c47ff"
                  d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:slkueneke@gmail.com" title="email me">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                <path
                  fill="#4c4c47ff"
                  d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  `,
  styles: [
    `
      /*everything hidden initially*/
      #wrapper {
        opacity: 0;
        margin: 0 auto;
        max-width: 80%;
      }

      #animation {
        width: 100%;
        max-width: 393px;
        margin: 0 auto;
        display: flex;
        position: fixed;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
      }

      #animation p {
        font-family: 'Google Sans Code', monospace;
      }

      #initText {
        /*add class typing to animate*/
        overflow: hidden;
        white-space: nowrap;
        letter-spacing: 0.15em;
        width: 0;
        font-size: 2em;
      }

      #animation p {
        font-size: 2em;
      }

      #circle {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #a8a892;
        width: 100vw;
        height: 100vh;
        max-width: 650px;
        max-height: 555px;
        z-index: -1;
        border-radius: 0 0 100% 0;

        transform: translate(-100%);
      }

      /*navs*/
      header,
      footer,
      header nav,
      footer nav,
      header ul,
      footer ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      footer nav ul {
        justify-content: flex-start;
      }

      header ul,
      footer ul {
        list-style: none;
      }

      header li:not(:last-child),
      footer li:not(:last-child) {
        margin: 0 2em 0 0;
      }

      header nav li,
      footer nav li {
        font-family: 'Google Sans Code', monospace;
        align-self: center;
      }

      header nav li a,
      footer nav li a {
        color: #4c4c47ff;
      }

      header nav li a.active {
        font-weight: bold;
        color: #1b1b1b;
      }

      header nav li {
        font-size: 1.2em;
      }

      footer nav li {
        font-family: 'Quicksand', sans-serif;
      }

      footer svg {
        width: 30px;
      }

      footer svg:hover path {
        fill: #a8a892;
      }

      .mobile.tablet {
        display: none;
      }

      h1 {
        font-weight: normal;
        white-space: nowrap;
      }

      /*ANIMATIONS*/
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 335px;
        }
      }
      #initText.typing {
        animation: typing 3s steps(14, start) forwards;
      }

      @keyframes blink-caret {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        40% {
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
        80% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      #caret.blinkCaret {
        animation: blink-caret 3s;
      }

      @keyframes circleFlyIn {
        from {
          transform: translate(-100%);
        }
        to {
          transform: translate(0);
        }
      }
      .circleFlyIn {
        animation: circleFlyIn 1s ease-in-out forwards;
      }

      @keyframes displayText {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      #wrapper.displayText {
        animation: displayText 1s ease-in-out forwards;
      }

      @keyframes hideText {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
          display: none;
        }
      }
      .hideText {
        animation: hideText 0.5s ease-in-out forwards;
      }

      /*MEDIA QUERIES*/
      @media all and (max-width: 1024px) {
        .desktop,
        nav.desktop,
        .desktop ul,
        .desktop ul li {
          display: none;
        }

        /*mobile + tablet*/
        .mobile.tablet {
          display: inline-flex;
        }

        .mobile.tablet svg {
          cursor: pointer;
          width: 40px;
        }

        nav.mobile.tablet ul {
          display:none;
        }

        #wrapper {
          width: 100%;
          max-width: 100%;
        }

        header {
          justify-content: space-between;
          padding: 5px;
        }

        header nav {
          width: fit-content;
        }

        #name {
          padding-left: 10px;
        }

        footer {
          padding: 0 0 10px 20px;
        }
        footer nav ul {
          flex-direction: column;
          margin: 0;
        }

        #footer_socialLinks {
          flex-direction: row;
          margin: 0 1em 0 0;
        }

        #footer_socialLinks li {
          align-self: flex-end;
          margin: 0 1em;
        }

        footer nav li {
          align-self: flex-start;
        }
      }

      @media all and (max-width: 576px) {
        /*mobile*/
        #circle {
          width: 80%;
          height: 40%;
        }

        #name h1 {
          font-size: 1.5em;
          white-space: normal;
        }

        header li:not(:last-child),
        footer li:not(:last-child) {
          margin-right: 1em;
        }

        #animation {
          white-space: normal;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'portfolio';

  typing = false;
  blinkCaret = false;
  circleFlyIn = false;
  displayText = false;
  hideText = false;

  ngOnInit() {
    /*initial load animations*/
    setTimeout(() => {
      this.typing = true;
    }, 2000);

    setTimeout(() => {
      this.blinkCaret = true;
    }, 5000);

    setTimeout(() => {
      this.circleFlyIn = true;
      this.displayText = true;
      this.hideText = true;
    }, 6000);
  }
}
