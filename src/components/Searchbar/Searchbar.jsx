import { Component } from 'react';
import css from "./Searchbar.module.css"

export class Searchbar extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const value = e.currentTarget.elements.search.value;
        this.props.onSearch(value);
    };

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
    }
}
