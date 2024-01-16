import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Login = () => {
  return (
    <>
      <div className={css(styles.AppBody)}>
				<p>Login to access the full dashboard</p>
				<section className='form-inputs'>
					<section className='input'>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' id='email' className={css(styles.input)} />
					</section>
					<section className='input'>
						<label htmlFor='password'>Password: </label>
						<input type='password' name='password' id='password' className={css(styles.input)} />
					</section>
					<button>OK</button>
				</section>
			</div>
    </>
  )
}

const styles = StyleSheet.create({
	AppBody: {
		fontSize: '1rem',
		padding: '2rem',
		height: '45%',
		marginBottom: '2em',
	},
	
	input: {
		margin: '10px'
	}
})

export default Login
