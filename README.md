# JS Pagination

## Usage

```js
import { Pagination } from "./js-pagination.js";

// Initialize the Pagination.
const pagination = new Pagination({
    count_per_page: 10,
});

// Event listener for `change`, `next`, `previous`, `goto`.
pagination.addEventListener("change", () => {
    console.log(`Current Page: ${pagination.current_page}`);
});

// Set total count for 30 and calculates the available pages.
pagination.update(30);

// Available information.
console.log(pagination.current_page); // Output: 1
console.log(pagination.total_pages); // Output: 3

// Operations.
pagination.next(); // 2
pagination.next(); // 3
pagination.next(); // 3 (no-op because 3 is the latest page)

pagination.previous(); // 2
pagination.previous(); // 1
pagination.previous(); // 1 (no-op because 1 is the first page)

pagination.goto(3); // 3
pagination.goto(4); // 3 (no-op because 3 is the latest page)
```

## Dev

`index.html` with the following commands.

```
$ npm install -g http-server
$ http-server -c-1 -p 8081
```
