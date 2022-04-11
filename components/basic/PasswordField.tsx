import React, { FC, useEffect, useState } from 'react';

interface PasswordFieldProps { 
  value?: string,
  onValueChange?: (value: string) => void
}

const PasswordField: FC<PasswordFieldProps> = ({ value, onValueChange }) => {
  const [password, setPassword] = useState(value || '');

  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);


  const handleChange = (event: any) => {
    setPassword(event.target.value);
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  }

  return (
    <div className='ces-password-field'>
      <input type="password"
        value={password}
        onChange={handleChange} />
    </div>
  );
}

export default PasswordField;


