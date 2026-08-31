const card = document.getElementById("card");
const nextButton = document.getElementById("nextButton");
const dots = document.querySelectorAll(".dot");

let step = 0;

const screens = [
  {
    smallTitle: "A LITTLE SOMETHING",
    title: "Hey, Idalina 💕",
    message:
      "I made you something small... because apparently just asking normally felt a little too boring.",
    button: "Okayyy 👀"
  },

  {
    smallTitle: "CONFESSION #1",
    title: "You’ve become one of my favorite people.",
    message:
      "I really like talking to you. I like being around you. And somewhere along the way, you started becoming a little more special to me.",
    button: "Keep going 😌"
  },

  {
    smallTitle: "CONFESSION #2",
    title: "I like where this is going.",
    message:
      "And instead of pretending to be mysterious or acting too cool about it... I figured I should just say what I actually want.",
    button: "Hmm... what do you want? 👀"
  },

  {
    smallTitle: "ONE IMPORTANT QUESTION",
    title: "Idalina...",
    message:
      "There’s one thing I’d really like to make official.",
    button: "Ask me 💗"
  }
];

function updateScreen() {
  card.innerHTML = `
    <p class="small-title">${screens[step].smallTitle}</p>

    <h1>${screens[step].title}</h1>

    <p class="message">
      ${screens[step].message}
    </p>

    <button id="nextButton">
      ${screens[step].button}
    </button>
  `;

  dots.forEach((dot, index) => {
    dot.classList.remove("active");

    if (index === step) {
      dot.classList.add("active");
    }
  });

  const newButton = document.getElementById("nextButton");
  const title = card.querySelector("h1");

if (step === 0) {
  typeWriter(title, "Hey, Idalina 💕", 80);
}

  newButton.addEventListener("click", function(event) {
  miniHeartBurst(event);
  nextScreen();
});
}

function nextScreen() {
  card.classList.add("fade-out");

  setTimeout(() => {
    card.classList.remove("fade-out");

    if (step < screens.length - 1) {
      step++;
      updateScreen();
    } else {
      showQuestion();
    }

    card.classList.add("fade-in");

    setTimeout(() => {
      card.classList.remove("fade-in");
    }, 400);

  }, 250);
}

function showQuestion() {
  card.innerHTML = `
    <p class="small-title final-label">
  OKAY... HERE IT IS
</p>

    <div class="big-heart question-heart">
  ❤️
</div>

    <h1>Idalina, will you be my girlfriend?</h1>

    <p class="message">
      I promise this website was only slightly more dramatic than necessary.
    </p>

    <div class="answer-buttons">

      <button id="yesButton">
        YES 💕
      </button>

      <button id="thinkButton">
        Let me think 🤨
      </button>

    </div>

    <p id="teaseMessage"></p>
  `;

  dots.forEach((dot, index) => {
    dot.classList.remove("active");

    if (index === 4) {
      dot.classList.add("active");
    }
  });

  setupQuestionButtons();
}

nextButton.addEventListener("click", function(event) {
  miniHeartBurst(event);
  nextScreen();
});
function setupQuestionButtons() {
  const yesButton = document.getElementById("yesButton");
  const thinkButton = document.getElementById("thinkButton");
  const teaseMessage = document.getElementById("teaseMessage");

  let attempts = 0;
  let yesScale = 1;

  const messages = [
    "Oh? You thought that button worked? 😭",
    "Interesting choice, Idalina 😂",
    "That button seems a little shy 👀",
    "I think the website has already decided 😌",
    "Maybe try the other button 💕"
  ];

  function moveButton() {
    attempts++;
    yesScale += 0.08;

yesButton.style.transform =
  `scale(${yesScale})`;

    const isMobile =
  window.innerWidth <= 600;

const xRange =
  isMobile ? 90 : 220;

const yRange =
  isMobile ? 70 : 140;

const x =
  Math.random() * xRange -
  xRange / 2;

const y =
  Math.random() * yRange -
  yRange / 2;

thinkButton.style.transform =
  `translate(${x}px, ${y}px)`;

    teaseMessage.textContent =
      messages[Math.min(attempts - 1, messages.length - 1)];
  }

  thinkButton.addEventListener("mouseenter", moveButton);

  thinkButton.addEventListener("click", moveButton);

  thinkButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveButton();
  });

  yesButton.addEventListener("click", showCelebration);
}

function showCelebration() {
  card.innerHTML = `
    <div class="celebration">
      🎉 💕 ✨ ❤️ 🥳
    </div>

    <p class="small-title">
      OFFICIALLY OFFICIAL
    </p>

    <h1>Yessss 😌❤️</h1>

    <p class="message">
      Good choice, girlfriend.
    </p>

    <p class="message">
      You officially made this little website worth it.
    </p>

    <div class="big-heart">
      💖
    </div>

    <p class="final-message">
      Now come collect your boyfriend 😭
    </p>
  `;

  createConfetti();
}

function createConfetti() {
  const emojis = [
    "💗",
    "💕",
    "💖",
    "❤️",
    "✨",
    "🌸",
    "🎉"
  ];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.animationDuration =
      2 + Math.random() * 3 + "s";

    confetti.style.fontSize =
      18 + Math.random() * 20 + "px";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
function createFloatingHearts() {
  const heartContainer =
    document.getElementById("floatingHearts");

  const hearts = [
    "💕",
    "💗",
    "💖",
    "✨",
    "🌸"
  ];

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      15 + Math.random() * 20 + "px";

    heart.style.animationDuration =
      7 + Math.random() * 7 + "s";

    heart.style.animationDelay =
      Math.random() * 8 + "s";

    heartContainer.appendChild(heart);
  }
}

createFloatingHearts();
function typeWriter(element, text, speed = 70) {
  element.textContent = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;

      setTimeout(type, speed);
    }
  }

  type();
}
function miniHeartBurst(event) {
  const hearts = ["💗", "💕", "✨"];

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");

    heart.classList.add("mini-heart");

    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    const x =
      Math.random() * 160 - 80;

    const y =
      Math.random() * 160 - 80;

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 900);
  }
}
const envelopeScreen =
  document.getElementById("envelopeScreen");

const mainWebsite =
  document.getElementById("mainWebsite");

const openLetterButton =
  document.getElementById("openLetterButton");

const envelopeIcon =
  document.querySelector(".envelope-icon");


function openLetter() {

  envelopeScreen.classList.add("opening");

  setTimeout(() => {

    envelopeScreen.style.display = "none";

    mainWebsite.classList.remove("hidden");

    mainWebsite.style.animation =
      "appear 0.8s ease";

  }, 650);

}


openLetterButton.addEventListener(
  "click",
  openLetter
);


envelopeIcon.addEventListener(
  "click",
  openLetter
);