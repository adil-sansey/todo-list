import React, { MouseEventHandler } from 'react';
const { default: styles } = require('./Button.module.css');

interface buttonPropsType {
  text: string;
  onClick: MouseEventHandler;
}

const Button: React.FC<buttonPropsType> = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
