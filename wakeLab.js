const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

const chargerActivites = async () => {
  try {
    const response = await api.get("/activites");
    // console.log(response.data)
    return response.data;
  } catch (error) {
  
    console.error(error.response?.data?.message ?? "API inaccessible");
    return [];
  }
};

chargerActivites()



let nameForm =document.getElementById("nameForm");

nameForm.addEventListener("submit", ajout =>{
  ajout.preventDefault();
  let user_name = document.getElementById("username").value;
  window.localStorage.setItem("name", user_name);
})
console.log(localStorage.getItem("name"));


let cards = document.getElementById("cards");

let activity_card = document.createElement("div");
activity_card.classList.add("activity_card")

cards.appendChild(activity_card);

let card_title = document.createElement("h4")
