import "../styles/App.css";
import Button from "../components/Button";
import InputText from "../components/InputText";
import banner from "../assets/Banner.png";
import Character from "../components/Character";
import AllCharacter from "../assets/AllCharacter";
import { useState } from "react";

function App() {
  const [character, setcharacter] = useState({});
  const handleSubmit = async () => {
    const name = document.getElementById("searchBar").value;
    var Uuid;
    for (const [key, value] of Object.entries(AllCharacter)) {
      if (key === name) {
        Uuid = value;
        try {
          const response = await fetch(
            `https://valorant-api.com/v1/agents/${Uuid}`,
            {
              method: "GET",
            }
          );
          setcharacter(await response.json());
        } catch (e) {
          console.error("Error", e);
          console.log(e.status ?? 500);
        }
        break;
      }
    }
    if (Uuid === undefined) {
      alert("Le personnage n'existe pas");
    }
  };
  //   const RandomSubmit = async () => {
  //     var Uuid;
  //     var rand = Math.floor(Math.random() * (17 - 0)) + 0;
  //     console.log(rand);
  //     const list = [
  //       "Breach",
  //       "Sova",
  //       "Raze",
  //       "Chamber",
  //       "KayO",
  //       "Skye",
  //       "Cypher",
  //       "Killjoy",
  //       "Viper",
  //       "Phoenix",
  //       "Astra",
  //       "Brimstone",
  //       "Neon",
  //       "Yoru",
  //       "Sage",
  //       "Reyna",
  //       "Omen",
  //       "Jett",
  //     ];
  //     for (const [key, value] of Object.entries(AllCharacter)) {
  //       Uuid = list[rand];
  //       try {
  //         const response = await fetch(
  //           `https://valorant-api.com/v1/agents/${Uuid}`,
  //           {
  //             method: "GET",
  //           }
  //         );
  //         setcharacter(await response.json());
  //       } catch (e) {
  //         console.error("Error", e);
  //         console.log(e.status ?? 500);
  //       }
  //       break;
  //     }
  //   };

  return (
    <div className="flex mt-3 w-full h-full ">
      <div className="flex flex-col  w-[1400px]">
        <h1 className="px-12">
          <img className="rounded" src={banner} alt="Banner Valorant" />
        </h1>
      </div>
      <div className="bg-white flex flex-col rounded w-full p-4 mr-12">
        <h2 className="text-[16px] text-gray">
          <strong>Recherche le personnage de Valorant de ton choix</strong>
        </h2>
        <ul className="ml-5 mb-4 mt-3 text-sm list-disc">
          <li>
            Entre le <strong>nom</strong> du personnage et c'est parti
          </li>
        </ul>
        <div className="border-solid border rounded border-red synopsis p-4  mb-5 ">
          <p className="text-sm text-textGray">
            <strong>Attention</strong> l'API ne trouve pas s'il n'y a pas de
            Majuscule au début{" "}
          </p>
        </div>
        <div className="mb-4">
          <div className="flex flex-row mb-4"></div>
          <div>
            <div className="mb-4">
              <InputText
                type="text"
                placeHolder="Entrer le nom du joueur"
                rounded={false}
                cross={true}
                fullWidth={true}
              />
            </div>
            <div className="mb-2 flex justify-between">
              <Button variant="contained" onClick={handleSubmit}>
                Search
              </Button>
              <Button variant="contained">Random character</Button>
            </div>
          </div>
        </div>
        <Character value={character} />
      </div>
    </div>
  );
}

export default App;
