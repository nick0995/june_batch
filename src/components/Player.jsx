import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    // isEditing --> false
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setPlayerName(event.target.value);
  };
  // let btnCaption = "Edit";
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    //   btnCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {/* {isEditing ? (
            <input type="text" required />
          ) : (
            <span className="player-name">{name}</span>
          )} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}