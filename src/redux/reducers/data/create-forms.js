import createFormRow from "./../../../scenes/book-create/createFormRow";
import {TextInput, TextArea, CheckboxRow} from "./../../../services/forms/exports";
/**
 * 
 */
const bookFormJSON = {
  header: "Create Book",
  forms:
    [
      createFormRow([TextInput("title", "book title"), TextInput("ISBN", "#########")]),
      createFormRow([TextArea("Summary", 4)]),
      createFormRow([CheckboxRow("genre", ["Action", "Paction", "Ration"])])
    ]
}
/**
 * 
 */
const genreFormJSON = {
  header: "Create Genre",
  forms:
    [
      createFormRow([TextInput("name", "genre name")])
    ]
}
/**
 * 
 */
const authorFormJSON = {
  header: "Create Author",
  forms:
    [
      createFormRow([TextInput("first name", "John"), TextInput("last name", "Doe")])
    ]
}
const createForms = [bookFormJSON, authorFormJSON, genreFormJSON];
export {
  createForms
}