import {useContext} from "react";
import {ShopContext} from "../context";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity
    } = props;

    const {
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = useContext(ShopContext);

    return <li className="collection-item purple darken-4 white-text text-lighten-4">
        {name}
        <i className="material-icons basket-quantity-change" onClick={() => decQuantity(id)} style={{marginInline: '1rem'}}>remove</i>
        {quantity}
        <i className="material-icons basket-quantity-change" onClick={() => incQuantity(id)} style={{marginInline: '1rem'}}>add</i>
        = {price * quantity} грн.
        <span className="secondary-content" onClick={() => removeFromBasket(id)}>
            <i className="material-icons basket-delete white-text">close</i>
        </span>
    </li>;
}

export {BasketItem};