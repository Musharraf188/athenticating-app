// import React, { useEffect, useState } from 'react';

// import Card from '../UI/Card/Card';
// import classes from './Login.module.css';
// import Button from '../UI/Button/Button';
// import RolesDrop from '../Roles/RolesDrop';

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
// useEffect(()=>{
//   setFormIsValid(
//     enteredEmail.includes('@') && enteredPassword.trim().length > 6
//   );
//   console.log('CLEAN-UP');
// }, [enteredEmail,  enteredPassword]);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);

   
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     setFormIsValid(
//       event.target.value.trim().length > 6 && enteredEmail.includes('@')
//     );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@'));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//       <RolesDrop/>
//         
          
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import styles from './Login.module.css'; // Import styles from the CSS module


const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
useEffect(()=>{
  setFormIsValid(
    enteredEmail.includes('@') && enteredPassword.trim().length > 6
  );
  console.log('CLEAN-UP');
}, [enteredEmail,  enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);


    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };


  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };


  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };
  
return (
    <form onSubmit={submitHandler}>  <div className={styles.container}>
      <div className={styles.design}>
        <div className={`${styles.pill1} ${styles.rotate45}`}></div>
        <div className={`${styles.pill2} ${styles.rotate45}`}></div>
        <div className={`${styles.pill3} ${styles.rotate45}`}></div>
        <div className={`${styles.pill4} ${styles.rotate45}`}></div>
      </div>
      <div  className={`${styles.control} ${styles.login} ${
            emailIsValid === false ? styles.invalid : ''
         }`}>
        <h3 className={styles.titleee}>User Login</h3>
        <div className={styles['text-input']}>
          <i className={`ri-user-fill ${styles.icon}`}></i>
          <input  onBlur={validateEmailHandler} onChange={emailChangeHandler} type="text" placeholder="Username" />
        </div>
        <div
           className={`${styles.control} ${styles['text-input']} ${
             passwordIsValid === false ? styles.invalid : ''
           }`}       >

          <i className={`ri-lock-fill ${styles.icon}`}></i>
          <input onBlur={validatePasswordHandler} onChange={passwordChangeHandler} type="password" placeholder="Password" />
        </div>
        <button type='submit' className={styles["login-btn"]} disabled={!formIsValid}>LOGIN</button>
            
      </div>
    </div>
    </form>

  );
};

export default Login;

