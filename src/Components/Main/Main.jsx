import React from "react";
import { cities } from "../../data";
import Card from "./Card";
import "./Main.css"
function Main() {
  return (
    <main className="card-container">
      {cities.map((e,index) => {
        // return( <Card key={index} sehirler={e.title} foto={e.image} aciklama={e.description} />);
        // return( <Card key={index} sehirobje={e} />);
        return( <Card key={index} {...e} />);
      })}
    </main>
  );
}
export default Main;
