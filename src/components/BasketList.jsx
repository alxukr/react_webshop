import {BasketItem} from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from "../context";

function BasketList() {

    const {
        order = [],
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return <ul className="collection basket-list purple darken-2">
        <li className="collection-item active purple darken-2">Корзина</li>
        {
            order.length ? order.map(item => (
                <BasketItem
                    key={item.id}
                    {...item}
                />
            )) : <li className="collection-item active purple darken-4">Корзина пуста</li>
        }
        <li className="collection-item active purple darken-4">
            Общая стоимость : {totalPrice} грн.
        </li>
        <li className="collection-item purple darken-2">
            <button className="btn purple darken-4">Оформить заказ</button>
        </li>

        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
}

export {BasketList};