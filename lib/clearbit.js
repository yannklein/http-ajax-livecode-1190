const authorization = 'Bearer sk_ed48abdb6ead7488d6531fc538332ffc';

// select the id clearbitEmail
const submitEmail = document.querySelector("#clearbitEmail");
// select the button with id clearbitSubmit
const submit = document.querySelector("#clearbitSubmit")

const displayInfo = (person) => {
  const name = document.querySelector("#userName");
  const email = document.querySelector("#userEmail");
  const bio = document.querySelector("#userBio");
  const location = document.querySelector("#userLocation");
  name.innerHTML = person.name.fullName
  email.innerHTML = person.email
  bio.innerHTML = person.bio
  location.innerHTML = person.location
};

const fetchClearBit = (emailInput) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${emailInput}`;
  fetch(url, {
    headers: {
      'Authorization': authorization
    }
  })
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    const person = data.person;
    displayInfo(person);
  })
};

const stalkSomeone = (event) => {
  console.log(event);
  // add event.preventDefault
  event.preventDefault();
  //fetch the api 
  fetchClearBit(submitEmail.value)
  //display the data to respective tds
}

//add a eventlistener to submit click
submit.addEventListener("click", stalkSomeone);


