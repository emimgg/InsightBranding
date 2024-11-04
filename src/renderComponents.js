import lourdes from './assets/6.png';
import milagros from './assets/7.png';
import rocio from './assets/8.png';
import alheli from './assets/9.png';



const cardsData = [
    {
        name: 'Mgtr. Lourdes Arévalos',
        bio: [
            'Licenciatura en Psicología Clínica, Universidad Columbia, Asunción (2014) ',
            'Especialización en Psicología del Consumidor, Universidad de Palermo, Buenos Aires (2015)',
            'Especialización en Psicología Social, Universidad de Palermo, Buenos Aires (2015)',
            'Licenciada en Marketing, Universidad Americana, Asunción (2010)',
        ],
        role: 'Directora',
        image: lourdes,
    },
    {
        name: 'Mgtr. Milagros Maqueda',
        bio: [
            'Licenciatura en Psicología Clínica, Universidad Columbia, Asunción (2016) ',
            'Maestría en Psicología del Consumidor, Universidad Autónoma de Barcelona, Barcelona (2017)',
            'Certificación en Psicología Aplicada a la Innovación de Productos, Universidad Autónoma de Madrid, Madrid (2018)'
        ],
        role: 'Gerente de Análisis de Psicología del Consumidor',
        image: milagros,
    },
    {
        name: 'Mgtr. Rocío Morales',
        bio: [
            'Licenciatura en Psicología Clínica, Universidad Columbia, Asunción (2015)',
            'Maestría en Psicología del Marketing, Universidad de Palermo, Buenos Aires (2016)',
            'Especialización en Psicología del Color, Universidad de Alcalá, Barcelona (2017)'
        ],
        role: 'Gerente de Estrategia del Consumidor',
        image: rocio,
    },
    {
        name: 'Mgtr. Alheli Saifildin',
        bio: ['Licenciatura en Psicología Clínica, Universidad Columbia, Asuncion (2015)',
            'Maestría en Psicología del Marketing, Universidad de Palermo, Buenos Aires (2016)',
            'Certificación en Psicología del Consumidor y Estrategias de Marketing, Universidad Palermo, Buenos Aires (2016)'
        ],
        role: 'Gerente General',
        image: alheli,
    },
];

const cardContainer = document.querySelector('.cards-wrapper');
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
    
    const nameElement = document.createElement('span');
    nameElement.classList.add('name');
    nameElement.textContent = card.name;

    const roleElement = document.createElement('span');
    roleElement.classList.add('role');
    roleElement.textContent = card.role;

    const bioList = document.createElement('ul');
    bioList.classList.add('member-bio');
    card.bio.forEach(bioItem => {
        const li = document.createElement('li');
        li.textContent = bioItem;
        bioList.appendChild(li);
    });
    
    imgWrapper.appendChild(imgElement);
    memberInfo.appendChild(nameElement);
    memberInfo.appendChild(roleElement);
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



