import css from "./App.module.css"
import fetchFotoWithQuery from "services/api";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

import Notiflix from "notiflix";

import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState('');
  const [foto, setFoto] = useState([]);
  const [totalFoto, setTotalFoto] = useState(0);
  const [page, setPage] = useState(1);
  const [isVizibleLoadMore, setIsVizibleLoadMore] = useState(false);

  useEffect(() => {
    if (!value) {
      return
    }

    async function fotoData() {
      try {
        const fotoData = await fetchFotoWithQuery({ value, page })
        setFoto(pref => [...pref, ...fotoData.hits]);
        setTotalFoto(fotoData.totalHits);
      } catch (error) {
        Notiflix.Notify.warning(error.message);
      } finally {
        setIsVizibleLoadMore(false);
      }
    };

    fotoData();

  }, [value, page])

  useEffect(() => {
    window.scroll({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  }, [foto])

  const onSearch = value => {
    setValue(value);
    setFoto([]);
    setPage(1);
  }

  const onClickLoadMore = () => {
    setPage(pref => pref + 1);
    setIsVizibleLoadMore(true);
  }

  return (
    <div className={css.App} >
      <Searchbar onSearch={onSearch} />
      <ImageGallery data={foto} />
      {page * 12 < totalFoto && <Button onClickLoadMore={onClickLoadMore} isVizibleLoadMore={isVizibleLoadMore} />}
    </div>
  );

}

export default App;