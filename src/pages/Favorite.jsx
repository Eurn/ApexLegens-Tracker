import Checkbox from "../components/Checkbox";
// import { useState } from "react";

const Favorite = () => {
  //   const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  //   const [fav, setfav] = useState(favorites);
  return (
    <div className="favorite">
      <div className="flex mt-3 w-full h-full ">
        <div className=" rounded  flex flex-col justify-center items-center bg-backgroundWelcomePage">
          <h1 className="text-xl font-roboto text-white text-center mb-12 px-12">
            {/* <img className="rounded" src={banner} alt="profile pic" /> */}
          </h1>
        </div>
        <div className="bg-white   flex  flex-col  rounded w-full p-4">
          <h2 className="text-[16px] text-gray">
            <strong>TEzst</strong>
          </h2>
          <ul className="ml-5 mb-4 mt-3 text-sm list-disc">
            <li>
              TEzst <strong>TEzst</strong> TEzst
            </li>
            <li>
              TEzst <strong>TEzst</strong>
            </li>
          </ul>
          <div className="border-solid border rounded border-blueGreen synopsis p-4  mb-5 ">
            <p className="mb-2 text-sm text-textGray">
              TEzst <strong>TEzst</strong> TEzst <strong>TEzst</strong>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-textGray text-sm mb-2">
              <strong>AccelRare</strong> TEzst <strong>MedVir InsideTM,</strong>
              TEzst{" "}
            </p>
            <div className="mb-2">
              <Checkbox type="checkbox" onChange={(e) => {}}>
                <p className="text-textGray text-sm">
                  TEzst <strong>TEzst</strong>
                </p>
              </Checkbox>
            </div>
            <div className="mb-2">
              <Checkbox type="checkbox" onChange={(e) => {}}>
                <p className="text-textGray text-sm">
                  TEzst{" "}
                  <strong className="underline underline-offset-1">
                    TEzst
                  </strong>
                </p>
              </Checkbox>
            </div>
          </div>

          <p className="caption text-sm text-captionGray mt-4">TEzst</p>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
