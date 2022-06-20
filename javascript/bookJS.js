const libraryJS = [];

function isValidPage(page) {
  return typeof page.no === "string" && typeof page.contents === "string";
}

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

function isValidAuthor(author) {
  if (typeof author.lastName !== "string") {
    return false;
  }
  return (
    typeof author.firstName === "string" ||
    typeof author.firstName === "undefined"
  );
}

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
    false;
  }
  if (!Array.isArray(book.chapters)) {
    throw Error("book needs an array of chapters");
  }
  return book.chapters.all((chapter) => isValidChapter(chapter));
}

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
