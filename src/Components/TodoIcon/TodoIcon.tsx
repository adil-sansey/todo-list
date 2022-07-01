import React, { MouseEventHandler } from 'react';
const { default: styles } = require('./TodoIcon.module.css');

interface TodoIconPropsType {
  src: string;
  alt: string;
  onClick: MouseEventHandler;
}

const TodoIcon: React.FC<TodoIconPropsType> = ({ src, alt, onClick }) => {
  return <img className={styles.icon} onClick={onClick} src={src} alt={alt} />;
};

export default TodoIcon;
