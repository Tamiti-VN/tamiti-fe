import { useState } from 'react';
import './style.css';
import { login } from '../../apis/user';
import { toast } from 'react-toastify';
import { loginSuccess } from '../../redux/auth/AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { email: email, password: password };
    if (!email || !password) toast.error('Please input Email/Password!!');
    await login(data)
      .then((data) => dispatch(loginSuccess(data)))
      .then(() => navigate('/admin'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={onSubmitHandler}>
        <h1>Login</h1>
        <p className="form__input">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            autoComplete="email"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p className="form__input">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
