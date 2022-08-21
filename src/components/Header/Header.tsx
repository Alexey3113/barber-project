import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.svg"
import bgImg from "../../assets/img/bg.png"

import "./header.scss"

export const Header = () => {
    return (
        <header className="header">
            <div className="header__bg">
                <img src={bgImg} alt="backgorund" />
            </div>
            <div className="header__container">
                <div className="header__top">
                    <div className="header__top_left">
                        <nav className="nav-list">
                            <Link to="/" className="nav-list_link">
                                Главная
                            </Link>
                            <Link to="/" className="nav-list_link">
                                Барберы
                            </Link>
                            <Link to="/" className="nav-list_link">
                                Услуги
                            </Link>
                            <Link to="/" className="nav-list_link">
                                Запись
                            </Link>
                        </nav>
                    </div>
                    <div className="header__top_center">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__top_right">
                        <div className="header__top_ight_number">
                            +79999999896
                        </div>
                        <div className="header__top_right_whatsapp"> w </div>
                        <div className="header__top_right_user"> w</div>
                    </div>
                </div>
                <div className="header__bottom">
                    <h2 className="header__bottom_minitltle">
                        Мы делаем классные стрижки и модельные прически!
                    </h2>
                    <h1 className="header__bottom_title">
                        Записывайся - не стеснять!
                    </h1>
                    <button className="header__bottom_btn">Записаться</button>
                </div>
            </div>
        </header>
    )
}
