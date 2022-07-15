const libraryJS = [];

/**
 * Check if the page is valid
 * @param {object} page page to validate
 * @returns {boolean} true if page is valid
 */
function isValidPage(page) {
  return typeof page.no === "string" && typeof page.contents === "string";
}

/**
 * Check if this is a valid chapter
 * @param {object} chapter a chapter to validate
 * @returns {boolean} true if the chapter is valid
 */
function isValidChapter(chapter) {
  if (typeof chapter.no !== "number") {
    return false;
  }
  if (
    typeof chapter.title !== "string" &&
    typeof chapter.title !== "undefined"
  ) {
    return false;
  }
  if (!Array.isArray(chapter.pages)) {
    return false;
  }
  return chapter.pages.all((page) => isValidPage(page));
}

/**
 * Check if this is a valid author
 * @param {object} author an author to validate
 * @returns {boolean} true if the author is vaild
 */
function isValidAuthor(author) {
  if (typeof author.lastName !== "string") {
    return false;
  }
  return (
    typeof author.firstName === "string" ||
    typeof author.firstName === "undefined"
  );
}

/**
 * Check if the book is valid
 * @param {object} book book to validate
 * @returns {boolean} true if book is valid, false otherwise
 */
function isValidBook(book) {
  if (typeof book !== "object") {
    return false;
  }
  if (!Array.isArray(book.authors)) {
    return false;
  }
  if (book.authors.any((author) => !isValidAuthor(author))) {
    return false;
  }
  if (typeof book.title !== "string") {
    return false;
  }
  if (!Array.isArray(book.chapters)) {
    return false;
  }
  return book.chapters.all((chapter) => isValidChapter(chapter));
}

/**
 * Adds a book to the library
 * @param {object} book book to add to the library
 */
function addToLibraryJS(book) {
  if (!isValidBook(book)) {
    throw Error("book is invalid");
  }
  libraryJS.push(book);
}

const pheonixProject = {
  authors: [{ firstName: "Gene", lastName: "Kim" }],
  title: "The Pheonix Project",
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

addToLibrary(pheonixProject);
