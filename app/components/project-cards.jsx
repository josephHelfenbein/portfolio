import { useState, useEffect } from "react";
export function PhysicsProjectCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <img src="./physicssandbox.png" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">Physics Sandbox</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          
          <h5 className="text-sm tracking-tighter">JavaScript, WebGL, GLSL, Bootstrap, Git<br/> | <a target="_blank" className="cardLink" href="https://github.com/josephHelfenbein/physics-sandbox">GitHub</a> | <a target="_blank" className="cardLink" href="https://josephhelfenbein.github.io/physics-sandbox/">Link</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">June 2024 - July 2024</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">A rigid body physics engine with simulated cubes and spheres. It has real-time raytraced shadows and a Blinn-Phong shader using WebGL.</p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function MaterialProjectCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <h3 className="text-xl font-semibold tracking-tighter">Material Viewer</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h5 className="text-sm tracking-tighter">C++, OpenGL, GLSL, Git<br/> | <a target="_blank" className="cardLink" href="https://github.com/josephHelfenbein/material-viewer">GitHub</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">September 2024 - Current</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">Currently developing a PBR material viewer desktop and web application for easy previewing of PBR materials.</p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function GameRecommendCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <img src="./gamerecommend.svg" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">GameRecommend AI</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h5 className="text-sm tracking-tighter">Next.js, React, TypeScript, Tailwind CSS <br /> | <a target="_blank" className="cardLink" href="https://github.com/josephHelfenbein/gamerecommend-ai">GitHub</a> | <a target="_blank" className="cardLink" href="https://gamerecommend.vercel.app/">Link</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">United Hacks V3 submission (weekend)</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">Utilizes AI to find similar games to any game you like. All you need to do is enter in a game you like, press the button, and the AI will return 5 games it thinks you will like, along with reasons why.</p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function TravelAmuletProjectCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <img src="./travelamulet-icon.png" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">TravelAmulet</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h5 className="text-sm tracking-tighter">Next.js, React, TypeScript, MySQL, Bootstrap<br/> | <a target="_blank" className="cardLink" href="https://github.com/josephHelfenbein/travel-amulet">GitHub</a> | <a target="_blank" className="cardLink" href="https://travelamulet.vercel.app/">Link</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">TiDB Hackathon 2024 submission <br />(1 month)</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">Lets users take a quiz for travel preferences, and then uses TiDB Vector Search to return a list of matching countries, each with an overview and a list of top cities, which have nearby hotels and flight prices.</p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function ScienceProjectCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <h3 className="text-xl font-semibold tracking-tighter">TensorFlow Coronaviruses</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h5 className="text-sm tracking-tighter">Python, TensorFlow, Matplotlib<br/> | <a target="_blank" className="cardLink" href="https://github.com/josephHelfenbein/tf-coronaviruses">GitHub</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">September 2022 - April 2023</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">A very simple project I did for the Long Island Science Congress competition that tests whether a convolutional neural network or recurrent neural network is better for classification of coronavirus RNA, winning a Meritorious Award.  </p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function HorrorGameProjectCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <img src="./scpicon.jpg" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">SCP: Hours To Go</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h5 className="text-sm tracking-tighter">C++, Unreal Engine 5, Steamworks API<br/> | <a target="_blank" className="cardLink" href="https://store.steampowered.com/app/2795370/SCP_Hours_to_Go/">Link</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">March 2023 - June 2024</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">A survival horror escape room game based on the SCP Foundation Wiki. A catastrophic event shuts down the facility, leaving you alone in the security room. Solve puzzles and contain loose SCPs to escape, or survive for as long as possible for a high score. </p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function FightingGameProjectCard(){
  return (
    <div className="flex justify-center m-8">
    <article className="w-4xl">
    <img src="./rhythmofknighticon.png" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">Rhythm of the Knight</h3>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h5 className="text-sm tracking-tighter">C#, Unity Engine, Photon Engine<br/> | <a target="_blank" className="cardLink" href="https://themangoeffect.itch.io/rhythm-of-the-knight">Link</a></h5>
        </div>
        <h5 className="text-sm tracking-tighter">March 2021 - May 2021</h5>
      </div>
      <div className="block h-full rounded-lg p-2">
          <div className="p-3 text-sm font-medium text-gray-900">
            <p className="p-2">A rhythm-based retro-style fighting game. Use a sword and shield and fly around the map, fighting your nemesis on the rhythm. When the rhythm bar hits green, attack! Online 1v1 is also available, just write a code in the room ID for the game room. </p>
          </div>
      </div>
    </article>
  </div>
  )
}
export function E3ProjectCard( ){
  return (
    <div className="flex justify-center m-3">
      <article className="w-4xl">
        <div className="flex items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold tracking-tighter">Software Engineer, Intern</h3>
            <h5 className="text-s tracking-tighter">E3 Biogenetics</h5>
          </div>
          <h5 className="text-s tracking-tighter ">July 2022 - September 2022</h5>
        </div>
        <div className="block h-full rounded-lg p-2">
            <div className="p-3 text-s font-medium text-gray-900">
              <li className="p-2">Created a daily survey web application using JavaScript and PHP, garnering 50 daily users</li>
              <li className="p-2">Implemented an innovative account system using PHP and SQL with a MySQL database, integrating with the survey application with graphing of the user’s previous answers using phpChart</li>
              <li className="p-2">Executed the integration of a language toggle feature using JSON and JavaScript, increasing accessibility</li>
            </div>
        </div>
      </article>
    </div>
  )
}