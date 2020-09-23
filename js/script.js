"use strict"

import fetchTableRow from './modules/fetch_table';
import modal from './modules/modal';
import postRecord from './modules/post_rec';
import deleteRecord from './modules/delete_rec';
import editRecord from './modules/edit_rec';
import showErrorScreen from './modules/error_screen';

const server = 'http://localhost:3000/users';

window.addEventListener('DOMContentLoaded', () => {
  fetch(server)
    .then(data => data.json())
    .then(data => {
      const table = document.querySelector('table'),
            form = document.querySelector('form');
      data.forEach(record => {
        fetchTableRow(table, record.id,
                      record.name,
                      record.email,
                      record.phone.replace(/\D/g, ''),
                      record.website,
                      record.company.name,
                      record.company.catchPhrase,
                      record.company.bs)
      });
      table.hidden = false;
      modal(form);
      postRecord(form, server, table);
      deleteRecord(server);
      editRecord(server);
  })
    .catch(error => {
      showErrorScreen();
    })
})
