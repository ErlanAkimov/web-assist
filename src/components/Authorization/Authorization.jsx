import styles from './styles.module.scss';
import { auth, signInWithEmailAndPassword } from '../../pages/api/data/firebase';
import {
	setPersistence,
	browserLocalPersistence,
	onAuthStateChanged,
	signOut,
	getAuth,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import Registration from '../Registration/Registration';

const Authorization = ({ setUser, setAuthorized, nickname }) => {
	const [registration, setRegistration] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);


	const [error, setError] = useState(false);

	const [emailValidationMessage, setEmailValidationMessage] = useState('');
	const [passwordValidationMessage, setPasswordValidationMessage] = useState('');

	useEffect(() => {
		onAuthStateChanged(auth, (userdata) => {
			if (userdata) {
				setUser(userdata);
				setAuthorized(true);
			} else {
				setUser({});
				setAuthorized(false);
			}
		});
	}, []);

	return (
		<div className={styles.wrapper}>
			{registration ? <Registration setRegistration={setRegistration} nickname={nickname} /> : null}
			<form className={styles.login}>
				<h3 className={styles.login__title}>Авторизация</h3>

				<input
					value={username}
					onBlur={emailValidate}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					className={styles.input}
					type="email"
					placeholder="email"
					autoComplete="off"
				/>
				<div className={styles.validate_message_block}>
					<p className={styles.validate}>{emailValidationMessage}</p>
				</div>


				<input
					value={password}
					onBlur={passwordValidate}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					className={styles.input}
					type="password"
					placeholder="password"
					autoComplete="off"
				/>
                <div className={styles.validate_message_block}>
				    <p className={styles.validate}>{passwordValidationMessage}</p>
                </div>


				<button className={`button-type-1 ${styles.loginBtn}`} onClick={handleLogin}>
					Войти
				</button>
			</form>

			<button
				className={`button-type-1 ${styles.createBtn}`}
				onClick={() => {
					setRegistration(true);
				}}
			>
				Создать аккаунт
			</button>
		</div>
	);


    // VALIDATION FUNCTIONS

	function emailValidate() {
        if (username == '') {
            setEmailValidationMessage('Поле не может оставаться пустым');
            setEmailValidated(false);
        } else {setEmailValidated(true)};

        if (!username.includes('@')) {
            setEmailValidationMessage('Кажется, вы ввели некорректный email');
            setEmailValidated(false);
		} else {setEmailValidated(true)};

        setTimeout(() => {
            setEmailValidationMessage('');
        }, 5000);
	}

	function passwordValidate() {
        if (password.length === 0) {
            setPasswordValidationMessage('Пароль не может быть пустым')
            setPasswordValidated(false);
        } else {setPasswordValidated(true)}

        if (password.length < 6) {
            setPasswordValidationMessage('Введите не менее 6 символов')
            setPasswordValidated(false);
        } else {setPasswordValidated(true)}

        setTimeout(() => {
            setPasswordValidationMessage('');
        }, 5000)
	}

    // AUTHORIZATION FUNCTION

    async function handleLogin (e) {
		e.preventDefault();

        emailValidate();
        passwordValidate();

        if (emailValidated && passwordValidated) {
            try {
                await setPersistence(auth, browserLocalPersistence).then(() => {
                    return signInWithEmailAndPassword(auth, username, password);
                });
            } catch (error) {
                console.error(error);
                setError(true);
            }
        }
	};
};

export default Authorization;
