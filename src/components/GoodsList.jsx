import {GoodsItem} from "./GoodsItem";
import {useContext} from "react";
import {ShopContext} from "../context";

function GoodsList() {
    const {
        goods = []
    } = useContext(ShopContext);

    if (goods.length === 0) {
        return <h3>Ничего не найдено</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem
                key={item.id}
                {...item}
            />
        ))}
    </div>
}

export {GoodsList};