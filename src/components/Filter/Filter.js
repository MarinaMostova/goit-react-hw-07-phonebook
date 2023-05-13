import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const data = e.target.value.trim();
    dispatch(changeFilter(data));
  };

  return (
    <div className={css.filter}>
      <label className={css.title} htmlFor="filter">
        Find contact by name
      </label>
      <input
        onChange={onFilterChange}
        className={css.input}
        type="text"
        name="filter"
        value={filter}
      />
    </div>
  );
};

export default Filter;

