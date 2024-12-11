// Prodotti.js
import React from "react";
import Card from "../../components/card"; // Assicurati che il path sia corretto

export default function Prodotti() {
  const diglets = [
    {
      id: 1,
      country: "Italia",
      digletTypes: [
        {
          type: "Diglett Classico",
          photo: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png",
        },
      ],
    },
    {
      id: 2,
      country: "Giappone",
      digletTypes: [
        {
          type: "Diglett di Montagna",
          photo: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050_f2.png",
        },
      ],
    },
    {
      id: 3,
      country: "Stati Uniti",
      digletTypes: [
        {
          type: "Diglett Selvatico",
          photo: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/shiny-alolan-diglett-in-pokemon-go.jpg",
        },
      ],
    },
  ];

  return (
    <section className="prodotti">
      <h1>Ecco i nostri Diglet</h1>

      <div>
        {diglets.map((diglet) => (
          <Card key={diglet.id} diglet={diglet} />
        ))}
      </div>
    </section>
  );
}
