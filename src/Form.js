import Book from './Book.js'
import UI from './Ui.js';
export default class Form {
   
    // Not creating static Function so that we can split the code in different function
    // static function cannot use this variable and cannot call other static function or instance function
   constructor() {
        document.querySelector('#book-form').addEventListener('submit', this.submitAction.bind(this), false);

    }
   submitAction(evt) {
        evt.preventDefault();
        const title = String(document.querySelector('#title').value);
        const author = String(document.querySelector('#author').value);
        const isbn = String(document.querySelector('#isbn').value);
        UI.removeAlertMessage();
        if(this.validateForm(title, author, isbn)) {
            const book = new Book (title, author, isbn);
            Book.addBookToLocalStorage(book);
            UI.addBookToScreen(book);
            UI.clearField();
        }
        

   }
   validateForm(title, author, isbn) {
       let expression = '^$';
       let regex = new RegExp(expression);
       let expressionDigit = /^\d{6}$/;
       let regexDigit = new RegExp(expressionDigit);
       if(title.match(regex) || author.match(regex) || isbn.match(regex) ) {
           UI.showAlert('danger');
           return false;
       }
       UI.showAlert('success');
       return true;
       // Include using regukae expression
    //    else if(isbn.test(regexDigit) {
    //        alert("Enter a valid 6 digit number");
    //        return false;
    //    
   
    }
}
