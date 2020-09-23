"use strict"

export function makeBtn(title, ...classes) {
  const newBtn = document.createElement('button');
  newBtn.textContent = title;
  classes.forEach(cls => {
    newBtn.classList.add(cls);
  });
  return newBtn;
}

export function showModal() {
  const modal = document.querySelector('.mod'),
        modalBody = document.querySelector('.modal-body');
  [modalBody, modal].forEach(item => {
    item.classList.add('modal-show');
  });
}

export function closeModal() {
  const modal = document.querySelector('.mod'),
        modalBody = document.querySelector('.modal-body');
  [modalBody, modal].forEach(item => {
    item.classList.remove('modal-show');
  });
}

export default function modal(nestedForm) {
  const wrapper = document.querySelector('.wrapper'),
        newRecBtn = makeBtn('Add new record', 'btn', 'btn-primary');
  wrapper.prepend(newRecBtn);

  newRecBtn.addEventListener('click', () => {
    showModal();
    document.querySelector('.modal-body').addEventListener('click', () => {
      if (event.target.dataset.closemodal !== undefined) {
        closeModal();
        nestedForm.reset();
      };
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeModal();
        nestedForm.reset();
      }
    });
  })
}
