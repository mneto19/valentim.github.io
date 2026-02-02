const answers_no = {
    portuguese: [
        "Não",
        "Tens a certeza?",
        "Tens mesmo a certeza??",
        "Tens MESMO MESMO a certeza???",
        "Pensa outra vez?",
        "Não acreditas em segundas oportunidades?",
        "Porque estás a ser tão frio?",
        "Talvez possamos falar sobre isto?",
        "Não vou perguntar outra vez!",
        "Ok, isto já está a magoar-me!",
        "Agora estás só a ser mau!",
        "Porque estás a fazer-me isto?",
        "Por favor, dá-me uma oportunidade!",
        "Estou a implorar que pares!",
        "Ok… vamos começar de novo."
    ],
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore ?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid ?",
        "Peut-être qu’on peut en parler ?",
        "Je ne vais pas demander encore une fois !",
        "D’accord, maintenant ça me fait mal !",
        "Tu es juste méchant !",
        "Pourquoi tu me fais ça ?",
        "Donne-moi une chance, s’il te plaît !",
        "Je te supplie d’arrêter !",
        "D’accord, recommençons."
    ],
    thai: [
        "ไม่อ่ะ",
        "แน่ใจจริงๆหรอคะ?",
        "แน่ใจจริงๆ จริงๆนะคะ?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
        "ลองคิดดูอีกทีหน่อยสิคะ..",
        "ขอโอกาศที่สองทีค่ะ..",
        "อย่าเย็นชาสิคะ กระซิกๆ",
        "ขอร้องนะคะ",
        "น้าาาๆๆๆๆๆ",
        "เราจะร้องไห้เอานะ กระซิกๆ",
        "จะเอางี้ๆจริงหรอคะ",
        "ฮือออออ",
        "ขอโอกาศครั้งที่สองที่ค่ะ!",
        "ขอร้องละค่าาา",
        "โอเคค่ะ.. งั้นเริ่มใหม่ !"
    ]
};

const answers_yes = {
    portuguese: "Sim",
    english: "Yes",
    french: "Oui",
    thai: "เย่ คืนดีกันแล้วน้า"
};

let language = "portuguese"; // Idioma por defeito
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;

    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    let total = answers_no[language].length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    language = selectElement.value;

    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin ?";
    } else if (language === "thai") {
        questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว?";
    } else if (language === "portuguese") {
        questionHeading.textContent = "Queres ser o meu par de São Valentim?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    yes_button.innerHTML = answers_yes[language];

    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Yepppie, até breve :3";
    } else if (language === "thai") {
        successMessage.textContent = "ฮูเร่ คืนดีกันแล้วน้า :3";
    } else if (language === "portuguese") {
        successMessage.textContent = "Yepppie, até já :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}