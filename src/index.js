import './style.css';
import logo from './assets/ibLogo.png';
import whaIcon from './assets/icons8-whatsapp.svg';
import './renderComponents.js';
import './forms.js';
import './sendEmail.js';

document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.querySelector('#logo');
    imgElement.src = logo;
  
  });


  let currentIndex = 0;

  document.addEventListener('DOMContentLoaded', () => {
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');
  
      prevButton.addEventListener('click', () => changeReview(-1));
      nextButton.addEventListener('click', () => changeReview(1));
  
      setInterval(() => changeReview(1), 5000); 
  });
  
  function changeReview(direction) {
      const reviews = document.querySelectorAll('.review-wrapper');
      const totalReviews = reviews.length;
  
      currentIndex += direction;
  
      if (currentIndex < 0) {
          currentIndex = totalReviews - 1;
      } else if (currentIndex >= totalReviews) {
          currentIndex = 0;
      }
  
      const translateX = -currentIndex * 100;
  
      const carousel = document.querySelector('.carousel');
      carousel.style.transform = `translateX(${translateX}%)`;
  }

document.getElementById('scrollToTeam').addEventListener('click', function() {
    document.querySelector('.team').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToHero').addEventListener('click', function() {
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
});