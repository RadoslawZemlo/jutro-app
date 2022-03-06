import { useState } from "react";
import Image from "next/image";
import img0 from "../public/img/jutro-img-0.png";

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
    <div className="bg-[#26c299] w-screen h-screen text-white flex items-center">
      <div className="p-2 cursor-pointer" onClick={handleLeft}>
        &lt;
      </div>

      <div className="mx-6 h-full overflow-hidden">
        <h1 className="text-2xl font-bold py-5">Pobierz aplikację</h1>

        <p className="text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </p>
        <input
          className="cursor-pointer py-2 px-4 bg-[#0a40a1]"
          type="submit"
          value="Pobierz aplikację"
        />

        <div className="w-full relative top-28">
          <Image src={img0} alt="img" />
        </div>
      </div>

      <div className="p-2 cursor-pointer" onClick={handleRight}>
        &gt;
      </div>
    </div>
  );
}
