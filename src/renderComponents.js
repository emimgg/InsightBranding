import lourdes from './assets/6.png';
import milagros from './assets/7.png';
import rocio from './assets/8.png';
import alheli from './assets/9.png';



const cardsData = [
    {
        name: 'Mgtr. Lourdes Arévalos',
        bio: [
            'Psicóloga Clínica, Universidad Columbia (2014)',
            'Maestría en Psicología del Consumidor, Universidad de Palermo',
            'Certificación en Investigación de Mercado y Psicología del Consumidor',
            'Licenciada en Marketing, Univ. Americana (2010)',
        ],
        image: lourdes,
    },
    {
        name: 'Mgtr. Milagros Maqueda',
        bio: [
            'Psicóloga Clínica, Universidad Columbia (2016)',
            'Maestría en Psicología del Consumidor, Universidad de Barcelona',
            'Certificación en Psicología Aplicada a la Innovación de Productos'
        ],
        image: milagros,
    },
    {
        name: 'Mgtr. Rocío Morales',
        bio: [
            'Psicóloga Clínica, Universidad Columbia (2015)',
            'Maestría en Psicología del marketing, Universidad de Buenos Aires',
            'Certificación en Investigación de Mercado y Psicología del Consumidor'
        ],
        image: rocio,
    },
    {
        name: 'Mgtr. Alheli Saifildin',
        bio: ['Psicóloga Clínica, Universidad Columbia (2015)',
            'Maestría en Psicología del Consumidor, Universidad de Palermo',
            'Certificación en Psicología del Consumidor y Estrategias de Marketing'
        ],
        image: alheli,
    },
];

const cardContainer = document.querySelector('.team');
cardsData.forEach(card => {
    const cardElement = document.createElement('article');
    cardElement.classList.add('card');
    
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('avatar-wrapper');

    const imgElement = document.createElement('img');
    imgElement.classList.add('avatar');
    imgElement.src = card.image; 
    imgElement.alt = card.name;

    const memberInfo = document.createElement('div');
    memberInfo.classList.add('member-info');
    
    const nameElement = document.createElement('h3');
    nameElement.classList.add('name');
    nameElement.textContent = card.name;

    const bioList = document.createElement('ul');
    bioList.classList.add('member-bio');
    card.bio.forEach(bioItem => {
        const li = document.createElement('li');
        li.textContent = bioItem;
        bioList.appendChild(li);
    });
    
    imgWrapper.appendChild(imgElement);
    memberInfo.appendChild(nameElement);
    memberInfo.appendChild(bioList);
    cardElement.appendChild(imgWrapper);
    cardElement.appendChild(memberInfo);
    cardContainer.appendChild(cardElement);
});


export const formSuccess = () => {
    const feedbackSection = document.querySelector(".feedback");

    feedbackSection.innerHTML = "";
    feedbackSection.classList.add("success");

    const successText = document.createElement("h1");
    successText.textContent = "Gracias!";

    feedbackSection.appendChild(successText);
}
