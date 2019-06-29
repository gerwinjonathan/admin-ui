import React from 'react';
import SideBar from './components/sidebar';
import HeaderBar from './components/headerBar/headerBar';
import Footer from './components/footer/footer';
import Content from './components/content/content';

function App() {
  return (
    <div>
      <SideBar />
      <HeaderBar heading={'Dashboard'} />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
