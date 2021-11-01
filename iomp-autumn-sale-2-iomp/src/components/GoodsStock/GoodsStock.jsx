import React from "react";

const GoodsStock = () => {
    const goodsStockBlock = [
        {
            title: "Метафорические ассоциативные карты программа профессиональной переподготовки",
            blocks: [
                {
                    title: "Программа профессиональной переподготовки. Модуль 1",
                    oldPrice: "25 000",
                    price: "12 500",
                },
                {
                    title: "Программа профессиональной переподготовки. Модуль 2",
                    oldPrice: "65 000",
                    price: "40 500",
                },
                {
                    title: "Программа профессиональной переподготовки. Модуль 3",
                    oldPrice: "121 500",
                    price: "80 050",
                },
            ],
            description: "Внесите предоплату 5 000₽ и получите скидку в 30%",
            btnLink:
                "https://shop.iomp.ru/?r=ordering/cart/as1&id=327&clean=true&lg=ru",
        },
        {
            title: "Новая системная психология 2.0",
            blocks: [
                {
                    title: "НСП-2.0 Модуль 1",
                    oldPrice: "25 000",
                    price: "12 500",
                },
                {
                    title: "НСП-2.0 Модуль 2",
                    oldPrice: "65 000",
                    price: "40 500",
                },
                {
                    title: "НСП-2.0 Модуль 3",
                    oldPrice: "121 500",
                    price: "80 050",
                },
            ],
            description: "Внесите предоплату 5 000₽ и получите скидку в 30%",
            btnLink:
                "https://shop.iomp.ru/?r=ordering/cart/as1&id=334&clean=true&lg=ru",
        },
    ];

    return (
        <section className="goods-stock" id="goods-stock">
            <div className="container">
                <div className="goods-stock-wrapper">
                    <span className="subtitle goods-stock__subtitle">
                        Курсы, на которые распространяется акция:
                    </span>

                    <div className="goods-stock-items-wrapper">
                        {goodsStockBlock.map((item, index1) => (
                            <div
                                className="goods-stock-item"
                                key={`goods-stock-item-${index1}`}
                            >
                                <h3 className="title__mb goods-stock-item__title">
                                    {item.title}
                                </h3>
                                <div className="goods-stock-item-blocks-wrapper">
                                    {item.blocks.map((block, index2) => (
                                        <div
                                            className="goods-stock-item-block"
                                            key={`goods-stock-item-${index1}-block-${index2}`}
                                        >
                                            <h4 className="goods-stock-item-block__title">
                                                {block.title}
                                            </h4>
                                            <div className="goods-stock-item-block-price">
                                                <span className="subtitle goods-stock-item-block-price__subtitle">
                                                    Цена:
                                                </span>
                                                <p className="goods-stock-item-block-price__subprice">
                                                    {block.oldPrice}₽
                                                </p>
                                                <h4 className="goods-stock-item-block-price__price">
                                                    {block.price}₽{" "}
                                                    <span>
                                                        с учётом предоплаты
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="goods-stock-item-bottom">
                                    <p className="goods-stock-item-bottom__description">
                                        {item.description}
                                    </p>
                                    <a
                                        href={item.btnLink}
                                        className="btn-bold_color goods-stock-item-bottom__btn"
                                    >
                                        Внести предоплату
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoodsStock;
