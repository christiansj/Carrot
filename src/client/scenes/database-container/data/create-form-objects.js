import { TextArea, TextInput } from "client/services/forms/exports";
import formRow from "./../components/forms/form-row";
var bookFormJSON = {
  header: "Create Book",
  forms:
    [
      formRow([TextInput("title", "text", "book title"), TextInput("ISBN", "text", "#########")]),
      formRow([TextArea("Summary", 4)]),
    ]
};
var genreFormJSON = {
  header: "Create Genre",
  forms:
    [
      formRow([TextInput("name", "text", "genre name")])
    ]
};
var authorFormJSON = {
  header: "Create Author",
  forms:
    [
      formRow([TextInput("first name", "text", "John"), TextInput("last name", "text", "Doe")])
    ]
};


var createForms = [authorFormJSON, bookFormJSON, genreFormJSON];

export {
  createForms
}