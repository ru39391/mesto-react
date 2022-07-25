export const forms = {
  profile: document.forms.editProfile,
  userpic: document.forms.updateUserpic,
  cardNew: document.forms.addCard,
  cardRemove: document.forms.removeCard
}

export const profileForm = {
  name: forms.profile.elements.name,
  about: forms.profile.elements.about
}

export const userpicForm = {
  link: forms.userpic.elements.link
}

export const cardForm = {
  name: forms.cardNew.elements.name,
  link: forms.cardNew.elements.link
}

export const btns = {
  targetEditProfile: document.querySelector('.profile__edit-button'),
  targetUpdateUserpic: document.querySelector('.profile__avatar-button'),
  targetAddCard: document.querySelector('.profile__add-button')
}

export const items = {
  parentSelector: '.elements',
  tplSelector: '.card-template'
}

export const modalConfig = {
  defaultClass: 'modal',
  visibleClass: 'modal_visible',
  closeBtnClass: 'modal__close',
  targetEditProfileSelector: '.modal_target_edit-profile',
  targetUpdateUserpicSelector: '.modal_target_update-userpic',
  targetAddCardSelector: '.modal_target_add-card',
  targetRemoveCardSelector: '.modal_target_remove-card',
  targetPhotoSelector: '.modal_target_reveal-photo',
  photoSelector: '.modal__photo',
  photoCaptionSelector: '.modal__photo-caption',
}

export const formConfig = {
  defaultSelector: '.form',
  inputSelector: '.form__field',
  submitBtnSelector: '.form__button',
  inactiveBtnClass: 'form__button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__error_visible'
};

export const userConfig = {
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
}

export const btnConfig = {
  captionSelector: '.form__button-caption',
  preloaderSelector: '.form__button-loading',
  preloaderCaption: 'Сохранение...'
}

export const access = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  token: 'bee12215-09da-441f-9f38-f7f695bca43f',
}
