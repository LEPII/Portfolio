import React from 'react'
import Madrid from "../assets/Personal/madrid.png"
import Colorado from "../assets/Personal/colorado.png";
import NewOrleans from "../assets/Personal/newOrleans.png";
import Winterfell from "../assets/Personal/winterfell.png";
import "../style/personal.css"

const Personal = () => {

  const personals = [
    { place: "Madrid - 2018", img: Madrid, atl: "Madrid" },
    { place: "Colorado - 2020", img: Colorado, atl: "Colorado" },
    { place: "Winterfell - 270AC", img: NewOrleans, atl: "NewOrleans" },
    { place: "New Orleans - 2021", img: Winterfell, atl: "Winterfell" },
  ];

  return <div className="personal__container"></div>;
}

export default Personal
