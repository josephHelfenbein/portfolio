import Image from 'next/image';
import picture from '/public/1708555168208.jpg';
export default function Card( ){
    return (
<article className="rounded-xl border border-gray-600 bg-black p-6">
  <div className="flex items-center gap-5">
    <Image
      alt=""
      width={250}
      height={250}
      src={picture}
      className="size-16 rounded-full object-cover"
    />

    <div>
      <h3 className="text-2xl font-semibold tracking-tighter">Joseph J Helfenbein</h3>
    </div>
  </div>

      <div className="block h-full rounded-lg border border-gray-800 p-4 m-3">

        <p className="mt-1 text-s font-medium text-gray-300">
        I'm a student at The City College of New York studying Computer Science and Physics. I have experience in full-stack web application development, JavaScript, TypeScript, React, Next.js, Three.js, C++, C#, and Python from my projects, and additionally have developed a game on Steam using Unreal Engine and C++. I'm constantly trying to learn new things and broaden my experience.
        </p>
      </div>

</article>

    )
}
