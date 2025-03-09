import React from 'react';
import { links } from '../data';

const NavBar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center  sm:py-8'>
        <h3 className='text-3xl font-bold capitalize'>
          gash<span className='text-emerald-600'>dev</span>
        </h3>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 '
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
