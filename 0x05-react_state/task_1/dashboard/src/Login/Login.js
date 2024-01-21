import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" id="email" name="email" value={email} onChange={handleChangeEmail} />
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" id="password" name="password" value={password} onChange={handleChangePassword} />
          <input type="submit" value="Ok" disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;

// import React, { Component } from "react";
// import { StyleSheet, css } from "aphrodite";

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { isLoggedIn: false };

//     this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
//   }

//   handleLoginSubmit() {
//     this.setState({ isLoggedIn: true });
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <div className={css(styles["App-body"])}>
//           <p>Login to access the full dashboard</p>
//           <form onSubmit={handleLoginSubmit}>
//             <label htmlFor="email">Email:</label>
//             <input className={css(styles.input)} type="email" id="email" name="email" />
//             <label htmlFor="password">Password:</label>
//             <input className={css(styles.input)} type="password" id="password" name="password" />
//             <input type="submit" value="Ok" />
//           </form>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   "App-body": {
//     fontSize: "1rem",
//     padding: "2em",
//     height: "45%",
//     "@media (max-width: 900px)": {
//       display: "flex",
//       flexDirection: "column",
//     },
//   },

//   input: {
//     margin: "10px",
//   },
// });

// export default Login;