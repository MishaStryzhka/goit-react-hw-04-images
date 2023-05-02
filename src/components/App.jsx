import { Component } from "react";

import css from "./App.module.css"
import fetchFotoWithQuery from "services/api";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import Notiflix from "notiflix";


export class App extends Component {
  state = {
    value: '',
    foto: [],
    totalFoto: 0,
    page: 1,

    isLoading: false,
    isVizibleLoadMore: false,
  };

  async componentDidUpdate(_, prevState) {

    if (prevState.value !== this.state.value || prevState.page !== this.state.page) {

      this.setState({ isLoading: true });

      try {
        const foto = await fetchFotoWithQuery(this.state);
        prevState.value !== this.state.value && Notiflix.Notify.success(`There are ${foto.total} photos.`);
        this.setState({ foto: [...this.state.foto, ...foto.hits], totalFoto: foto.totalHits });
      } catch (error) {
        Notiflix.Notify.warning(error.message);
      } finally {
        this.setState({
          isLoading: false,
          isVizibleLoadMore: false,
        });
      }
    }


    if (prevState.foto.length !== this.state.foto.length) {
      window.scroll({
        top: document.documentElement.offsetHeight,
        behavior: "smooth",
      });
    }

  }

  onSearch = value => {
    this.setState({ value: value, foto: [], page: 1 });
  }

  onClickLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
      isVizibleLoadMore: true,
    });
  }

  render() {
    return (
      <div className={css.App} >
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery data={this.state.foto} handleSwitchModal={this.handleOpenModal} handleSelectedFoto={this.handleSelectedFoto} />
        {this.state.page * 12 < this.state.totalFoto && <Button onClickLoadMore={this.onClickLoadMore} isVizibleLoadMore={this.state.isVizibleLoadMore} />}
      </div>
    );
  }
};