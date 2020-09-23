"use strict"

import {putData} from '../services/services';

export default function editRecord(url) {
  document.addEventListener('click', (event) => {
    if (!(event.target.classList.contains('btn-edit'))) return;

    const parentRow = event.target.closest('tr');
    if (!(event.target.dataset.save == 'true')) {
      event.target.textContent = 'Save'
      event.target.classList.toggle('btn-warning');
      event.target.classList.toggle('btn-success');
      event.target.dataset.save = true;
      toggleEditable();

    } else {
        const dataCells = parentRow.children;
        const obj = {
          name: dataCells[1].textContent,
          email: dataCells[2].textContent,
          phone: dataCells[3].textContent,
          website: dataCells[4].textContent,
          company: {
            name: dataCells[5].textContent,
            catchPhrase: dataCells[6].textContent,
            bs: dataCells[7].textContent
          }
        }
        putData(url + `/${parentRow.id}`, JSON.stringify(obj))
        .catch(error => alert('oops!', error.message))

      event.target.textContent = 'Edit';
      event.target.classList.toggle('btn-warning');
      event.target.classList.toggle('btn-success');
      event.target.dataset.save = false;
      toggleEditable();
    };

    function toggleEditable() {
      const editableCells = parentRow.querySelectorAll('.data-cell');
      editableCells.forEach(cell => {
        cell.contentEditable = (cell.contentEditable == 'true')? false : true;
      });
    }
  })
}
