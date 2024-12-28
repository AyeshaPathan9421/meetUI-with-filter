
const participants = [
    { id: 1, name: "Rucha" },
    { id: 2, name: "Smith" },
    { id: 3, name: "Sharlin" },
    { id: 4, name: "Aadya" },
    { id: 5, name: "Anuda" },
    { id: 6, name: "Nishu" },
  ];
  
  
  function renderParticipants(filteredParticipants) {
    const grid = document.getElementById("participantGrid");
    grid.innerHTML = ""; 

    filteredParticipants.forEach((participant) => {
      const div = document.createElement("div");
      div.classList.add("participant");
      div.innerHTML = `<h2>${participant.name}</h2>`;
      grid.appendChild(div);
    });
  }
  
  
  renderParticipants(participants);
 
  document.getElementById("searchBar").addEventListener("input", (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredParticipants = participants.filter((participant) =>
      participant.name.toLowerCase().includes(searchQuery)
    );
    renderParticipants(filteredParticipants);
  });
  