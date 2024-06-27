import { useState } from "react";

export default function Player({ name, symbol }){
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
      // isEditing --> false
      setIsEditing((editing) => !editing);
    };
    // let btnCaption = "Edit";
    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) {
      playerName = <input type="text" required value={name} />;
      //   btnCaption = "Save";
    }

    return (
      <li>
        <span className="player">
          {/* {isEditing ? (
            <input type="text" required />
          ) : (
            <span className="player-name">{name}</span>
          )} */}
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    );
}