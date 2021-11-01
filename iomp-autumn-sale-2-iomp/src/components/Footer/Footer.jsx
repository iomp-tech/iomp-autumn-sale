import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-media">
                        <div className="footer-top">
                            <a
                                href={process.env.REACT_APP_IOMP_DOMEN}
                                className="footer-logo__link"
                            >
                                <img
                                    src={`${process.env.REACT_APP_API_IOMP_DOMEN}/public/storage/all/logo-white.svg`}
                                    alt="IOMP"
                                    className="footer-logo__img"
                                />
                            </a>

                            <nav className="footer-nav">
                                <a
                                    href={`${process.env.REACT_APP_IOMP_DOMEN}/shop`}
                                    className="footer-nav__btn"
                                >
                                    Магазин курсов
                                </a>
                                <div className="footer-nav-block">
                                    <a
                                        href={`${process.env.REACT_APP_IOMP_DOMEN}/timetable`}
                                        className="footer-nav__link"
                                    >
                                        Расписание
                                    </a>
                                    <a
                                        href={`${process.env.REACT_APP_IOMP_DOMEN}/teachers`}
                                        className="footer-nav__link"
                                    >
                                        Преподаватели
                                    </a>
                                </div>
                                <div className="footer-nav-block">
                                    <a
                                        href={`${process.env.REACT_APP_IOMP_DOMEN}/magazine`}
                                        className="footer-nav__link"
                                    >
                                        Журнал
                                    </a>
                                    <a
                                        href={`${process.env.REACT_APP_IOMP_DOMEN}/institute`}
                                        className="footer-nav__link"
                                    >
                                        Сведения об образовательной организации
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="footer-middle">
                            <div className="footer-middle-left">
                                <div className="footer-social"></div>

                                <div className="footer-contact">
                                    <p className="footer__adres">
                                        115404, г. Москва, 6-я Радиальная, д.5,
                                        корп.4, этаж 1, офис 17.
                                    </p>

                                    <a
                                        href={`mailto:info@iomp.ru`}
                                        className="footer__link footer-middle__link"
                                    >
                                        info@iomp.ru
                                    </a>
                                </div>
                            </div>
                            <div className="footer-middle-right"></div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                            <span>
                                ООО «ИСП» ОГРН 1197746615736 <br />
                            </span>

                            <span>
                                ИНН 7727431274
                                <br />
                            </span>

                            <span>
                                КПП 772401001
                                <br />
                            </span>
                        </div>
                        <div className="footer-bottom-right">
                            <p className="footer__comp">
                                © IOMP {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                    <div className="footer-bottom-bottom">
                        <div className="footer-bottom-bottom-link">
                            <a
                                href={`${process.env.REACT_APP_IOMP_DOMEN}/privacy`}
                                className="footer-bottom-bottom__link"
                            >
                                Политика конфиденциальности
                            </a>
                            <a
                                href={`${process.env.REACT_APP_IOMP_DOMEN}/public-offer`}
                                className="footer-bottom-bottom__link"
                            >
                                Публичная оферта
                            </a>
                        </div>

                        {/* Hi, we are Nagibin's studio */}
                        <div className="nagibinstudio">
                            <a href="https://nagibinstudio.ru">
                                <img
                                    src="https://api.nagibinstudio.ru:5000/all/nagibin-develompent.svg"
                                    alt=""
                                    className="nagibinstudio__img"
                                    style={{
                                        width: "300px",
                                        userSelect: "none",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
