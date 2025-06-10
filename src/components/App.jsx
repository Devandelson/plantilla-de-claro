import '../css/normalize.css'
import Header from './header/header'
import Main from './main/main.jsx';
import Footer from './main/footer.jsx';
import ResponsiveMenu from './header/ResponsiveMenu.jsx';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [menuCondition, setMenuCondition] = useState(false);

  function changeMenuCondition() {
    setMenuCondition((prev) => !prev);
  }

  return (
    <>
      <AnimatePresence>
        {menuCondition && (<ResponsiveMenu closeMenuFunction={changeMenuCondition} />)}
      </AnimatePresence>
      
      <Header closeMenu={changeMenuCondition} />
      <Main />
      <Footer />
    </>
  )
}

export default App
