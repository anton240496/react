
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';




import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";


const locales = {
  en: { title: 'En' },
  es: { title: 'Es' },
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function App() {
  const  { t, i18n } = useTranslation();



  // const handleToggle = () => {
  //   setActive(!isActive);
  // };
  // return (
  //   <div className={`app ${isActive ? "danger" : ""}`}>
  //     <h1>Hello react</h1>
  //     <button onClick={handleToggle}>Toggle class</button>
  //   </div>
  // );

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>

  );
}

export default function WrappedApp() {
  return (

    <Suspense fallback="...loading">
      <App />
      <footer class="footer">
        <div class="container">
          <div class="footer_inner flex justify-between items-center">
            <p class="about">Designed & Developed by XP DESIGN</p>
            <ul class="footer_sety flex items-center">
              <li class="footer_sety_item">
                <a href="">
                  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.065 17.9972V9.80115H8.83L9.241 6.59215H6.065V4.54815C6.065 3.62215 6.323 2.98815 7.652 2.98815H9.336V0.12715C8.517 0.03915 7.693 -0.00285004 6.869 0.000149963C4.425 0.000149963 2.747 1.49215 2.747 4.23115V6.58615H0V9.79515H2.753V17.9972H6.065Z" fill="white" />
                  </svg>

                  <p>29</p>
                </a>
              </li>
              <li class="footer_sety_item">
                <a href="">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8359 0H4.83594C2.36116 0 0.335938 2.02432 0.335938 4.5V13.5C0.335938 15.9748 2.36116 18 4.83594 18H13.8359C16.3107 18 18.3359 15.9748 18.3359 13.5V4.5C18.3359 2.02432 16.3107 0 13.8359 0ZM9.33594 12.7499C7.26459 12.7499 5.58586 11.0704 5.58586 9C5.58586 6.92865 7.26459 5.24993 9.33594 5.24993C11.4064 5.24993 13.086 6.92865 13.086 9C13.086 11.0704 11.4064 12.7499 9.33594 12.7499ZM13.086 4.12492C13.086 4.74615 13.5891 5.24992 14.211 5.24992C14.8329 5.24992 15.336 4.74615 15.336 4.12492C15.336 3.5037 14.8329 2.99992 14.211 2.99992C13.5891 2.99992 13.086 3.5037 13.086 4.12492Z" fill="white" />
                  </svg>
                  <p>70k</p>
                </a>
              </li>
              <li class="footer_sety_item">
                <a href="">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9689 3.978C17.9819 4.153 17.9819 4.327 17.9819 4.501C17.9819 9.826 13.9289 15.962 6.52194 15.962C4.23994 15.962 2.11994 15.301 0.335938 14.153C0.659938 14.19 0.971937 14.203 1.30894 14.203C3.19194 14.203 4.92494 13.567 6.30994 12.482C4.53894 12.445 3.05494 11.285 2.54294 9.689C2.79194 9.726 3.04194 9.751 3.30394 9.751C3.66494 9.751 4.02794 9.701 4.36494 9.614C2.51794 9.24 1.13494 7.619 1.13494 5.661V5.611C1.67194 5.91 2.29494 6.097 2.95494 6.122C1.86994 5.4 1.15894 4.165 1.15894 2.768C1.15894 2.02 1.35794 1.334 1.70694 0.736C3.68994 3.179 6.67094 4.776 10.0129 4.951C9.95094 4.651 9.91294 4.34 9.91294 4.028C9.91294 1.808 11.7089 0 13.9409 0C15.1009 0 16.1479 0.486 16.8839 1.272C17.7939 1.097 18.6659 0.76 19.4399 0.299C19.1409 1.234 18.5039 2.02 17.6689 2.519C18.4799 2.431 19.2659 2.207 19.9879 1.895C19.4399 2.693 18.7549 3.404 17.9689 3.978Z" fill="white" />
                  </svg>

                  <p>40</p>
                </a>
              </li>
              <li class="footer_sety_item">
                <a href="">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9551 0.546524C21.9168 0.671826 22.836 1.60713 22.9529 2.58254C23.367 6.15726 23.367 9.62366 22.9529 13.1973C22.836 14.1727 21.9168 15.1091 20.9551 15.2333C15.0907 15.962 9.16001 15.962 3.29728 15.2333C2.33468 15.1088 1.41552 14.1727 1.29858 13.1973C0.884524 9.62338 0.884524 6.15726 1.29858 2.58254C1.41552 1.60713 2.33468 0.671548 3.29728 0.546524C9.16001 -0.182175 15.0904 -0.182175 20.9551 0.546524ZM10.2693 4.17777V11.6031L15.8383 7.8906L10.2693 4.17777Z" fill="white" />
                  </svg>

                  <p>168k</p>
                </a>
              </li>
            </ul>
          </div>
          <a class="arrow_link" href="#header">
            <p class="arrow flex ">&rsaquo;</p>
          </a>
        </div>
      </footer>

    </Suspense>
  );


}

