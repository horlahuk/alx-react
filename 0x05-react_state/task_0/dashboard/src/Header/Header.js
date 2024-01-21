import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <div className={css(styles.header)}>
			<img src={logo} alt='Holberton' className={css(styles.img)} />
			<h1 className={css(styles.h1)}>School dashboard</h1>
		</div>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
  },

  h1:{
    fontSize: "3rem",
    "@media (max-width: 900px)": {
      fontSize: "2rem"
    },
  },
  
  img: {
    width: '200px',
    height: '200px',
  }
})

export default Header
