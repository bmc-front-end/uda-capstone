// js files

import { handleSubmit, getData } from "./js/handleSubmit";
import { updateUI } from "./js/updateUI";
import { validateInput } from "./js/formValidation";

// sass files
import './styles/reset.scss';
import './styles/layout.scss';
import './styles/main.scss';


// addEventListener for "get info button"
document.getElementById("submit").addEventListener("click", handleSubmit);

export { handleSubmit, validateInput, getData, updateUI };