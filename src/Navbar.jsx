// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Navbar = () => {
      const  { t, i18n } = useTranslation();
    return (
        <>
            <div
                className="nav"
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "1rem",
                    color: "green",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                }}
            >
                 <Link to="/about"><button class="header_about_btn
                 flex justify-center items-center
                 ">{t('main.about_btn')}</button></Link>
            </div>
        </>
    );
};

export default Navbar;
