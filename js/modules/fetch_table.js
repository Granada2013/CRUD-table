"use strict"

import {makeBtn} from './modal';

export default function fetchTableRow(parentTable, ...args) {
  const row = document.createElement('tr');
  row.classList.add('data-row');
  args.forEach((arg, i) => {
    let td = document.createElement('td');
    if (i === 0) {
      td.classList.add('data-id');
      row.setAttribute('id', arg);
    } else {
      td.classList.add('data-cell');
    }
    td.textContent = arg;
    row.append(td);
  });
  addButtons(parentTable);
  parentTable.append(row);

  function addButtons() {
    const deleteBtn = makeBtn('Delete', 'btn', 'btn-outline-danger', 'btn-delete'),
          editBtn = makeBtn('Edit', 'btn', 'btn-outline-dark', 'btn-edit');

    for (let btn of [editBtn, deleteBtn]) {
      let td = document.createElement('td');
      td.classList.add('button-cell');
      td.append(btn);
      row.append(td);
    };
  }
}
