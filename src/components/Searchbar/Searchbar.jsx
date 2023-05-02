import css from "./Searchbar.module.css"
import PropTypes from 'prop-types';

export const Searchbar = ({ onSearch }) => {

    const handleSubmit = e => {
        e.preventDefault();
        const value = e.currentTarget.elements.search.value;
        onSearch(value);
    };

    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="search"
                />
            </form>
        </header>
    )

};

Searchbar.propTypes = {
    onSearch: PropTypes.func,
}
