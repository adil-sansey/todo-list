import React from 'react';
const { default: styles } = require('./FilterBox.module.css');

type FilterBoxPropsType = {
  filter: string;
  setFilter: Function;
};

const FilterBox: React.FC<FilterBoxPropsType> = ({ filter, setFilter }) => {
  const isRadioSelected = (value: string): boolean => filter === value;

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.currentTarget.value);
  return (
    <fieldset className={styles.filter_box}>
      <legend>Фильтровать:</legend>

      <div>
        <input
          checked={isRadioSelected('all')}
          onChange={handleRadioClick}
          className={styles.text}
          type="radio"
          id="all"
          name="all"
          value="all"
        />
        <label htmlFor="all">Все</label>
      </div>

      <div>
        <input
          checked={isRadioSelected('completed')}
          onChange={handleRadioClick}
          className={styles.text}
          type="radio"
          id="completed"
          name="completed"
          value="completed"
        />
        <label htmlFor="completed">Выполненные</label>
      </div>

      <div>
        <input
          checked={isRadioSelected('uncompleted')}
          onChange={handleRadioClick}
          className={styles.text}
          type="radio"
          id="uncompleted"
          name="uncompleted"
          value="uncompleted"
        />
        <label htmlFor="uncompleted">В работе</label>
      </div>
    </fieldset>
  );
};

export default FilterBox;
