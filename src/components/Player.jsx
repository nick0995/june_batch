import { useState } from "react";

export default function Player({ name, symbol }){
    const [isEditing, setIsEditing] = useState(false);
    
    const handleEditClick = () => {
        console.log('edit clicked')
    }

    return (
        <li>
          <span className="player">{name}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button>Edit</button>
        </li>
    )
}