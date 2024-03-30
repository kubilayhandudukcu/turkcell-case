import { useState } from 'react';
import { User } from '../Models/UserModel';

const useItems = (initialItems: User[]) => {
  const [items, setItems] = useState<User[]>(initialItems);

  const handleMoveItem = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    const tempOrder = newItems[index].id;
    newItems[index].id = newItems[index - 1].id;
    newItems[index - 1].id = tempOrder;
    [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
    setItems(newItems);
  };

  return { items, setItems, handleMoveItem };
};

export default useItems;
