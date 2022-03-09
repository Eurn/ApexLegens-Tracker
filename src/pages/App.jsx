import "../styles/App.css";
import Button from "../components/Button";
import InputText from "../components/InputText";
import banner from "../assets/Banner.png";

function App() {
  const charaId = {
    Sova: "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
    Breach: "5f8d3a7f-467b-97f3-062c-13acf203c006",
  };
  const handleSubmit = async () => {
    const name = document.getElementById("searchBar").value;
    var Uuid;
    for (const [key, value] of Object.entries(charaId)) {
      if (key === name) {
        Uuid = value;
        break;
      } else {
        alert("Le personnage n'existe pas");
        break;
      }
    }
    console.log(document.getElementById("searchBar").value);
    try {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${Uuid}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error("Error", e);
      console.log(e.status ?? 500);
    }
  };

  return (
    <div className="flex mt-3 w-full h-full ">
      <div className="flex flex-col justify-center items-center w-[1400px]">
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
            <div className="mb-2">
              <Button variant="contained" onClick={handleSubmit}>
                Search
              </Button>
            </div>
          </div>
        </div>
        {/* <p className="caption text-sm text-captionGray mt-4">Test</p> */}
      </div>
    </div>
  );
}

export default App;
