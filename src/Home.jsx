

import React from "react";
import Navbar from "./Navbar";
import Header from "./Header_inners";
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const locales = {
    en: { title: 'En' },
    es: { title: 'Es' },
};



function Home() {
    const { t, i18n } = useTranslation();

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);


    });

    const name = {
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: false,
        asNavFor: '.slider-nav',
        swipeToSlide: true,
        arrows: false
    };
    const item = {
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
        arrows: false,
    };


    return (
        <>

            <header class="header" id="header">
                <div class="container">
                    <Header />
                </div>
                <div class="header_about">
                    <h1 class="title">
                        {t('main.htitle')}
                    </h1>
                    <p class="header_about_text">
                        {t('main.about_text')}
                    </p>
                    
                    <Navbar />
                </div>

            </header>

            <main class="main">
                <div class="container">
                    <ul class="main_sety flex items-center">
                        <li class="main_sety_iem flex items-center">
                            <a href="">
                                <img src="img/sety.svg" alt="" />

                            </a>
                            <p>3.7 M</p>
                        </li>
                        <li class="main_sety_iem flex items-center">
                            <a href="">
                                <img src="img/sety2.svg" alt="" />
                            </a>
                            <p>2.4 M</p>
                        </li>
                        <li class="main_sety_iem flex items-center">
                            <a href="">
                                <img src="img/sety3.svg" alt="" />
                            </a>
                            <p>3.7 M</p>
                        </li>
                        <li class="main_sety_iem flex items-center">
                            <a href="">
                                <img src="img/sety4.svg" alt="" />
                            </a>
                            <p>2.4 M</p>
                        </li>
                    </ul>

                    <ul class="cart flex  items-center">
                        <li class="cart_item">
                            <div class="cart_fon"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/cart.jpg' }}>
                                <div class="cart_fon_name flex">
                                    <p class="cart_fon_name_p flex">{t('main.Aenean')}</p>
                                    <p class="cart_fon_name_p flex">{t('main.Aliquam')}</p>
                                </div>
                                <img class="cart_fon_img" src="img/cart_i.svg" alt="" />
                            </div>
                            <h2 class="cart_title">{t('main.ct')}</h2>
                            <div class="cart_Person flex items-center">
                                <div class="cart_person_n flex items-center">
                                    <img class="cart_person_img" src="img/person.png" alt="" />
                                    <p class="cart_person_n flex items-centerame">Joanna Wellick</p>
                                </div>
                                <div class="cart_polos"></div>
                                <time class="cart_time" datetime="2018-06-28">June 28, 2018</time>
                                <div class="cart_Person_podpiska flex items-center">
                                    <div class="cart_Person_podpiska_S flex  items-center">
                                        <img src="img/marker.svg" alt="" />
                                    </div>
                                    <img class="cart_Person_podpiska_img" src="img/podp.svg" alt="" />
                                    <p class="cart_Person_podpiska_texrt">1K shares</p>
                                </div>
                            </div>
                            <p class="cart_text">
                                {t('main.cart_text')}
                            </p>
                            <a class="cart_link" href="">{t('main.post')}</a>
                        </li>

                        <li class="cart_item">
                            <div class="cart_fon"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/cart2.jpg' }}>
                                <div class="cart_fon_name flex">
                                    <p class="cart_fon_name_p flex">{t('main.Aenean')}</p>
                                    <p class="cart_fon_name_p flex">{t('main.Aliquam')}</p>
                                </div>
                                <img class="cart_fon_img" src="img/cart_i2.svg" alt="" />
                            </div>
                            <h2 class="cart_title">{t('main.ct')}</h2>
                            <div class="cart_Person flex items-center">
                                <div class="cart_person_n flex items-center">
                                    <img class="cart_person_img" src="img/person.png" alt="" />
                                    <p class="cart_person_n flex items-centerame">Joanna Wellick</p>
                                </div>
                                <div class="cart_polos"></div>
                                <time class="cart_time" datetime="2018-06-28">June 28, 2018</time>
                                <div class="cart_Person_podpiska flex items-center">
                                    <div class="cart_Person_podpiska_S flex  items-center">
                                        <img src="img/marker.svg" alt="" />
                                    </div>
                                    <img class="cart_Person_podpiska_img" src="img/podp.svg" alt="" />
                                    <p class="cart_Person_podpiska_texrt">1K shares</p>
                                </div>
                            </div>
                            <p class="cart_text">
                                {t('main.cart_text')}
                            </p>
                            <a class="cart_link" href="">{t('main.post')}</a>
                        </li>

                        <li class="cart_item">
                            <div class="cart_fon"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/cart3.jpg' }}
                            >
                                <div class="cart_fon_name flex">
                                    <p class="cart_fon_name_p flex">{t('main.Aenean')}</p>
                                    <p class="cart_fon_name_p flex">{t('main.Aliquam')}</p>
                                </div>
                                <img class="cart_fon_img" src="img/cart_i.svg" alt="" />
                            </div>
                            <h2 class="cart_title">{t('main.ct')}</h2>
                            <div class="cart_Person flex items-center">
                                <div class="cart_person_n flex items-center">
                                    <img class="cart_person_img" src="img/person.png" alt="" />
                                    <p class="cart_person_n flex items-centerame">Joanna Wellick</p>
                                </div>
                                <div class="cart_polos"></div>
                                <time class="cart_time" datetime="2018-06-28">June 28, 2018</time>
                                <div class="cart_Person_podpiska flex items-center">
                                    <div class="cart_Person_podpiska_S flex  items-center">
                                        <img src="img/marker.svg" alt="" />
                                    </div>
                                    <img class="cart_Person_podpiska_img" src="img/podp.svg" alt="" />
                                    <p class="cart_Person_podpiska_texrt">1K shares</p>
                                </div>
                            </div>
                            <p class="cart_text">
                                {t('main.cart_text')}
                            </p>
                            <a class="cart_link" href="">{t('main.post')}</a>
                        </li>
                    </ul>

                    <div class="foto">
                        <div class="foto_inner">
                            <p class="foto_travel">{t('main.TRAVEL')}</p>
                            <h1 class="foto_title title">
                            {t('main.foto_title')}
                                </h1>
                            <p class="foto_info">
                            {t('main.foto_info')}</p>
                            <button class="foto_btn">
                            {t('main.foto_btn')}
                                </button>
                        </div>
                    </div>
                    <section class="top">
                        <h1 class="top_title">{t('main.top')}</h1>
                        <p class="top_text">{t('main.top_text')}</p>
                        <ul class="top_list flex justify-between items-center">
                            <li class="top_item flex  items-center"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/top1.jpg' }}>
                                <a class="top_link" href="">{t('main.top_link')}</a>
                            </li>
                            <li class="top_item flex  items-center"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/top2.jpg' }}>
                                <a class="top_link" href="">{t('main.top_link')}</a>
                            </li>
                            <li class="top_item flex  items-center"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/top3.jpg' }}>
                                <a class="top_link" href="">{t('main.top_link')}</a>
                            </li>
                            <li class="top_item flex  items-center"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/top4.jpg' }}>
                                <a class="top_link" href="">{t('main.top_link')}</a>
                            </li>
                            <li class="top_item flex  items-center"
                                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/top5.jpg' }}>
                                <a class="top_link" href="">{t('main.top_link')}</a>
                            </li>
                        </ul>
                    </section>

                    <div class="gallery">
                        <ul class="galllery_list">
                            <Slider {...name}
                                asNavFor={nav2}
                                ref={(slider) => setSlider1(slider)}
                            >

                                <li class="gallery_item">{t('main.Category')}</li>
                                <li class="gallery_item">{t('main.Category')}</li>
                                <li class="gallery_item">{t('main.Category')}</li>
                                <li class="gallery_item">{t('main.Category')}</li>
                                <li class="gallery_item">{t('main.Category')}</li>
                                <li class="gallery_item">{t('main.Category')}</li>
                            </Slider>
                        </ul>



                        <ul class="galllery_slick">
                            <Slider {...item}
                                asNavFor={nav1}
                                ref={(slider) => setSlider2(slider)}
                            >
                                <li class="galllery_slick_item">
                                    <ul class="gallery_list_left">
                                        <li class="gallery_item_left">
                                            <img class="gallery_foto" src="img/gallery1.jpg" alt="" />
                                           <p class="gallery_first_time">{t('main.first_time')}</p>

                                            <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                            <p class="gallery_text">{t('main.galley_text')}</p>
                                            <a class="gallery_link" href="">{t('main.post')}</a>
                                            
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery2.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery3.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery4.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery5.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
                                    <div class="gallery_right">
                                        <p class="gallery_read">Manga reads</p>
                                        <ul class="gallery_right_list flex flex-col">
                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery6.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery7.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery8.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>


                                <li class="galllery_slick_item">
                                    <ul class="gallery_list_left">
                                        <li class="gallery_item_left">
                                            <img class="gallery_foto" src="img/gallery1.jpg" alt="" />
                                           <p class="gallery_first_time">{t('main.first_time')}</p>

                                            <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                            <p class="gallery_text">{t('main.galley_text')}</p>
                                            <a class="gallery_link" href="">{t('main.post')}</a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery2.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery3.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery4.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery5.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
                                    <div class="gallery_right">
                                        <p class="gallery_read">Manga reads</p>
                                        <ul class="gallery_right_list flex flex-col">
                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery6.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery7.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery8.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>



                                <li class="galllery_slick_item">
                                    <ul class="gallery_list_left">
                                        <li class="gallery_item_left">
                                            <img class="gallery_foto" src="img/gallery1.jpg" alt="" />
                                           <p class="gallery_first_time">{t('main.first_time')}</p>

                                            <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                            <p class="gallery_text">{t('main.galley_text')}</p>
                                            <a class="gallery_link" href="">{t('main.post')}</a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery2.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery3.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery4.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery5.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
                                    <div class="gallery_right">
                                        <p class="gallery_read">Manga reads</p>
                                        <ul class="gallery_right_list flex flex-col">
                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery6.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery7.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery8.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>



                                <li class="galllery_slick_item">
                                    <ul class="gallery_list_left">
                                        <li class="gallery_item_left">
                                            <img class="gallery_foto" src="img/gallery1.jpg" alt="" />
                                           <p class="gallery_first_time">{t('main.first_time')}</p>

                                            <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                            <p class="gallery_text">{t('main.galley_text')}</p>
                                            <a class="gallery_link" href="">{t('main.post')}</a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery2.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery3.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery4.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery5.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
                                    <div class="gallery_right">
                                        <p class="gallery_read">Manga reads</p>
                                        <ul class="gallery_right_list flex flex-col">
                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery6.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery7.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery8.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>



                                <li class="galllery_slick_item">
                                    <ul class="gallery_list_left">
                                        <li class="gallery_item_left">
                                            <img class="gallery_foto" src="img/gallery1.jpg" alt="" />
                                           <p class="gallery_first_time">{t('main.first_time')}</p>

                                            <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                            <p class="gallery_text">{t('main.galley_text')}</p>
                                            <a class="gallery_link" href="">{t('main.post')}</a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery2.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery3.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery4.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery5.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
                                    <div class="gallery_right">
                                        <p class="gallery_read">Manga reads</p>
                                        <ul class="gallery_right_list flex flex-col">
                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery6.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery7.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery8.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>



                                <li class="galllery_slick_item">
                                    <ul class="gallery_list_left">
                                        <li class="gallery_item_left">
                                            <img class="gallery_foto" src="img/gallery1.jpg" alt="" />
                                           <p class="gallery_first_time">{t('main.first_time')}</p>

                                            <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                            <p class="gallery_text">{t('main.galley_text')}</p>
                                            <a class="gallery_link" href="">{t('main.post')}</a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery2.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery3.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery4.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="gallery_item_left">
                                            <a class="flex" href="">
                                                <img class="gallery_left_foto" src="img/gallery5.jpg" alt="" />
                                                <div class="gallery_info_L">
                                                    <h2 class="galley_h2">{t('main.Akame')}
                                                        </h2>
                                                    <time class="gallery_time_left" datetime="2021-03-21">{t('main.data')}</time>
                                                </div>
                                            </a>
                                        </li>



                                    </ul>
                                    <div class="gallery_right">
                                        <p class="gallery_read">Manga reads</p>
                                        <ul class="gallery_right_list flex flex-col">
                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery6.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery7.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="gallery_right_item">
                                                <a class="flex" href="">
                                                    <img class="gallery_right_foto" src="img/gallery8.jpg" alt="" />
                                                    <div class="gallery_info">
                                                        <h2 class="galley_h2">{t('main.galley_h2')}</h2>
                                                        <time class="gallery_time_right" datetime="2021-03-21">{t('main.data')}</time>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                            </Slider>
                        </ul>


                    </div>
                </div>
            </main>




        </>
    );
};


// };



export default Home;
