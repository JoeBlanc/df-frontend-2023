const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');
const searchBox = document.getElementById('search-input');
const delButtons = document.querySelectorAll('button.delete-btn');

function App() {

    // database for storing records of books
    let bookList = [
        {"name": "Refactoring", "author": "Martin Fowler", "topic": "Software Engineering"},
        {"name": "Clean Code", "author": "Robert Cecil Martin", "topic": "Software Engineering"},
        {"name": "Adaptive Code", "author": "Gary McLean Hall", "topic": "Software Engineering"},
        {"name": "DON'T MAKE ME THINK", "author": "Steve Krug", "topic": "Software Engineering"},
        {"name": "Soft Skills", "author": "John Sonmez", "topic": "Software Engineering"},
        {"name": "The Pragmatic Programmer", "author": "David Thomas", "topic": "Software Engineering"},
        {"name": "Head First Design Patterns", "author": "Eric Freeman", "topic": "Software Engineering"},
    ];

    // build the table
    function buildTable(data) {
        var table = document.getElementById("table-body");

        table.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            row = ` 
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="px-6 py-4">
                                ${data[i].name}
                            </td>
                            <td class="px-6 py-4">
                                ${data[i].author}
                            </td>
                            <td class="px-6 py-4">
                                ${data[i].topic}
                            </td>
                            <td class="px-6 py-4">
                                <button id="delete-${data[i].name}" class="delete-btn font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Delete
                                </button>
                            </td>
                        </tr> `
            // table.appendChild(row);
            table.innerHTML += row;
        }
        
        // add event listener to delete button
        const delButtons = document.querySelectorAll('button.delete-btn');
        console.log(delButtons);
        delButtons.forEach((btn,i) => btn.addEventListener('click', (e) => handleDeleteBook(e, bookList[i])))
    }

    // assign event listener to buttons
    function handleAddEvent() {

        openModalBtn.addEventListener('click', () => {
            console.log('open modal');
            modal.classList.replace('hidden', 'block');
            document.getElementById('overlay').classList.replace('hidden', 'block');
        })
    
        closeModalBtn.addEventListener('click', () => {
            console.log('close modal');
            modal.classList.replace('block', 'hidden');
            document.getElementById('overlay').classList.replace('block', 'hidden');
            emptyModal();
        })
    
        document.getElementById('cancel-btn').addEventListener('click', () => {
            console.log('close modal');
            modal.classList.replace('block', 'hidden');
            document.getElementById('overlay').classList.replace('block', 'hidden');
            emptyModal();
        })
        
        document.getElementById('add-book-btn').addEventListener('click', () => {
            console.log('add book');
            addBook();
            modal.classList.replace('block', 'hidden');
            document.getElementById('overlay').classList.replace('block', 'hidden');
            emptyModal();
        })
        
        searchBox.addEventListener('input', () => {searchBook();})
    }

    // delete a book
    function handleDeleteBook(e, dataBook) {
        const consfirmed = window.confirm(`Are you sure you want to delete this book?`)
        console.log(e.target)
        if (consfirmed) {
            const row = e.target.parentElement.parentElement;
            row.remove();
            let newList = bookList.filter((book) => book.name !== dataBook.name)
            bookList = [...newList]
            console.log(bookList)
        }
    }

    // search for a book
    function searchBook() {
        var search = document.getElementById("search-input").value;

        var result = filter(search, bookList);
        buildTable(result);
    };

    function filter(search, bookList) {
        var filteredData = [];

        for (var i = 0; i < bookList.length; i++) {
            search = search.toLowerCase();
            let name = bookList[i].name.toLowerCase();
            
            if (name.includes(search)) {
                console.log(bookList[i]);
                filteredData.push(bookList[i]);
            }
        }
        return filteredData;
    }

    // add a new book
    function addBook() {
        let name = document.getElementById("name").value;
        let author = document.getElementById("author").value;
        let topic = document.getElementById("topic").value;
        let book = {
            "name": name,
            "author": author,
            "topic": topic
        };

        if (name === "" || author === "" || topic === "" ) {
            alert("Please fill in all fields");
            name.focus();
        } else {
            bookList.push(book);
            buildTable(bookList);
        }
    }

    function emptyModal() {
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("topic").value = "";
    }

    buildTable(bookList);
    handleAddEvent();
}

App();