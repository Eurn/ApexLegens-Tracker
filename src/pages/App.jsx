import '../styles/App.css';
// import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import InputText from '../components/InputText';
import banner from '../assets/banner.jpg'


function App() {
    const handleSubmit = async () => {
        console.log(document.getElementById("searchBar").value);
		const httpHeaders = new Headers();
		httpHeaders.append('TRN-Api-Key', "2d021751-1ae1-49ff-b9f3-9871bd0e4d2d");
        httpHeaders.append('Content-Type', 'application/json');

		try {
		  const response = 	await fetch("https://public-api.tracker.gg/v2/apex/standard/profile/origin" + `/${document.getElementById("searchBar").value}`.toString(), {
				method: 'GET',
				headers: httpHeaders,
      });
      const data = await response.json()
      return data
		} catch (e) {
		console.error('Error', e);
		console.log(e.status ?? 500)
		}
  };
  
    return (
        <div className="flex mt-3 w-full h-full ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="px-12">
                    <img className="rounded" src={banner} alt="Banner apex"/>
                </h1>
            </div>
            <div className="bg-white flex flex-col rounded w-full p-4 mr-12">
                <h2 className="text-[16px] text-gray">
                    <strong>Recherche le joueur d'apex de ton choix</strong>
                </h2>
                <ul className="ml-5 mb-4 mt-3 text-sm list-disc">
                    <li>
                        Entre d'abord son <strong>nom</strong> et c'est parti
                    </li>
                </ul>
                <div className="border-solid border rounded border-red synopsis p-4  mb-5 ">
                    <p className="text-sm text-textGray">
                        <strong>Attention</strong> il est possible que l'API ne trouve pas vraiment le bon joueur{' '}
                    </p>
                </div>
                <div className="mb-4">
                    {/* <p className="text-textGray text-sm mb-2">
                        <strong>TEzst</strong> TEzst{' '}
                        <strong>TEzst,{' '}</strong>
                        TEzst{' '}
                    </p>
                    <div className="mb-2">
                        <Checkbox
                            type="checkbox"
                            onChange={(e) => {}}
                        >
                            <p className="text-textGray text-sm">
                                TEzst <strong>TEzst</strong>
                            </p>
                        </Checkbox>
                    </div>
                    <div className="mb-2">
                        <Checkbox
                            type="checkbox"
                            onChange={(e) => {}}
                        >
                            <p className="text-textGray text-sm">
                                TEzst{' '}
                                <strong className="underline underline-offset-1">
                                  TEzst
                                </strong>
                            </p>
                        </Checkbox>
                    </div> */}
                    <div>
                        <div className='mb-2'>
                            <InputText
                                type="text"
                                placeHolder='Entrer le nom du joueur'
                                rounded={false}
                                cross={true}
                                fullWidth={true}
                            />
                        </div>
                        <div className='mb-2'>
                        <Button
                            variant='contained'
                            onClick={handleSubmit}
                        >
                        Search
                        </Button>
                        </div>
                    </div>

            </div>
                <p className="caption text-sm text-captionGray mt-4">Test</p>
            </div>
        </div>
      
    );
}

export default App;
