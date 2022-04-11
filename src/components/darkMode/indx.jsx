import React, { useContext } from 'react';
import { contexts } from '../../contexts';

const Header = () => {
  const {darkMode, setDarkMode} = useContext(contexts)

  return(
    <section className={darkMode ? 'light-mode' : 'Header_Home'}>
      <h1 className='Header__title'>devfinder</h1>
      <button
        onClick={() => {
          setDarkMode(!darkMode)
        }}
      ><span className=''>{darkMode ? 'Dark' : 'Light'}</span></button>
    </section>
  )
}

export default Header