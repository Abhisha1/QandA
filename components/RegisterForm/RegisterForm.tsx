import React, { useState } from "react";
import styles from '../../styles/RegisterForm.module.css';
import Button from "../Button/Button";

interface RegisterFields {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}


function RegisterForm() {
    const [fields, setFields] = useState<RegisterFields>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const onChange =
		(field: keyof RegisterFields) =>
		(
			event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
		): void => {
			setFields((currState) => ({
				...currState,
				[field]: event.target.value,
			}));
		};

    return (
        <form className={styles.formContainer}>
        <div className={styles.registerContainer}>
        <div className={styles.formFieldContainer}>
            <div className={styles.formField}>
                <input
                    className={styles.formFieldText}
                    name="firstName"
                    type="text"
                    placeholder='First Name'
                    value={fields.firstName}
                            onChange={onChange("firstName")}
                            autoComplete="given-name"
                required
                />
            </div>
            <div className={styles.formField}>
                <input
                    className={styles.formFieldText}
                    name="lastName"
                    type="text"
                    placeholder='Last Name'
                    value={fields.lastName}
                            onChange={onChange("lastName")}
                            autoComplete="family-name"
                required
                />
            </div>
            <div className={styles.formField}>
                <input
                    className={styles.formFieldText}
                    name="email"
                    type="email"
                    placeholder='Email'
                    value={fields.email}
                            onChange={onChange("email")}
                            autoComplete="email"
                required
                />
            </div>
            <div className={styles.formField}>
                <input
                    className={styles.formFieldText}
                    name="password"
                    type="password"
                    placeholder='Password'
                    value={fields.password}
                            onChange={onChange("password")}
                            autoComplete="new-password"
                required
                />
            </div>
            <div className={styles.formField}>
                <input
                    className={styles.formFieldText}
                    name="confirm password"
                    type="password"
                    placeholder='Confirm Password'
                    value={fields.confirmPassword}
                            onChange={onChange("confirmPassword")}
                            autoComplete="new-password"
                required
                />
            </div>

        </div>
        <Button type="primary" handler={() => console.log("hello")} label="Register" />
            </div>
            </form>
    )
}

export default RegisterForm;