import React from 'react';

import './SideBar.css';

function Item({ active }) {
  return (
    <li className={`sidebar-item ${active ? 'active' : ''}`} />
  );
}

export default function SideBar({ sections }) {
  const items = sections.map((section) => <Item key={section.props.id} active={section.props.active}></Item>)

  return (
    <nav className='sidebar-container'>
      <ul className='sidebar-list'>
        { items }
      </ul>
    </nav>
  );
}