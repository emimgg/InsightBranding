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
import starsImg from './assets/stars3.png';
import cstmer1 from './assets/customer1.png';
import cstmer2 from './assets/customer2.png';
import cstmer3 from './assets/customer3.png';

document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.querySelector('#logo');
    imgElement.src = logo;
    imgElement.loading = "lazy"; // Add lazy loading
    const isoImg1 = document.querySelector('#iso1');
    const isoImg2 = document.querySelector('#iso2');
    const heroImage = document.querySelector('#hero-img');
    const brainEle = document.querySelector('#brain');
    const adsEle = document.querySelector('#ads');
    const consumerEle = document.querySelector('#consumer');
    const productsEle = document.querySelector('#products');
    const consultoryEle = document.querySelector('#consultory');
    const starsContainers = document.querySelectorAll(".stars");
    const customer1 = document.querySelector('#customer-1');
    const customer2 = document.querySelector('#customer-2');
    const customer3 = document.querySelector('#customer-3');
    const teamIconElem = document.querySelector('#teamIconImg');

    // Assign sources and enable lazy loading
    isoImg1.src = iso1;
    isoImg1.loading = "lazy";
    isoImg2.src = iso2;
    isoImg2.loading = "lazy";
    heroImage.src = heroImg;
    heroImage.loading = "lazy";
    brainEle.src = brain;
    brainEle.loading = "lazy";
    adsEle.src = ads;
    adsEle.loading = "lazy";
    consumerEle.src = consumer;
    consumerEle.loading = "lazy";
    productsEle.src = product;
    productsEle.loading = "lazy";
    consultoryEle.src = consultory;
    consultoryEle.loading = "lazy";
    
    customer1.src = cstmer1;
    customer1.loading = "lazy";
    customer2.src = cstmer2;
    customer2.loading = "lazy";
    customer3.src = cstmer3;
    customer3.loading = "lazy";

    starsContainers.forEach(star => {
        star.src = starsImg;
        star.loading = "lazy";
    });

    teamIconElem.src = teamIcon;
    teamIconElem.loading = "lazy";
});

document.getElementById('scrollToTeam').addEventListener('click', function() {
    document.querySelector('.team').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToHero').addEventListener('click', function() {
    document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth' });
});