export  default class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }

    // Get data fro local storage
    static getBookfromLocalStorage () {
        let LIST;
        if(!localStorage.getItem('BookList')) {
            LIST = [];
            return LIST
        }

        LIST = JSON.parse(localStorage.getItem('BookList'));
        return LIST;
    }
    // Set data for local storage
    static addBookToLocalStorage (book) {
        const LIST = Book.getBookfromLocalStorage();
        LIST.push(book);
        localStorage.setItem('BookList', JSON.stringify(LIST)); 

    }

    // Delete data from local storage    
    static removeBookFromLocalStorage (isbn) {

        const LIST = Book.getBookfromLocalStorage();
        LIST.forEach((element , index) => {
            if(element.isbn === isbn) {
                LIST.splice(index, 1);
                localStorage.setItem('BookList', JSON.stringify(LIST));
                return;
            }
        });
    }
}