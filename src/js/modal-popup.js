const modalPopup = document.querySelector('#modal-popup');
const popupBtn = document.querySelector('#popup-btn');
const modalPopupCloseBtn = document.querySelector('#cancel-btn');
const cancelBtn = document.querySelector('#modal-close-btn');
const uninstallBtn = document.querySelector('#uninstall-btn');
const arrow = document.querySelector('#arrow');

popupBtn.addEventListener('click', showModalPopup);
modalPopupCloseBtn.addEventListener('click', hideModalPopup);
modalPopup.addEventListener(
  'click',
  function (event) {
    if (
      event.target.matches('.popup-modal') ||
      !event.target.closest('.modal-popup__container')
    ) {
      hideModalPopup();
    }
  },
  false,
);
cancelBtn.addEventListener('click', hideModalPopup);
uninstallBtn.addEventListener('click', function () {
  alert('DONE');
  hideModalPopup();
});

function showModalPopup() {
  modalPopup.style.display = 'flex';
  arrow.style.display = 'none';
}

function hideModalPopup() {
  modalPopup.style.display = 'none';
  arrow.style.display = 'initial';
}
