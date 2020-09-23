"use strict"

export default function deleteRecord(url) {
  document.addEventListener('click', (event) => {
    if (!(event.target.classList.contains('btn-delete'))) return;
    let confirmed = confirm('Are you sure you want to delete a record?');
    if (confirmed) {
      fetch(url + `/${event.target.closest('tr').id}`, {method: 'DELETE'})
      .then(response => {
        let deletedRow = document.getElementById(`${event.target.closest('tr').id}`);
        deletedRow.remove();
      })
    }
  })
}
