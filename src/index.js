import './style.css';
import logo from './assets/ibLogo.png';
import whaIcon from './assets/icons8-whatsapp.svg';
import './renderComponents.js'

document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.querySelector('#logo');
    imgElement.src = logo;
  
  });


  let currentIndex = 0;

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
  
  setInterval(() => changeReview(1), 5000);