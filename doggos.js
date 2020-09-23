// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// function addDoggo() {
//   // show loading spinner
//   fetch(BREEDS_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       const img = document.createElement("img");
//       img.src = data.message;
//       img.alt = "Cute doggo";

//       document.querySelector(".doggos").appendChild(img);

//       // stop showing loading spinner
//     });
// }

// document.querySelector(".add-doggo").addEventListener("click", addDoggo);

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");
const imgDog = document.querySelector(".doggos__img");
const spinner = document.querySelector(".spinner");

fetch(BREEDS_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    console.log(breedsArray);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });

select.addEventListener("change", function (event) {
  // console.log(event.target.value);
  // make url
  const selectURL = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  // show loading spinner

  // fetch from the API
  function selectAPI() {
    // spinner.classList.add("show"); Spinner starts (It's commented because fetch is very fast)
    fetch(selectURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        imgDog.src = data.message;
        // spinner.classList.remove("show"); Here we remove spinner
      });
  }
  selectAPI();
  // use the URL to change the current image

  // stop showing loading spinner
});
