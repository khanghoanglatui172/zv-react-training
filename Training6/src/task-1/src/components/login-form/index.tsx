import React from 'react';

type LoginFormProps = {
    handleLogin: (email: string, password: string) => void
}

const LoginForm = ({handleLogin}: LoginFormProps) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')?.toString();
        const password = form.get('password')?.toString();
        if(typeof email === 'string' && typeof password === 'string') {
            handleLogin(email, password)
        }
    }

    return (
        <div className='login-container'>
            <form onSubmit={onSubmit}>
                <input type='email' name='email' placeholder='Your email'/>
                <input type='password' name='password' placeholder='******'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;