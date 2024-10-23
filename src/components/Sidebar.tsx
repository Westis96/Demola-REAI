import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
                    isActive ? 'bg-indigo-50 text-indigo-600' : ''
                  }`
                }
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;