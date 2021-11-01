import React from "react";
import MainImage from "../../assets/images/main-image.png";

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main-wrapper">
                    <div className="main-text">
                        <h2 className="main-text__title">
                            Главная распродажа <span>года</span>
                        </h2>
                        <p className="description main-text__description">
                            Курсы по новой системной психологии
                        </p>
                        <div className="main-text-auth">
                            <span className="subtitle main-text-auth__subtitle">
                                Автор и преподаватель обучающих программ:
                            </span>
                            <h4 className="main-text-auth__name">
                                Жанна Абрамова
                            </h4>
                        </div>

                        <div className="main-text-date">
                            <span className="subtitle main-text-date__subtitle">
                                Дата проведения:
                            </span>
                            <h4 className="main-text-date__title">
                                с 15 октября по 1 ноября
                            </h4>
                        </div>
                    </div>

                    <div className="main-image">
                        <img
                            src={MainImage}
                            alt=""
                            className="main-image__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
