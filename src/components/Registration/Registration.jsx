import styles from './styles.module.scss';
import { auth } from '../../pages/api/data/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';



function Registration (props) {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPassworConfirm] = useState('');

    // validations

    const [nicknameIsValid, setNicknameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    
    return (
        <div className={styles.wrapper_outer}>
            <div className={styles.overlay} onClick={() => {props.setRegistration(false)}}></div>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Регистрация</h3>

                <div className={styles.close} onClick={() => {props.setRegistration(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "black"}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </div>
                <form className={styles.form}>
                    <input className={styles.input} onBlur={nicknameValidate} value={nickname}        onChange={(e) => {setNickname(e.target.value)}} autoComplete='off' type="text" placeholder='Введите никнейм'/>
                    <input className={styles.input} onBlur={emailValidate} value={email}           onChange={(e) => {setEmail(e.target.value)}}    autoComplete='off' type="email" placeholder='email'/>
                    <input className={styles.input} onBlur={passwordValidate} value={password}        onChange={(e) => {setPassword(e.target.value)}} autoComplete='off' type="password" placeholder='Пароль'/>
                    <input className={styles.input} onBlur={passwordValidate} value={passwordConfirm} onChange={e => {setPassworConfirm(e.target.value)}} autoComplete='off' type="password" placeholder='Повторите пароль'/>

                    {/* <div className={styles.annotation}>
                        Не менее 6 латинских символов
                    </div> */}
				    <button className={`button-type-1 ${styles.createBtn}`} onClick={createNewUser}>Создать аккаунт</button>
                </form>
            </div>
        </div>
    )

    async function createNewUser (e) {
        e.preventDefault();
        if (nicknameIsValid && passwordIsValid && emailIsValid) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                 updateProfile(user, {
                    displayName: nickname,
                })
            })
            .catch (error => {
                console.error(error)
            })
            await props.nickname(nickname)
        }
    }
    function nicknameValidate() {
        if (nickname.split('').length > 2) {
            setNicknameIsValid(true)
        } else {
            setNicknameIsValid(false)
        }
    }

    function emailValidate() {
        if (email.includes('@')) {
            setEmailIsValid(true)
        } else {
            setEmailIsValid(false)
        }
    }

    function passwordValidate() {
        if (password.split('').length > 5 && password == passwordConfirm) {
            setPasswordIsValid(true)
        } else {
            setPasswordIsValid(false)
        }
    }
}

export default Registration;