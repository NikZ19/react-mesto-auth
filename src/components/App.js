import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { EditAvatarPopup } from './EditAvatarPopup.js';
import { EditProfilePopup } from './EditProfilePopup.js';
import { AddPlacePopup } from './AddPlacePopup.js';
import { ImagePopup } from './ImagePopup.js';
import api from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
// import { ConfirmPopup } from './ConfirmPopup/ConfirmPopup.js';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);


  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
  }, []);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then(data => setCards(data))
      .catch(err => console.log(err));
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.name, link: card.link })
  };

  const handleUpdateUser = (data) => {
    api.updateUserInfo(data).then((newData) => {
      setCurrentUser(newData);
      setIsEditProfilePopupOpen(false);
    })
      .catch(err => console.log(err));
  };

  const handleUpdateAvatar = (url) => {
    api.updateAvatar(url.avatar)
      .then(data => {
        setCurrentUser(data);
        setIsEditAvatarPopupOpen(false);
      })
      .catch(err => console.log(err));
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    // setIsConfirmPopupOpen(false);
    setSelectedCard({})
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.likeCardToggle(card._id, isLiked).then(newCard => {
      setCards(state => state.map(c => c._id === card._id ? newCard : c));
    })
      .catch(err => console.log(err));
  };

  const handleCardDelete = (card) => {
    api.removeCard(card._id).then(() => {
      setCards(cards.filter(c => c._id !== card._id));
    })
      .catch(err => console.log(err));
  };

  const handleAddPlaceSubmit = (data) => {
    api.addNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    })
      .catch(err => console.log(err));
  };

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        {/* <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} /> */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
