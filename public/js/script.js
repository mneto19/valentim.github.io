const answers_no = [
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
];

const answer_yes = "Sim";

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    const banner = document.getElementById('banner');

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

    const total = answers_no.length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } else {
        alert(answers_no[i]);
        i = 1;
        no_button.innerHTML = answers_no[0];
        yes_button.innerHTML = answer_yes;
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    const banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.getElementsByClassName('buttons')[0].style.display = "none";
    document.getElementsByClassName('message')[0].style.display = "block";
});

function refreshBanner() {
    const banner = document.getElementById('banner');
    const src = banner.src;
    banner.src = '';
    banner.src = src;
}

// Texto fixo em PT-PT
document.getElementById("question-heading").textContent =
    "Queres ser o meu par de São Valentim?";

document.getElementById("success-message").textContent =
    "Yepppie, até já :3";

yes_button.innerHTML = answer_yes;
no_button.innerHTML = answers_no[0];