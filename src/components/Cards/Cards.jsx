import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAddToSidebar}) => {
   let [cards,setCards]=useState([])

    useEffect(()=>{
        fetch('cards.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="w-3/4 grid grid-cols-3 gap-x-2 gap-y-2">
            {
                cards.map(card=><Card key={cards.credits} card={card} handleAddToSidebar={handleAddToSidebar}></Card>)
            }
        </div>
    );
};

export default Cards;