import Login from './Login';
import Main from './Main';
import Page404 from './Page404';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from './Register';
import Profile from './Profile';
import Movies from './Movies';
import InfoTool from './InfoTool';
import Preloader from './Preloader.js';
import SavedMovies from './SavedMovies';
import { movieApi } from '../utils/MoviesApi';
import { mainApi } from '../utils/MainApi';
import DevTool from './DevTool';
import { MOVIES_API } from '../utils/const';
import { CurrentUserContext } from '../context/context';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(() => JSON.parse(localStorage.getItem('currentUser')));
  const [searchValue, setSearchValue] = React.useState(() => JSON.parse(localStorage.getItem('searchValue')));
  const [searchChecked, setSearchChecked] = React.useState(() => JSON.parse(localStorage.getItem('searchChecked')));
  const [cards, setCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState(cards);
  const [likedCards, setLikedCards] = React.useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  //const [isFirstSearch, setIsFirstSearch] = React.useState(() => JSON.parse(localStorage.getItem('isFirstSearch')));
  const [isInfoToolOpen, setIsInfoToolOpen] = React.useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState();
  const isOpen = isInfoToolOpen || isMenuPopupOpen


  function handleChangeSearch(e) {
    setSearchValue(e.target.value);
  }

  //поиск фильмов
  function handleSearch(e) {
    e.preventDefault();
    if (searchValue === '') {
      setInfoMessage('Нужно ввести ключевое слово');
      setIsInfoToolOpen(true);
      return
    }
    //setFilteredCards(cards);
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
     searchMovies(cards, searchValue);
  
    console.log(cards);
    console.log(filteredCards);

    if (filteredCards.length === 0) {
      setInfoMessage('Ничего не найдено');
      setIsInfoToolOpen(true);
      return
    }
  }

  //фильтрация массива карточек
  function searchMovies(cards,searchValue) {
    const filtered = cards.filter(
      (item) =>
        item.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  function toggleShortsFilter() {
    if (searchChecked) {
      setSearchChecked(false);
      localStorage.removeItem('searchChecked');
      // props.filterMovies(props.searchValue || '', false, props.cards);
    } else {
      setSearchChecked(true);
      localStorage.setItem('searchChecked', 'true');
      //  props.filterMovies(props.searchValue || '', true, props.cards);
    }
  }

  function handleMenuClick() {
    setIsMenuPopupOpen(true);
  }

  function checkToken() {
    if (token) {
      mainApi.checkToken(token)
        .then((data) => {
          if (data) {
            setCurrentUser({ name: data.name, email: data.email, id: data._id });
            setLoggedIn(true);
            navigate("/", { replace: true })
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
          localStorage.clear();
          goLogin();
        });
    }
  }


  function login(formValue, setFormValue) {
    mainApi.login(formValue.email, formValue.password)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUser', JSON.stringify({ name: data.name, email: data.email, id: data._id }));
          setCurrentUser({ name: data.name, email: data.email, id: data._id });
          setFormValue({ email: '', password: '' });
          window.location.assign('/');
        }
      })
      .catch(err => console.log(err));
  }
  function registration(formValue, setFormValue) {
    mainApi.registration(formValue.name, formValue.email, formValue.password)
      .then((data) => {
        console.log(data);
        if (data) {
          setFormValue({ name: '', email: '', password: '' });
          window.location.assign('/sign-in');
        }
      })
      .catch(err => console.log(err));
  }

  function editProfile({
    name,
    email,
  }) {

    mainApi.editProfile({ name, email })
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        localStorage.setItem('currentUser', JSON.stringify({ name: data.name, email: data.email }));
      })
      .then((data) => { console.log(data) })
      .catch((err) => { console.log(`не удалось сохранить новый профиль, Ошибка: ${err}`) })
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
    goLogin();
  }

  function goToUrl(url) {
    window.open(url)
  }

  function goBack() {
    window.history.back()
  }

  function goLogin() {
    window.location.assign('/sign-in')
  }


  function getAllMovies() {
    movieApi.getAllMovies()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => { console.log(`не удалось обновить карточки, Ошибка: ${err}`) })
  }

  function getAllLikedCards() {
    mainApi.getAllLikes()
      .then((likedCards) => {
        if (likedCards) {
          setLikedCards(likedCards)
        } else {
          console.log('у вас нет добавленных фильмов')
        }
      })
      .catch((err) => { console.log(`не удалось обновить карточки, Ошибка: ${err}`) })
  }

  function handleAddLike(card) {
    mainApi.addLike({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `${MOVIES_API}${card.image.url}`,
      trailerLink: card.trailerLink,
      thumbnail: `${MOVIES_API}${card.image.formats.thumbnail.url}`,
      movieId: String(card.id),
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    })
      .then((newCard) => {
        console.log(newCard);
        setLikedCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => { console.log(`не удалось поставить лайк, Ошибка: ${err}`) });
  }

  function handleDeleteLike(card) {
    mainApi.deleteLike(card._id)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => { console.log(`не удалось убрать лайк, Ошибка: ${err}`) });
  }

  function closeAllPopups() {
    setInfoMessage('');
    setIsInfoToolOpen(false);
    setIsMenuPopupOpen(false);
  }


  React.useEffect(() => {
    getAllMovies()
  },
    [])

  React.useEffect(() => {
    getAllLikedCards()
  },
    [])
    
  React.useEffect(() => {
    checkToken()
  },
    [])
    
  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  React.useEffect(()=>{
    if (!cards || !searchValue)
        return;
    searchMovies(cards, searchValue);
}, [filteredCards])


  return (
    <div className="page">
      <div className="page__body">
        <DevTool
          currentUser={currentUser}
          token={token}
          searchChecked={searchChecked}
          searchValue={searchValue}
          cards={cards}
          filteredCards={filteredCards}
        />
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main
              loggedIn={loggedIn}
              goToUrl={goToUrl}
              token={token}
              isMenuPopupOpen={isMenuPopupOpen}
              handleMenuClick={handleMenuClick}
              closeAllPopups={closeAllPopups}
            />} />
            <Route path="/sign-in" element={<Login
              login={login}
              currentUser={currentUser}
            />} />
            <Route path="/sign-up" element={<Register
              registration={registration} />} />
            <Route path="/profile" element={<Profile
              onSubmit={login}
              handleLogout={handleLogout}
              editProfile={editProfile}
              currentUser={currentUser}
            />} />
            <Route path="/movies" element={
              <Movies
                cards={filteredCards}
                token={token}
                handleAddLike={handleAddLike}
                handleDeleteLike={handleDeleteLike}
           //     isFirstSearch={isFirstSearch}
           //     setIsFirstSearch={setIsFirstSearch}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                toggleShortsFilter={toggleShortsFilter}
                searchChecked={searchChecked}
                handleSearch={handleSearch}
                handleChangeSearch={handleChangeSearch}
              />} />
            <Route path="/saved-movies" element={
              <SavedMovies
                cards={likedCards}
                token={token}
                handleDeleteLike={handleDeleteLike}
              />} />
            <Route path='*' element={<Page404
              onClick={goBack}
            />} />
          </Routes>


        </CurrentUserContext.Provider>
        <InfoTool
          isOpen={isInfoToolOpen ? 'popup_is-opened' : ''}
          onClose={closeAllPopups}
          text={infoMessage}
        />

        <Preloader />
      </div>
    </div>
  );
}
export default App;
