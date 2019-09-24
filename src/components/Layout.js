import React, { forwardRef } from 'react';

import SideBar from './SideBar';

const Section = forwardRef(({ id, children }, ref) => {
  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
});

export {
  Section
};

export default function Layout({ children }) {
  return (
    <div>
      <SideBar sections={children} />
      <main>
        {children}
      </main>
    </div>
  );
}