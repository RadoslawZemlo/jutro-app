import { useState } from "react";
import Image from "next/image";
import img0 from "../public/img/jutro-img-0.png";
import icon0 from "../public/icon/icon-0.png";

export default function Home() {
  const [screen, setScreen] = useState(0);

  const handleLeft = () => {
    if (screen === 0) {
      setScreen(2);
    } else {
      setScreen(screen - 1);
    }
  };

  const handleRight = () => {
    if (screen === 2) {
      setScreen(0);
    } else {
      setScreen(screen + 1);
    }
  };

  console.log(screen);

  return (
    <div
      className={`w-screen h-screen text-white flex items-center transition ease-in-out duration-1500 ${
        screen === 0 && "bg-first"
      } ${screen === 1 && "bg-second"} ${screen === 2 && "bg-third"}`}
    >
      <div className="p-2 cursor-pointer" onClick={handleLeft}>
        &lt;
      </div>

      <div className="mx-6 h-full overflow-hidden">
        <div
          className={`relative transition duration-1500 ${
            screen === 1 ? "translate-y-72 lg:translate-y-0" : ""
          }`}
        >
          <div className="mt-10">
            <Image src={icon0} alt="icon-0" width={120} height={120} />
          </div>
          <h1 className="text-2xl font-bold py-5">Pobierz aplikację</h1>

          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
          <input
            className={`cursor-pointer py-2 px-4 transition-all ease-in-out duration-1500 ${
              screen === 1 ? "bg-first" : "bg-second"
            }`}
            type="submit"
            value="Pobierz aplikację"
          />
        </div>

        <div
          className={`w-full relative top-36 transition-all duration-1500 ${
            screen === 1 ? "translate-y-[-900px] lg:translate-y-[-550px]" : ""
          }`}
        >
          <Image src={img0} alt="img" />
        </div>
      </div>

      <div className="p-2 cursor-pointer" onClick={handleRight}>
        &gt;
      </div>
    </div>
  );
}
