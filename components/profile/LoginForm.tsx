import Router from 'next/router';
import React, { useCallback, useState } from 'react';
import { mutate } from 'swr';

import ListErrors from '../common/ListErrors';
import UserAPI from '../../lib/api/user';

const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    []
  );
  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status } = await UserAPI.login(email, password);

      if (status !== 200) {
        setErrors(data.errors);
      }

      if (data?.user) {
        window.localStorage.setItem('user', JSON.stringify(data.user));
        mutate('user', data?.user);
        Router.push('/');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ListErrors errors={errors} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isLoading}
          >
            Sign in
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
