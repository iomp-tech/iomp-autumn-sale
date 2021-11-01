import React from "react";

const GoodsClosed = () => {
    const goodsClosedBlock = [
        {
            title: "Закрытый урок «Аборты. Выкидыши. Замершая беременность»",
            oldPrice: "1 500",
            price: "1 050",
            btnLink:
                "https://shop.iomp.ru/?r=ordering/cart/as1&id=310&clean=true&lg=ru ",
        }
    ];

    return (
        <section className="goods-closed">
            <div className="container">
                <div className="goods-closed-wrapper">
                    <h2 className="title__mb goods-closed__title">
                        Закрытые уроки по системной психологии, на которые
                        распространяется акция:
                    </h2>
                    <div className="goods-closed-items-wrapper">
                        {goodsClosedBlock.map((item, index) => (
                            <div
                                className="goods-closed-item"
                                key={`goods-closed-item-${index}`}
                            >
                                <h3 className="goods-closed-item__title">
                                    {item.title}
                                </h3>
                                <div className="goods-closed-item-price">
                                    <span className="subtitle goods-closed-item-price__subtitle">
                                        Цена:
                                    </span>
                                    <p className="goods-closed-item-price__subprice">
                                        {item.oldPrice}₽
                                    </p>
                                    <h4 className="goods-closed-item-price__price">
                                        {item.price}₽
                                    </h4>
                                </div>

                                <a
                                    href={item.btnLink}
                                    className="btn-regular_color goods-closed-item__btn"
                                >
                                    Подробнее
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoodsClosed;
