import React, { ChangeEventHandler, KeyboardEventHandler, MutableRefObject } from 'react';
const { default: styles } = require('./TextInput.module.css');

interface InputPropsType {
  value: string;
  isValid: null | boolean;
  onChange: ChangeEventHandler;
  keyDownHandler: KeyboardEventHandler;
  inputRef?: MutableRefObject<any>;
  setIsEditingTodo?: Function;
}

const TextInput: React.FC<InputPropsType> = ({
  value,
  isValid,
  onChange,
  inputRef,
  keyDownHandler,
  setIsEditingTodo,
}) => {
  let style = styles.input;
  let message = null;

  if (isValid !== null) {
    style = isValid ? `${styles.input}` : `${styles.input} ${styles.invalid_value}`;
    if (value !== '') {
      message = isValid ? null : (
        <div className={styles.message}>Превышен лимит в 160 символов</div>
      );
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={style}
        type="text"
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={keyDownHandler}
        onBlur={() => {
          if (!setIsEditingTodo) {
            return;
          }

          setIsEditingTodo(false);
        }}
      />
      {message}
    </div>
  );
};

export default TextInput;
