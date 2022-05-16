import React from 'react';

const OrderItem = () => {
    return (
        <>
            <li className="basket-modal__item">
                <div className="basket-modal__wrap-img">
                    <div className="basket-modal__wrap-icons-type">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.858 1.28576C22.3781 0.818415 21.6107 0.82788 21.1434 1.30788C20.676 1.78783 20.6855 2.5552 21.1655 3.02255C21.1694 3.02651 21.5666 3.48753 21.5287 4.36935C21.5119 4.75881 21.396 5.33268 21.0244 6.07379C21.4128 6.28935 21.7727 6.54833 22.0884 6.85772C22.3742 7.13785 22.6204 7.45652 22.8318 7.80237C23.5185 6.66002 23.9055 5.5469 23.9515 4.47279C24.0367 2.49363 22.9788 1.4034 22.858 1.28576Z" fill="#C5CBD1"/>
                            <path d="M18.2745 7.00061C16.6616 7.00061 14.9485 7.80584 14.0138 9.10841C9.22482 15.788 4.37928 16.1306 1.83099 16.1306C1.53961 16.1306 1.27831 16.1259 1.05096 16.1259C0.16441 16.1259 -0.214519 16.1937 0.120998 16.8561C0.915895 18.4271 4.54192 20.3502 8.99593 20.3502C12.5832 20.3502 16.7073 19.1021 20.3191 15.4169C22.1411 13.5585 22.8137 9.83314 20.9561 8.01185C20.2425 7.31247 19.2778 7.00061 18.2745 7.00061Z" fill="#C5CBD1"/>
                            <path d="M3.10876 12.9261C3.01774 11.7465 3.23779 9.07042 6.75387 7.56354C6.75387 7.56354 5.44855 10.7206 7.21653 12.3179C8.49925 11.3168 9.40155 9.68167 9.49412 8.10033C9.76015 3.53888 6.57544 1.13816 4.50781 0.0684926C4.29631 -0.04127 4.0381 -0.00418346 3.86687 0.161644C3.69476 0.32665 3.64816 0.583165 3.74923 0.79873C4.54809 2.49452 5.0857 5.52832 1.66823 9.05946C0.624837 10.1369 1.47503 12.119 3.10876 12.9261Z" fill="#C5CBD1"/>
                        </svg>
                    </div>
                    <img src='/local/static/img/png/Pizza01.png'
                         alt="Итальянская пицца"
                         className="basket-modal__img-pizza"/>
                </div>
                <div className="basket-modal__wrap-text">
                    <span className="basket-modal__title-pizza">Итальянская</span>
                    <span className="basket-modal__size-pizza">30 см</span>
                </div>
                <div className="basket-modal__wrap-count">
                    <button className="basket-modal__minus disabled"></button>
                    <input type="text" className="basket-modal__count" value='1' disabled/>
                    <button className="basket-modal__plus"></button>
                </div>
                <div className="basket-modal__wrap-price">
                    <span className="basket-modal__price">699 руб</span>
                    <button className="basket-modal__remove-item"></button>
                </div>
            </li>
        </>
    );
};

export default OrderItem;