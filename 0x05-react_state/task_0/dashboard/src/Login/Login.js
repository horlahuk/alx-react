import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Login = () => {
  return (
    <>
      <div className={css(styles.AppBody)}>
				<p>Login to access the full dashboard</p>
				<section className={css(styles.formInput)}>
					<section className={css(styles.input)}>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' id='email' />
					</section>
					<section className={css(styles.input)}>
						<label htmlFor='password'>Password: </label>
						<input type='password' name='password' id='password' />
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
		height: '45%',
		marginBottom: '2em',
		"@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
	},
	
	formInput: {
		display: 'flex',
		"@media (max-width: 900px)": {
			width:'3rem',
      flexDirection: "column",
    },
	},
	input: {
		marginRight: '2rem',
		"@media (max-width: 900px)": {
			marginBottom:'1rem'
		}
	}
})

export default Login
