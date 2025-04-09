import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// $(function(){
//   $('.galllery_list').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       focusOnSelect: true,
//       asNavFor: '.galllery_slick',
//       arrows:false
//       // responsive:[
//       //   {
//       //     breakpoint: 891,
//       //     settings:{
//       //       vertical:false,
//       //       slidesToShow: 3,
//       //       arrows: false,
//       //       dots: true
//       //     }
//       //   },
//       //   {
//       //     breakpoint: 461,
//       //     settings:{
//       //       vertical:false,
//       //       slidesToShow: 1,
//       //       arrows: false,
//       //       dots: true
//       //     }
//       //   },
//       // ]
//     });
//     $('.galllery_slick').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       asNavFor: '.galllery_list',
//       arrows: false,
//     });
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//           e.preventDefault();
  
//           document.querySelector(this.getAttribute('href')).scrollIntoView({
//               behavior: 'smooth'
//           });
//       });
//   });
// });
