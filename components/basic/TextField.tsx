import React, { FC, useEffect, useState } from 'react';

interface TextFieldProps { 
  value?: string,
  onValueChange?: (value: string) => void
}

const TextField: FC<TextFieldProps> = ({value, onValueChange}) => {
  const [textValue, setTextValue] = useState(value || '');

  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  const handleChange = (event: any) => {
    setTextValue(event.target.value);
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  }

  return (
    <div className='ces-text-field'>
      <input type="text"
        value={textValue}
        onChange={handleChange} />
    </div>
  );
}

export default TextField;


