import { TextArea, TextInput } from "./../../services/forms/exports";
import createFormRow from "./createFormRow";
var bookFormJSON = {
  header: "Create Book",
  forms:
    [
      createFormRow([TextInput("title", "text", "book title"), TextInput("ISBN", "text", "#########")]),
      createFormRow([TextArea("Summary", 4)]),
    ]
};
var genreFormJSON = {
  header: "Create Genre",
  forms:
    [
      createFormRow([TextInput("name", "text", "genre name")])
    ]
};
var authorFormJSON = {
  header: "Create Author",
  forms:
    [
      createFormRow([TextInput("first name", "text", "John"), TextInput("last name", "text", "Doe")])
    ]
};


var createForms = [authorFormJSON, bookFormJSON, genreFormJSON];

export {
  createForms
}