"use strict"

import {postData} from '../services/services';
import {closeModal} from './modal';
import fetchTableRow from './fetch_table';

export default function postRecord(form, url, parentTable) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const table = document.querySelector('table');
    const obj = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      website: form.site.value,
      company: {
        name: form.compName.value,
        catchPhrase: form.compPhrase.value,
        bs: form.compBs.value
      }
    };
    postData(url, JSON.stringify(obj))
      .then(data => {
        closeModal();
        fetchTableRow(parentTable, data.id,
                      data.name,
                      data.email,
                      data.phone,
                      data.website,
                      data.company.name,
                      data.company.catchPhrase,
                      data.company.bs);
      })
      .catch(error => alert(error))
      .finally(() => form.reset())
    });
}
