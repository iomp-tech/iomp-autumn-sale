import React from "react";

import {HeaderModal, HeaderTop} from "../";

const Header = React.memo(() => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <HeaderTop />

                    <div className="header-wrapper">
                        <a href={process.env.REACT_APP_IOMP_DOMEN}>
                            <img
                                src={`${process.env.REACT_APP_API_IOMP_DOMEN}/public/storage/all/logo.svg`}
                                alt="IOMP"
                                className="header-logo__img"
                            />
                        </a>

                        <nav className="header-nav">
                            <a
                                href={`${process.env.REACT_APP_IOMP_DOMEN}/shop`}
                                className="btn-regular_color header__btn"
                            >
                                Магазин курсов
                            </a>

                            <div className="header-menu-hidden">
                                <a
                                    href={`${process.env.REACT_APP_IOMP_DOMEN}/timetable`}
                                    className="header__link"
                                >
                                    Расписание
                                </a>
                                <a
                                    href={`${process.env.REACT_APP_IOMP_DOMEN}/teachers`}
                                    className="header__link"
                                >
                                    Преподаватели
                                </a>
                                <a
                                    href={`${process.env.REACT_APP_IOMP_DOMEN}/magazine`}
                                    className="header__link"
                                >
                                    Журнал
                                </a>
                            </div>

                            <HeaderModal />
                        </nav>

                        <div className="header-right">
                            <a
                                href={`${process.env.REACT_APP_IOMP_DOMEN}/login`}
                                className="header-login"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13.2608 10.6522H0.652174C0.292173 10.6522 0 10.3601 0 10.0001C0 9.64007 0.292173 9.3479 0.652174 9.3479H13.2608C13.6208 9.3479 13.913 9.64007 13.913 10.0001C13.913 10.3601 13.6208 10.6522 13.2608 10.6522Z" />
                                    <path d="M9.78287 14.1303C9.61585 14.1303 9.44899 14.0669 9.32193 13.9391C9.06717 13.6843 9.06717 13.2713 9.32193 13.0164L12.3393 9.9991L9.32193 6.98168C9.06717 6.72692 9.06717 6.31374 9.32193 6.05899C9.57684 5.80423 9.98986 5.80423 10.2446 6.05899L13.7228 9.53736C13.9776 9.79211 13.9776 10.2051 13.7228 10.4599L10.2446 13.9381C10.1168 14.0669 9.9499 14.1303 9.78287 14.1303Z" />
                                    <path d="M10.4345 19.5654C6.47703 19.5654 2.98321 17.1845 1.5319 13.4992C1.39975 13.1653 1.56486 12.7862 1.89971 12.654C2.2336 12.5236 2.61366 12.6862 2.74581 13.0228C3.99889 16.2045 7.01711 18.261 10.4345 18.261C14.9892 18.261 18.6954 14.5548 18.6954 10.0001C18.6954 5.44538 14.9892 1.73916 10.4345 1.73916C7.01711 1.73916 3.99889 3.79568 2.74581 6.97741C2.6127 7.31401 2.2336 7.47657 1.89971 7.34617C1.56486 7.21402 1.39975 6.83491 1.5319 6.50102C2.98321 2.81566 6.47703 0.434814 10.4345 0.434814C15.7084 0.434814 19.9998 4.72617 19.9998 10.0001C19.9998 15.274 15.7084 19.5654 10.4345 19.5654Z" />
                                </svg>

                                <span className="header-login__text">
                                    Войти
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
});

export default Header;
