const authorization = 'Bearer sk_ed48abdb6ead7488d6531fc538332ffc';

//select an input and submit button table and form and 4 tds
const input = document.querySelector('#clearbitEmail');
const submit = document.querySelector('#clearbitSubmit');
const form = document.querySelector('#clearbitForm');
const name = document.querySelector('#userName');
const email = document.querySelector('#userEmail');
const bio = document.querySelector('#userBio');
const location = document.querySelector('#userLocation');

const displayInfo = (person) => {
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  bio.innerText = person.bio;
  location.innerText = person.location;
};

const fetchClearbit = (email) => {
  const baseURL = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(baseURL, { headers: { Authorization: authorization }})
    .then(response => response.json())
    .then((data) => {
      displayInfo(data.person);
    });
};

const stalkSomeone = (event) => {
  //prevent default
  event.preventDefault();
  console.log(event);
  //fetch the api
  fetchClearbit(input.value);
};

//listen to submit on the form 
form.addEventListener('submit', stalkSomeone)
