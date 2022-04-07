/* definizione variabili */
let teamMember = [
    {
        image: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        image: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        image: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        image: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        image: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer"
    },
    {
        image: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic Designer"
    },
];
let container = document.querySelector(".team-container");
/* costruzione struttura Dom */

let teamCard = document.createElement("div");
teamCard.setAttribute("class", "team-card");
/* creazione evento aggiungi membro */
let addMemberButton = document.getElementById("addMemberButton").addEventListener("click", addMember);
/* richiamo funzione per generare i membri */
generateMember();

/* inserimento elementi nel DOM */
function generateMember(){
    container.innerHTML = " ";
    for(let i=0; i<teamMember.length; i++){
        container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="img/${teamMember[i].image}"
                    alt="${teamMember[i].name}"
                />
            </div>
            <div class="card-text">
                <h3>${teamMember[i].name}</h3>
                <p>${teamMember[i].role}</p>
            </div>
        </div>
        `;
    }

}


/* funzione aggiungi membro */
function addMember(){
    let newMemberName = document.getElementById("name").value;
    let newMemberRole = document.getElementById("role").value;
    let newMemberImage = document.getElementById("image").value;
    let newMember = {
        image: newMemberImage,
        name: newMemberName,
        role: newMemberRole
    }
    teamMember.push(newMember);
    generateMember();
}