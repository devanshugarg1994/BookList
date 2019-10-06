import {Book} from './Book';
// No need to intatiante the class using static method
export default class UI {
    //all methods are static

    //using hardcode data intially

    static displayBooks () {
        const StoredBooks = [
            {
                title: "Book-one",
                author: "John Doe",
                isbn: '3434434'   
            },
            {
                title: "Book-two",
                author: "Jan Doe",
                isbn: '56456'   
            }
        
         ];
         console.log("reached");

         const books = StoredBooks;
         books.forEach(book => { 
             UI.addBookToList(book);
         });     
    }

    static addBookToList(book) {
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

    static clearField() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }

    static deleteFromScreen(evt) {
        if(evt.target.classList.contains('delete')) {
            evt.target.parentElement.parentElement.remove();
        }
    }

}