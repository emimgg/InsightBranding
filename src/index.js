import './style.css';
import logo from './assets/ibLogo.png';
import whaIcon from './assets/icons8-whatsapp.svg';
import './renderComponents.js';
import './forms.js';
import './sendEmail.js';
import iso1 from './assets/isoCertIcon1.png';
import iso2 from './assets/pngwing.com.png';
import teamIcon from './assets/teamIcon.png';
import heroImg from './assets/heroimg.png';
import brain from './assets/brain.png';
import ads from './assets/ads.png';
import consultory from './assets/consultory.png';
import consumer from './assets/consumer.png';
import product from './assets/product.png';
import starsImg from './assets/5star.png';

document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.querySelector('#logo');
    imgElement.src = logo;
    
    const isoImg1 = document.querySelector('#iso1');
    const isoImg2 = document.querySelector('#iso2');
    const heroImage = document.querySelector('#hero-img');
    const brainEle = document.querySelector('#brain');
    const adsEle = document.querySelector('#ads');
    const consumerEle = document.querySelector('#consumer');
    const productsEle = document.querySelector('#products');
    const consultoryEle = document.querySelector('#consultory');
    const starsContainers = document.querySelectorAll(".stars");

    isoImg1.src = iso1;
    isoImg2.src = iso2;
    heroImage.src = heroImg;
    brainEle.src = brain;
    consumerEle.src = consumer;
    productsEle.src = product;
    adsEle.src = ads;
    consultoryEle.src = consultory;

    starsContainers.forEach(star => {
        star.src = starsImg;
    });

    const teamIconElem = document.querySelector('#teamIconImg');

    teamIconElem.src = teamIcon;
  });


document.getElementById('scrollToTeam').addEventListener('click', function() {
    document.querySelector('.team').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToHero').addEventListener('click', function() {
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
});