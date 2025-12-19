
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json`;

fetch(API_URL)
   .then(response => response.json())
   .then(data => {
      console.log(data);
      console.log(data.nomCommercial);

      // Section hero
      const heroContainer = document.getElementById("hero-content");
      // console.log(heroContainer);
      heroContainer.innerHTML = `
            <h1>${data.nomCommercial}</h1>
            <p>${data.phraseAccroche}</p>
            <button>${data.texteAppelAction}</button>
         `;
      // dans la hero section 
      // chercher le container 


      // Section Avantages
      const avantagesContent = document.getElementById("containeravantages");
      console.log(data.avantagesClients);

      data.avantagesClients.forEach(avantage => {
         console.log(avantage);

         const test = document.createElement("p");
         test.textContent = `${avantage}`;
         avantagesContent.appendChild(test);
      });


      // Section Produits
      const produitcontainer = document.getElementById("collectioncontainer");
      console.log(data.produits);



      data.produits.forEach(produit => {
         console.log(produit);

         // Créer une carte
         const carte = document.createElement("div");
         carte.classList.add("carte-produit");

         // Contenu HTML de la carte
         carte.innerHTML = `
            <img src="${produit["image-url"]}"
            <h2>${produit.nom}</h2>
            <p>${produit.description}</p>`;

         // tableau[nombre]
         // objet.propriete
         // dictionnaire["propriete"]
         // Ajouter la carte dans le container
         produitcontainer.appendChild(carte);
      });


      // section services
      const servicesContainer = document.getElementById("servicescontent");
      console.log(data.services);

      data.services.forEach(service => {
         console.log(service);

         // Créer une carte
         const carte = document.createElement("div");
         carte.classList.add("servicesCard");

         carte.innerHTML = `
            <h2>${service.nom}</h2>
           <p>${service.description}</p>`;

         console.log(servicesContainer);

         servicescontent.appendChild(carte);
      });


      // section notes
      const notescontainer = document.getElementById("notes")
      console.log(data.temoignages); //Ceci est un tableau, donc on fait une boucle pour chaque element (loïc)

      // pour chaque temoignage
      data.temoignages.forEach(temoignages => {
         console.log(temoignages);
         // creer une carte
         const carte = document.createElement("div");
         carte.classList.add("notescard");
         // ajouter innerhtml
         carte.innerHTML = `
            <h3>${temoignages.prenom}</h3>
           <p>${temoignages.typeExperience}</p>
           <p>${temoignages.commentaire}</p>`;
         // mettre la carte dans le container
         console.log(notescontainer);
      notescontainer.appendChild(carte)

      });
   })
