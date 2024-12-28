import Card from "./card";
import Footer from "./footer";
import Image from "next/image";
import picture from '/public/1708555168208.jpg';
import { Dock, DockIcon } from "./dock";
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function IntroCard(){
  return (
    <div className="flex justify-center">
  <div className="max-w-5xl bg-slate-50 p-4 rounded-xl shadow-lg">
      <div className="md:flex md:justify-center md:items-center">
        <Image
          alt=""
          width={250}
          height={250}
          src={picture}
          className="size-32 md:size-48 mt-8 md:m-6 object-cover border-3 border-black "
        />
        <div>
          <Card />
          
          <Footer />
        </div>
      </div>
  </div>
  </div>
  )
}
