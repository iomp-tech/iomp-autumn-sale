import React from "react";

const HeaderTop = () => {
    return (
        <>
            <div className="header-wrapper-top">
                <div className="header-wrapper-top-phone">
                    <a
                        href="tel:+7 499 229-58-68"
                        className="header-wrapper-top-phone__link"
                    >
                        +7 499 229-58-68
                    </a>

                    <a
                        href="whatsapp://send/?phone=+380 67 733 2112"
                        className="header-wrapper-top-phone__link"
                    >
                        WhatsApp: +380 67 733 2112
                    </a>
                </div>
                <div className="header-wrapper-top-nav">
                    <a
                        href={`${process.env.REACT_APP_IOMP_DOMEN}/institute`}
                        className="header__link"
                        activeClassName="header__link_active"
                    >
                        Сведения об образовательной организации
                    </a>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;
