import Router from 'next/router';
import React, { useState } from 'react';
import { mutate } from 'swr';
import { useTranslation } from 'react-i18next';

import UserAPI from '../../lib/api/user';
import PasswordField from '../basic/PasswordField';
import TextField from '../basic/TextField';
import ListErrors from '../common/ListErrors';
import LoadingSpinner from '../common/LoadingSpinner';

const LoginForm = () => {
  const { t } = useTranslation('common');
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  let username: string;
  let password: string;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status, errors } = await UserAPI.login(username, password);

      if (status !== 200) {
        setErrors(errors);
      }

      if (data) {
        window.localStorage.setItem('user', JSON.stringify(data));
        mutate('user', data);
        Router.push('/');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    !isLoading ?
      <>
        <ListErrors errors={errors} />
        <TextField onValueChange={value => { username = value; }} />
        <br />
        <PasswordField onValueChange={value => { password = value }} />
        <br />
        <button onClick={handleSubmit}>{t('LoginPage.LoginButton')}</button>
      </> : <><LoadingSpinner/></>
  );
};

export default LoginForm;
