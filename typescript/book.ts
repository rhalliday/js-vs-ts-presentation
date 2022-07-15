interface Author {
  firstName?: string;
  lastName: string;
}

interface Page {
  no: number;
  contents: string;
}

interface Chapter {
  no: number;
  title?: string;
  pages: Page[];
}

interface Book {
  authors: Author[];
  title: string;
  chapters: Chapter[];
}

const library: Book[] = [];

/**
 * Adds a book to the library
 * @param book book to add to library
 */
function addToLibrary(book: Book): void {
  library.push(book);
}

const unicornProject = {
  authors: [{ firstName: "Gene", lastName: "Kim" }],
  title: "The Unicorn Project",
  chapters: [
    {
      no: 1,
      pages: [
        {
          no: 1,
          contents: "This is definitely the first page of the book",
        },
      ],
    },
  ],
};

addToLibrary(unicornProject);
