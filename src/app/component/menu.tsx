import React from 'react';
import { MenuItem } from '../model/menu-item';

type MenuProps = {
    items:MenuItem[]
}

const Menu: React.FC<MenuProps> = ({items}) => {
    return (
        <ul className='flex flex-row gap-[20px]'>
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