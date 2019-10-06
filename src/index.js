import UI from './Ui';
import Form from './Form';
const form = new Form;
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// can add evet and refactor the code
document.querySelector('#book-list').addEventListener('click', UI.deleteFromScreen);