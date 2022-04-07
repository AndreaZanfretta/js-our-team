/* definizione variabili */
let teamMember = [
    {
        image: "img/wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        image: "img/angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        image: "img/walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        image: "img/angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        image: "img/scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer"
    },
    {
        image: "img/barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic Designer"
    },
];
let container = document.querySelector(".team-container");
/* costruzione struttura Dom */

let teamCard = document.createElement("div");
teamCard.setAttribute("class", "team-card");

/* inserimento elementi nel DOM */
for(let i=0; i<teamMember.length; i++){
    container.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${teamMember[i].image}"
                alt="${teamMember[i].name}"
            />
        </div>
        <div class="card-text">
            <h3>${teamMember[i].name}</h3>
            <p>${teamMember[i].role}</p>
        </div>
    </div>
    `

}

/* creazione evento */
/* let addMemberButton = document.getElementById("addMemberButton").addEventListener("click", addMember); */