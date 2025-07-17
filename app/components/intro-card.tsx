import Card from "./card";
import Footer from "./footer";
import Image from "next/image";
import picture from '/public/1708555168208.jpg';
import { Dock, DockIcon } from "./dock";
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function IntroCard(){
  return (
    <div className="flex justify-center">
      <div className="md:flex md:justify-center p-10 md:items-center backdrop-blur-lg shadow-lg rounded-xl">
        <div>
          <Card />
          <Footer />
        </div>
      </div>
  </div>
  )
}
