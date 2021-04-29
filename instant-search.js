/* Loaded with <script type="module"> */
import InstantSearch from "./InstantSearch.js";

const searchUsers = document.querySelector("#searchUsers");
const instantSearchUsers = new InstantSearch(searchUsers, {
  searchUrl: new URL(
    "/projects/instant-search/search.php",
    window.location.origin
  ),
  queryParam: "q",
  responseParser: (responseData) => {
    return responseData.results;
  },
  templateFunction: (result) => {
    return `
            <div class="instant-search__title">${result.firstName} ${result.lastName}</div>
            <p class="instant-search__paragraph">${result.occupation}</p>
        `;
  }
});
