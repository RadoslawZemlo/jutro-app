import { useState, useEffect } from "react";
import Image from "next/image";
import img0 from "../public/img/jutro-img-0.png";
import img1 from "../public/img/jutro-img-1.png";
import img2 from "../public/img/jutro-img-2.png";
import icon0 from "../public/icon/icon-0.png";
import icon1 from "../public/icon/icon-1.png";
import icon2 from "../public/icon/icon-2.png";

export default function Home() {
  const [screen, setScreen] = useState(0);
  const [imgSrc, setImgSrc] = useState(img0);
  const [icon, setIcon] = useState(icon0);

  useEffect(() => {
    if (screen === 0) {
      setImgSrc(img0);
      setIcon(icon0);
    } else if (screen === 1) {
      setImgSrc(img1);
      setIcon(icon1);
    } else if (screen === 2) {
      setImgSrc(img2);
      setIcon(icon2);
    }
  }, [screen]);

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

  return (
    <div
      className={`w-screen h-screen text-white flex items-center transition ease-in-out duration-1500 ${
        screen === 0 && "bg-first"
      } ${screen === 1 && "bg-second"} ${screen === 2 && "bg-third"}`}
    >
      <div
        className={`p-2 cursor-pointer transition ease-in-out duration-1500 ${
          screen === 2 && "text-black"
        }`}
        onClick={handleLeft}
      >
        &lt;
      </div>

      <div className="mx-6 h-full overflow-hidden">
        <div
          className={`relative transition duration-1500 ${
            screen === 1 ? "translate-y-72 lg:translate-y-0" : ""
          }`}
        >
          <div className="mt-10">
            <Image src={icon} alt="icon-0" width={120} height={120} />
          </div>
          <h1
            className={`text-2xl font-bold py-5 transition ease-in-out duration-1500 ${
              screen === 2 && "text-black"
            }`}
          >
            {screen === 0 && "Pobierz aplikację"}
            {screen === 1 && "Porozmawiaj z lekarzem"}
            {screen === 2 && "Otrzymaj receptę"}
          </h1>

          <p
            className={`text-sm mb-6 transition ease-in-out duration-1500 ${
              screen === 2 && "text-black"
            }`}
          >
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
          <Image src={imgSrc} alt="img" />
        </div>
      </div>

      <div
        className={`p-2 cursor-pointer lg:px-12 transition ease-in-out duration-1500 ${
          screen === 2 && "text-black"
        }`}
        onClick={handleRight}
      >
        &gt;
      </div>
    </div>
  );
}
