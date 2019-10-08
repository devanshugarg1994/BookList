import Book from './Book.js';
// No need to intatiante the class using static method
export default class UI {

    // Display Books om Screen
    static displayBooks () {
        const LIST = Book.getBookfromLocalStorage();
        if(LIST[0]) {
            return 0;
        }
         LIST.forEach(book => { 
             UI.addBookToScreen(book);
         });      
    }

    // Alert Message Handling
    static showAlert(className) {
        const div = document.createElement ('div');
        div.className = `alert alert-${className}`;
        let text;
        if(className === 'success'){
            text = document.createTextNode("Your Book is added to list");
        }
        else if(className === "info") {
            text = document.createTextNode("Successsfully Deleted");
        }
        else {
            text = document.createTextNode("Please fill all entry");
        }
        // let child = div.lastElementChild;
        // while(child) {
        //     div.removeChild(remove);
        //     child = div.lastElementChild;
        // }
        UI.removeAlertMessage();
        div.appendChild(text);
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
    }

    //Remove Alert Message
    static removeAlertMessage() {
        if(document.querySelector('.alert'))
        document.querySelector('.alert').remove();
    }

    // Adding Book to screen and calling function to store in LIST
    static addBookToScreen(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">Delete</a></td>
        `;

        list.appendChild(row);
    }

    // Clearing Field After successfull submission
    static clearField() { 
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }

    // Deleting from Ui and calling function to delete from local storage
    static deleteFromScreen(evt) {
        if(evt.target.classList.contains('delete')) {
            //Removing rom DOM and Screen
            evt.target.parentElement.parentElement.remove();
            UI.removeAlertMessage();

            //Removing from local storage
            let isbn = evt.target.parentElement.previousElementSibling.textContent;
            Book.removeBookFromLocalStorage(isbn);
            location.reload();
            UI.showAlert("info");
        }

    }

}