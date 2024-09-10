import { useState } from "react";
import { MenuItem, OrderItem } from '../types/index';

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, settip] = useState(0)

    const addItem = (item: MenuItem) => {
        // Busca si el ítem ya existe en el pedido
        const itemExist = order.find(orderItem => orderItem.id === item.id);

        if (itemExist) {
            // Si el ítem existe, actualiza su cantidad
            const updatedOrder = order.map(orderItem =>
                orderItem.id === item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            );
            setOrder(updatedOrder);
        } else {
            // Si el ítem no existe, agrégalo con cantidad inicial de 1
            const newItem: OrderItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    };


    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        settip(0)
    }

    return {
        order,
        tip,
        settip,
        addItem,
        removeItem,
        placeOrder
        
    };
}
