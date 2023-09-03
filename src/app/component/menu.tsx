import React from 'react';
import { MenuItem } from '../model/menu-item';

type MenuProps = {
    items:MenuItem[]
}

const Menu: React.FC<MenuProps> = ({items}) => {
    return (
        <ul>
            {items.map(item => (
                <li>
                    <a href='{item.url}'>
                    {item.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Menu;