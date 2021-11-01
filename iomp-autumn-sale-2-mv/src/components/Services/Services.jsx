import React from "react";

const Services = () => {
    const blocks = [
        {
            title: "Расширить свои знания",
            description:
                "Расширьте свои знания в области практической психологии",
        },
        {
            title: "Исполнить мечту",
            description:
                "Давно мечтаете стать психологом или хотите расширить инструментарий для личного пользования",
        },
        {
            title: "Решить проблемы",
            description:
                "Хотите решить свои проблемы в различных сферах жизни, отношениях, финансах, предназначение",
        },
        {
            title: "Повысить квалификацию",
            description:
                "Помогаете другим людям и планируете повысить свою квалификацию в качестве психолога",
        },
    ];

    return (
        <section className="services">
            <div className="container">
                <div className="services-wrapper">
                    <div className="circle-bold services-circle1"></div>
                    <div className="circle-bold services-circle2"></div>

                    <h2 className="title__mb services__title">
                        Эта распродажа для тех, кто хочет:
                    </h2>
                    <div className="services-blocks-wrapper">
                        {blocks.map((item, index) => (
                            <div
                                className="services-block"
                                key={`services-block-${index}`}
                            >
                                <span className="services-block__number">
                                    {index + 1}
                                </span>
                                <h3 className="services-block__title">
                                    {item.title}
                                </h3>
                                <p className="services-block__description">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="services-btn">
                        <a
                            href="/#goods-stock"
                            className="btn-regular_color services-btn__btn"
                        >
                            Мне это нужно
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
