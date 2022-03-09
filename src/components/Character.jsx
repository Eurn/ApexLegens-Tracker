import React from "react";
import Button from "./Button";

function Character(props) {
  //   const localFavorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  //   const [favorites, setFavorites] = useState(localFavorites);
  //   useEffect(() => {
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }, [favorites]);

  const addFav = (character) => {
    // setFavorites(favorites.concat([character]));
  };
  const charac = props.value;
  if (Object.keys(charac).length !== 0) {
    console.log(charac);
    return (
      <div>
        <h1 className="text-[32px] flex items-center justify-between mb-8">
          <strong>{charac.data.displayName}</strong>
          <img
            src={charac.data.displayIconSmall}
            alt="icon-charac"
            height={100}
            width={100}
          />
        </h1>
        <p> Description : {charac.data.description}</p>
        <ul className="ml-5 mb-4 mt-3 text-sm list-disc">
          <h2 className="text-[16px] text-gray">
            <strong>Spells:</strong>
          </h2>
          {charac.data.abilities.map((e) => (
            <li className="mt-4">
              {" "}
              <strong>{e.displayName} : </strong>
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
        <Button variant="outline" onClick={addFav(charac.data.uuid)}>
          Add To Favorite
        </Button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Character;
