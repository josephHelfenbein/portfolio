import Card from "./card";
import Footer from "./footer";
import Image from "next/image";
import picture from '/public/1708555168208.jpg';
import { useEffect, useState } from "react";


export default function IntroCard(){
  const [onMobile, setOnMobile] = useState(false);
  useEffect(()=>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    setOnMobile(true);
  })
  return (
  <div>
    {!onMobile &&
      <div className="flex justify-center items-center">
        <Image
          alt=""
          width={250}
          height={250}
          src={picture}
          className="size-42 m-8 object-cover border-3 border-black "
        />
        <div>
          <Card />
          <Footer />
        </div>
      </div>
    }
    {onMobile &&
      <div>
        <Image
          alt=""
          width={250}
          height={250}
          src={picture}
          className="size-32 mt-8 object-cover border-3 border-black "
        />
        <div>
          <Card />
          <Footer />
        </div>
      </div>
    }
  </div>
  )
}