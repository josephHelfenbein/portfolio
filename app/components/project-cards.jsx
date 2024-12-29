import { useState, useEffect } from "react";
import { motion } from "motion/react";
export function PhysicsProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./physicssandbox.png" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">Physics Sandbox</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/javascript-yellow?logo=javascript&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/webgl-red?logo=webgl&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">June 2024 - July 2024</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/physics-sandbox">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://josephhelfenbein.github.io/physics-sandbox/">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a> 
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>A rigid body physics engine with simulated cubes and spheres. It has real-time raytraced shadows and a Blinn-Phong shader using WebGL.</p>
          </div>
      </div>
    </article>
  </motion.div>
  )
}
export function MaterialProjectCard(){
  return (
   <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
    <img src="./materialviewer-logo.svg" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">Material Viewer</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/c++-00599C?logo=cplusplus&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/opengl-5586A4?logo=opengl&style=for-the-badge&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">September 2024 - November 2024</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/material-viewer">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> 
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>A 3D desktop application for previewing PBR materials using OpenGL and C++. It features HDRI environments, image-based lighting, and PBR shading. Users can upload individual image textures, custom .mat files, or .zip files for material previewing, and save viewed materials in a custom .mat format for easy sharing.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function GameRecommendCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./gamerecommend.svg" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">GameRecommend AI</h3>
    </div>
      
      <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/openai%20api-black?logo=openai&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/igdb%20api-9147FF?logo=igdb&style=for-the-badge&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter font-semibold text-center">United Hacks V3 submission (weekend)</h5>
          <h5 className="text-sm tracking-lighter font-semibold text-center">Winner for Best Solo Hack 🎉</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/gamerecommend-ai">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://gamerecommend.vercel.app/">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://devpost.com/software/gamerecommend-ai/">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Devpost</h5>
          </a>
          </div>
        </div>

      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>Utilizes AI to find similar games to any game you like. All you need to do is enter in a game you like, press the button, and the AI will return 5 games it thinks you will like, along with reasons why.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function MendPathProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./mendpath.png" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">MendPath</h3>
    </div>
      
      <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/expo-000000?style=for-the-badge&logo=expo&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Flask-4590A1?logo=flask&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Cerebras%20AI-000000.svg?logo=data:image/svg%2bxml;base64,PHN2ZyBoZWlnaHQ9IjgwIiB3aWR0aD0iODAiIHZpZXdCb3g9IjAgMCA0OTUuMjUgNDk1LjI1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0YxNUEyOSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMyLjQ1MyIgZD0ibTI0Ny42MyA0NzkuMDNjLTEyNy44IDAtMjMxLjQtMTAzLjYtMjMxLjQtMjMxLjQgMC0xMjcuOCAxMDMuNi0yMzEuNCAyMzEuNC0yMzEuNG0tMTE5LjIxIDM3NC40MWMtNzguODUzLTY2LjE2LTg5LjEzMy0xODMuNzEtMjIuOTczLTI2Mi41NiA2Ni4xNi03OC44NTMgMTgzLjcxLTg5LjEzMyAyNjIuNTYtMjIuOTczbS0xODcgMjY3LjU5Yy02OS4wMjctMzYuNDQtOTUuNDUzLTEyMS45NS01OS4wMTMtMTkwLjk3IDM2LjQ0LTY5LjA0IDEyMS45My05NS40NTMgMTkwLjk3LTU5LjAxM20tNjUuMzMzIDIyMS4yM2MtNTMuMTg3IDAtOTYuMzA3LTQzLjEyLTk2LjMwNy05Ni4zMDdzNDMuMTItOTYuMzA3IDk2LjMwNy05Ni4zMDciIC8+Cjwvc3ZnPg==&style=for-the-badge" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Hume%20AI-000000.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPgogICAgPHBhdGggZD0iTTI0Mi45NDMgNjA0Ljc0NkMyMDEuMDc3IDYxNC4zNTkgMTc1LjAyNCA2NTMuOTUgMTg1LjIwNiA2OTYuMzg3QzE5NC44MiA3MzguODIxIDIzNS41NDggNzYzLjczOCAyNzYuODQ2IDc1NC4xMjJDMzE4LjcxMiA3NDQuNTEgMzQ0LjE5NiA3MDQuOTE4IDMzNC41ODIgNjYyLjQ4NEMzMjQuOTY5IDYxOS45OTMgMjg0LjI0MSA1OTUuMTM0IDI0Mi45NDMgNjA0Ljc0NloiIGZpbGw9IiNGRkI1RDYiLz4KICAgIDxwYXRoIGQ9Ik0yNzkuMDkzIDQ0NC41OTlDMzEyLjQ4NCA0NzEuMjIgMzU5LjQxMyA0NjYuNjcgMzg2LjYwMyA0MzIuNzFDNDEzLjczNiAzOTguNzUgNDA3LjUzNiAzNTEuODIyIDM3NC43MTUgMzI1LjJDMzQxLjg5MyAyOTguNTc5IDI5NC4zMzggMzAzLjEyOSAyNjcuMjA1IDMzNy4wODlDMjQwLjA3MSAzNzEuMDQ4IDI0Ni4yNzIgNDE3Ljk3NyAyNzkuMDkzIDQ0NC41OTlaIiBmaWxsPSIjRDJBN0U5Ii8+CiAgICA8cGF0aCBkPSJNNDgxLjY4NiA4NDYuOTEyQzQ0Mi42NjQgODI4LjI1NSAzOTcuOTUzIDg0NC4wNjkgMzc5LjI5NiA4ODIuNThDMzYwLjYzOCA5MjEuMDMyIDM3NS44ODMgOTY1Ljc0NCA0MTQuOTYyIDk4NC45NjlDNDUzLjk4NCAxMDAzLjYzIDQ5OC42OTQgOTg3LjgxNSA1MTcuMzUyIDk0OS4zMDRDNTM1LjQ0MSA5MTAuMjgxIDUyMC43NjUgODY1LjU3MiA0ODEuNjg2IDg0Ni45MTJaIiBmaWxsPSIjRkZEQ0RDIi8+CiAgICA8cGF0aCBkPSJNNzE3LjA0NSA4NDYuODc5QzY3OC4wMjQgODY1LjUzNSA2NjIuNzIgOTEwLjgxNSA2ODEuMzggOTQ5LjI2OEM3MDAuMDM3IDk4Ny43MjMgNzQ0LjE3OCAxMDA0LjE2IDc4My43NjkgOTg0LjkzNUM4MjIuNzkzIDk2Ni4yNzkgODM4LjA5NCA5MjAuOTk5IDgxOS40MzcgODgyLjU0NkM4MDAuNzc3IDg0NC4wOTEgNzU2LjEyNiA4MjcuNjUxIDcxNy4wNDUgODQ2Ljg3OVoiIGZpbGw9IiNGRkQxQTQiLz4KICAgIDxwYXRoIGQ9Ik05NTUuODY2IDYwNC43NDNDOTE0IDU5NS4xMzEgODczLjg0MSA2MjAuMDQ3IDg2NC4yMjggNjYyLjQ4MUM4NTQuNjEzIDcwNC45MTUgODgwLjA5NyA3NDUuMDc0IDkyMS45NjMgNzU0LjExOUM5NjMuODI5IDc2My43MzQgMTAwMy45OSA3MzguODE4IDEwMTMuNiA2OTYuMzg0QzEwMjMuMjIgNjUzLjk1IDk5Ny43MzIgNjE0LjM1OSA5NTUuODY2IDYwNC43NDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjQzXzIpIi8+CiAgICA8cGF0aCBkPSJNOTMwLjM4OSA0NDQuNjY3Qzk2My43ODIgNDE4LjA0NSA5NjkuNDEyIDM3MS4xMTYgOTQyLjI3OSAzMzcuMTU2QzkxNS4xNDYgMzAzLjE5NyA4NjguMTU5IDI5OC43MDMgODM0Ljc3IDMyNS4yNjhDODAxLjM3NyAzNTEuODkgNzk1Ljc0NiAzOTguODE4IDgyMi44NzkgNDMyLjc3OEM4NTAuMDcgNDY2LjczNyA4OTYuOTk5IDQ3MS4yMzEgOTMwLjM4OSA0NDQuNjY3WiIgZmlsbD0iI0EwQjBGNiIvPgogICAgPHBhdGggZD0iTTU5OS4zODQgMTc3QzU1NS4yMzkgMTc3IDUyMi40MTggMjEwLjk1OSA1MjIuNDE4IDI1My45NjNDNTIyLjQxOCAyOTYuOTY3IDU1NS4yMzkgMzMwLjkyNyA1OTkuMzg0IDMzMC45MjdDNjQyLjk1MyAzMzAuOTI3IDY3Ni4zNDYgMjk2Ljk2NyA2NzYuMzQ2IDI1My45NjNDNjc2LjI4OCAyMTAuOTAyIDY0Mi45NTMgMTc3IDU5OS4zODQgMTc3WiIgZmlsbD0iI0JCQUJFRCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI0M18yIiB4MT0iOTE3LjAyIiB5MT0iNzUzLjE1MiIgeDI9Ijk1OS40OTgiIHkyPSI2MTAuMTM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC4yNjU2IiBzdG9wLWNvbG9yPSIjRkZCN0IyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC41NzgxIiBzdG9wLWNvbG9yPSIjQUI5RUZDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==&style=for-the-badge" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/A%E2%80%93frame-EF2D5E?logo=a-frame&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/ar.js-5599aa.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJzdmcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iNjAgMzUgMTUwIDIzMCI+PGRlZnMgaWQ9ImRlZnMxIi8+PGcgaWQ9ImxheWVyMSI+PHBhdGggZD0ibSAxMjkuNDA3MDksMzkuMjYwMTM2IGMgLTAuMTQzMTcsMC4wNTQ1MSAtMTQuMzI2MTcsMTQuMDI1Mzc3IC0zMS41MTc5NzUsMzEuMDQ2MTY3IGwgLTMxLjI1ODA0LDMwLjk0Njk0NyA1LjE3ZS00LDE5LjE5MTU5IGMgNy42ZS01LDEwLjU1NTM4IDAuMDc5MzIsMzEuODA2NTUgMC4xNzYyMTYsNDcuMjI1MDMgbCAwLjE3NjIxNywyOC4wMzM5NSAxNC40OTczMDYsLTE0LjY3MjQ5IDE0LjQ5NzMwNywtMTQuNjcxOTggMy43MjkwMDYsLTMuNzA5MzMgMTQuOTQ2Mzc2LC0xNC45NDQ4MiAxNC45NDYzOCwtMTQuOTQ0ODMgMS42NzU4NiwxLjcxODI0IGMgMC45MjE2LDAuOTQ0OTcgNC4zOTkzNSw0LjQ5MTI2IDcuNzI4MjIsNy44ODAxNCBsIDYuMDUyMzMsNi4xNjEzOCA0Ni45ODY4MiwtNDYuOTg0NzMgLTMxLjE4NzgyLC0zMS4xODcyMzkgQyAxNDMuNzAyMzgsNTMuMTk1MTk5IDEyOS41NTAyNywzOS4yMDU2MjYgMTI5LjQwNzA5LDM5LjI2MDEzNiBaIG0gMTMuMTY2MTIsMzMuOTY1ODg1IDkuNjA1NjEsOS42NTcyOTIgYyAxMS41OTk3LDExLjY2MTg1IDEzLjY2NTQ3LDE0LjE0NDk1OCAxNy44ODcyOSwyMS41MDE1MjcgNi44NzM4NSwxMS45Nzc3NyA4Ljg2NzMsMjQuNDEwMTcgNC4zNjA5NywyNy4xOTUyNCAtMS41NTUzLDAuOTYxMjMgLTIuOTc2NzYsMC45Mjg0NiAtNi4zNzUzMiwtMC4xNDcyOCAtMC40ODk4NiwtMC4xNTUwNiAwLjQxNjk4LDIuMTkzMDMgNi4wNDUxMSwxNS42NTIyOCAzLjY0MTgsOC43MDkxMSA2LjczNTIsMTYuMTMyMzUgNi44NzQsMTYuNDk2MTUgMC4xNTg1NiwwLjQxNTU4IC0wLjcxNjgzLC0wLjMwMDUyIC0yLjM1NDM4LC0xLjkyNjUgbCAtMi42MDYwNCwtMi41ODc5NSAtMS4wMzE5OCwzLjYwMzkxIC0xLjAzMTk4LDMuNjAzOTIgLTIuMzk0NjksMS4xOTUyNyBjIC0xLjMxNzA5LDAuNjU3MzIgLTMuMzUxNTksMS44Mjc5NyAtNC41MjExNywyLjYwMTM5IC00Mi4yNDA4MSw0MC4yNTY5NyAzMC4zMzc0OSwtMjEuMjM0NDggNi4xNzc5MiwyNC4yMDE2MyAtMzIuOTEwOCwwLjU5OTQ0IC0zMS4wNTYzNCwtMTIuODI1OTUgLTUuODI4NjUsLTMyLjUzNTQ5IDEuNzc4MjIsLTEuMzQ1NDIgNi4xMzQyLC0zLjcxMjQzIDYuODMyMTQsLTMuNzEyNDMgMC42NDMxMywwIDAuNDE5MjcsLTAuMzM1MDcgLTEuNTg2OTgsLTIuMzc1NTcgbCAtMS45NTY0NywtMS45OTAwNiAtMi42OTc1MSwtNi40ODIyOSBjIC0xLjQ4MzU2LC0zLjU2NTI1IC00LjMxMDUsLTEwLjI5MjI5IC02LjI4MjMxLC0xNC45NDg5NiBsIC0zLjU4NTMxLC04LjQ2NjY2IC0zLjQwMjM4LC0zLjQzODU1IC0zLjQwMjM3LC0zLjQzODAzIHYgOC43MjcxMSA4LjcyNjYgbCAtNC4zNjU2MywtNC4zNTk0MiAtNC4zNjU2MiwtNC4zNTk0MyAwLjAwMywtMjYuMTk2ODQ4IHoiIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiM3ZmI4ZTM7ZmlsbC1vcGFjaXR5OjEiIGlkPSJwYXRoMTYiLz48cGF0aCBkPSJtIDE1MS4zMDYwMSw5MC45NTMxMDUgLTAuMDA0LDguNjEzOTQ0IC0wLjAwNCw4LjYxMzQzMSA1LjA5MzIzLDUuMDQxNTUgYyAzLjIxMzA2LDMuMTgwNDQgNS42MzA0Myw1LjM0NzQ1IDYuNTQ4NDQsNS44Njk5MyBoIDUuMmUtNCBjIDEuNjI5NTYsMC45Mjc0NSAzLjIxOTc0LDEuMDg5OTQgNC4xNjcxOCwwLjQyNjMzIDEuODcxNSwtMS4zMTA4NiAxLjIxMTQ1LC02LjMyOTI3IC0xLjU1NjQ5LC0xMS44MzQ0MiAtMS45OTMwMiwtMy45NjM5MSAtMy41NTUxMywtNS45NDk4OSAtOC45OTc5LC0xMS40MzkwOTkgeiIgc3R5bGU9ImZpbGw6IzdmYjhlMztmaWxsLW9wYWNpdHk6MSIgaWQ9InBhdGgxNSIvPjxwYXRoIGQ9Im0gMTkxLjg0MzU5LDEwMS45MzMzMSBjIDAuMTEwMDUsMCAwLjE5OTk5LDIwLjk4NTA5IDAuMTk5OTksNDYuNjMzMzMgdiA0Ni42MzMzMyBsIC0zMS4zMDU1OSwzMS4zMDUwNyAtMzEuMzA2MSwzMS4zMDUwNiAwLjEwOTA0LC00Ni45MTYgMC4xMDkwNCwtNDYuOTE2IDE1LjkxMDE0LC0xNS45MzQ5NCBjIDguNzUwNTQsLTguNzY0MiAxNS45ODUwOCwtMTUuODQ4NDQgMTYuMDc2NTQsLTE1Ljc0MjcxIDAuMDkxNCwwLjEwNTcyIDIuMTU3MjYsNC45NjY1IDQuNTkwOTMsMTAuODAxOTMgbCA0LjQyNTA1LDEwLjYxMDIgMS45NjQyMiwxLjk1MTMgYyAxLjA4MDM4LDEuMDczMTcgMS45NjQyMywyLjAxODUyIDEuOTY0MjMsMi4xMDExNyAwLDAuMDgyNyAtMC42NzA3MSwwLjM3ODIgLTEuNDkwMzUsMC42NTY4IC0xMC45MjMyLDMuNzEyOTEgLTI2Ljc2NzQ2LDI2LjYyNjc5IC0yNC45NjkwMiwzNi4xMDk5NSAwLjM0NjEzLDEuODI1MTEgMC42ODEyMywyLjM2NjM4IDEuNzM4MzksMi44MDgwOSAxLjc0MjEsMC43Mjc5IDQuMjkwOTgsLTAuMjQ2MSA5LjgyMDU5LC0zLjc1MzI2IDYuMzk3OSwtNC4wNTc4NiA3Ljc1MjcyLC00LjY0MDM4IDguNTUyNDUsLTMuNjc2NzcgMC44NDc0NywxLjAyMTEyIC0wLjUxMzEzLDQuNDQ0NTggLTMuMjMxODQsOC4xMzE4IC0zLjIxNTE1LDQuMzYwNTEgLTcuMjA1NzMsNy42NzIyMiAtMTIuOTc2NDcsMTAuNzY4MzMgLTIuOTAzNzksMS41NTc5NSAtMi42ODg5OCwxLjE4MTQ4IC0zLjEwODM0LDUuNDM4OTUgLTAuMTU3NjcsMS42MDA3MyAtMC4zNDY3NywzLjE5Mjc3IC0wLjQyMDY0LDMuNTM3NzcgLTAuMTIyMywwLjU3MTIxIC0wLjA2ODMsMC42MTE1NCAwLjYwNjE2LDAuNDUwMSAxLjQyOCwtMC4zNDE4IDYuMDUwMDUsLTIuNzg1ODUgNy44ODQyNywtNC4xNjg3NCAyLjM2Mjk1LC0xLjc4MTUxIDYuODk2NzksLTYuMzExMjkgOS4yMTk2LC05LjIxMTg0IDcuNTA3OTMsLTkuMzc1MzIgMTIuMTQ3NDksLTIwLjEwNzE4IDExLjAyNjcxLC0yNS41MDU5NCAtMC44MjIwNywtMy45NTk5MSAtMy43NDI0NiwtMy40NzUxNyAtMTIuNzA1NjgsMi4xMDg0IC01LjQ3NzIzLDMuNDEyMDEgLTcuMjE0OTEsNC4wMTk3OSAtNy41NTk3NSwyLjY0NTgzIC0wLjQ3NjE3LC0xLjg5NzIgMi4zNjAzNiwtNi44NjQ2IDYuMDQ2MTUsLTEwLjU4ODUgMi4zMDI1NywtMi4zMjYzOCA1LjI3MzcsLTQuNDA4NDggOC44MzU2MywtNi4xOTE4NyAxLjE5MDg1LC0wLjU5NjIzIDIuMjI0NTcsLTEuMjkzOTggMi4zMDAxMiwtMS41NTI4NyAwLjA3NTUsLTAuMjU4NiAwLjUxMjcsLTEuNzc5OTUgMC45NzE1MiwtMy4zODA2OCAwLjQ1ODgyLC0xLjYwMDcxIDAuODg2MzIsLTIuOTY0IDAuOTQ5ODEsLTMuMDI5MjcgMC4wNjM1LC0wLjA2NTMgMS4yNTg1MSwxLjAwNjI5IDIuNjU2MTcsMi4zODEyNSAxLjM5NzY1LDEuMzc0OTUgMi40Nzc3LDIuMzIxNTEgMi4zOTk4NSwyLjEwMzIzIC0wLjA3NzgsLTAuMjE4MjggLTMuMTMwMjcsLTcuNTU3MjUgLTYuNzgzMDUsLTE2LjMwOTA4IC0zLjY1Mjc3LC04Ljc1MTgzIC02LjY0MTQ1LC0xNS45NzI3NiAtNi42NDE0NSwtMTYuMDQ2MDUgMCwtMC4wNzMzIDAuNzI1MTgsMC4wOTI3IDEuNjExMjcsMC4zNjg0NSAyLjEwOTQ5LDAuNjU2NTUgMy4zMDc4OSwwLjYzMjcxIDQuNzQ5MDYsLTAuMDk0IDAuOTU2NDMsLTAuNDgyMyAxLjMzMDk3LC0wLjg5NjY4IDEuOTc0MDQsLTIuMTgyODEgMC43NDAyNywtMS40ODA1NCAwLjc5MzI4LC0xLjc4MzYgMC43ODQ0NSwtNC40OTc5MiAtMC4wMDYsLTEuNzc4OCAtMC4xOTU2MSwtMy43NzQ1IC0wLjQ4ODM0LC01LjEzMjUgbCAtMC40NzkwNCwtMi4yMjE1NyA3Ljg5NTEyLC03Ljg5ODc0IGMgNC4zNDIzLC00LjM0NDExIDcuOTg1MDcsLTcuODk4MjMgOC4wOTUxMiwtNy44OTgyMyB6IiBzdHlsZT0iZGlzcGxheTppbmxpbmU7ZmlsbDojMDAzOTY0O2ZpbGwtb3BhY2l0eToxIiBpZD0icGF0aDExIi8+PHBhdGggc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MSIgZD0ibSAxMjkuNzE1OTgsMjEwLjY3NzA4IDAuMTcwNzksLTQ2LjY5ODk2IDcuNjYyODgsLTcuNjcyMzggNy42NjI4OCwtNy42NzIzOCA4LjYxNDM5LDguNjE0MzkgOC42MTQzOSw4LjYxNDM5IC0xLjc2OTY2LDEuOTY4NDEgYyAtNy42MTU5MSw4LjQ3MTIyIC0xMi44MzA2MSwxOC44Mjg5NSAtMTIuODA3NTMsMjUuNDM5MDIgMC4wMDcsMS45MTE1NSAwLjY4OTIxLDMuNzAwNzEgMS41OTcxNCw0LjE4NjYyIDEuNjU3LDAuODg2OCA1LjAwMDIzLC0wLjMxODA4IDEwLjMzMzE2LC0zLjcyMzk5IDUuODYyNTYsLTMuNzQ0MTYgNy4zOTc1NywtNC40OTAzMSA4LjA3NzI0LC0zLjkyNjIzIDAuNjE5NTcsMC41MTQxOSAwLjQwNjUxLDIuMTM2MTcgLTAuNTM1NjEsNC4wNzc1NCAtMi44Njc5MSw1LjkwOTY5IC04LjU3NDA4LDExLjMzNjY0IC0xNS42Mjg4LDE0Ljg2NDA0IC0xLjMxNjU2LDAuNjU4MjkgLTIuNDExMTksMS4yMTI5IC0yLjQzMjUxLDEuMjMyNDggLTAuMTMxODcsMC4xMjEwNSAtMC45MzQyNCw4LjQxMTE5IC0wLjgyNDcsOC41MjA3NCAwLjIxODY0LDAuMjE4NjMgNC4xNjkwMywtMS40MzgwOSA1Ljg5MDU2LC0yLjQ3MDQgMi41NTQyLC0xLjUzMTYzIDQuNTg0NDksLTMuMTc3MzEgNy40MTIxMywtNi4wMDgwNSA4LjE3NDgxLC04LjE4Mzc2IDE0LjQ4Nzk4LC0xOC45Nzk4IDE1LjU4Mzg2LC0yNi42NDk2OCBsIDAuMjk0NDcsLTIuMDYwOTIgNy4wMDY4OCw3LjAxMDYzIDcuMDA2ODksNy4wMTA2MyAtMzEuMDQ5ODIsMzEuMDIxNTMgLTMxLjA0OTgzLDMxLjAyMTUzIHogbSAtMzIuNjI1ODQ2LDYuNDYyMTMgYyAtMy40OTc5NDUsLTEuNzQ5OTUgLTguMTQ1OTA1LC02Ljc1MTk1IC0xMS41NjY5MTgsLTEyLjQ0Nzk5IGwgLTEuNjQzNTc3LC0yLjczNjU4IDAuNDgzNjY3LC0xLjg4MDM0IGMgMC4yNjYwMTgsLTEuMDM0MTggMC41MzI0OTksLTEuOTI5MTYgMC41OTIxODEsLTEuOTg4ODQgMC4wNTk2OCwtMC4wNTk3IDAuNTc0ODEsMC41NzU0OSAxLjE0NDcyOCwxLjQxMTQ5IDEuNDQ0NTMzLDIuMTE4OTYgNS4wNTc2MjQsNS44MzcwOSA2LjI3NjQxMSw2LjQ1ODg3IDEuMzU4MzM5LDAuNjkyOTcgMi40OTc3NDEsMC41NTM2NyAzLjIwMDMxLC0wLjM5MTI1IDAuNTUyNTQ3LC0wLjc0MzE1IDAuNTU1Njg3LC0wLjg2MDMgMC42MjcyNzksLTIzLjQwNjgyIGwgMC4wNzE5NSwtMjIuNjU5OTMgNC4zNTk4MjUsNC4zNTM4MSA0LjM1OTgxLDQuMzUzODEgLTAuMDA1LDIwLjY0MDUxIGMgLTAuMDAzLDExLjM1MjI4IC0wLjExNDczLDIxLjY4NjI2IC0wLjI0OTIxLDIyLjk2NDQxIC0wLjYxMDM4LDUuODAxMTYgLTMuMTU5MzQsNy41NzYzMiAtNy42NTE3NTksNS4zMjg4NSB6IG0gNjAuMzU5MzE2LC0zMi41NjY1MiBjIC0wLjYwNjcsLTAuMjQ0ODEgLTAuMzUyOTUsLTIuMDQyNCAwLjU1NTI0LC0zLjkzMzI4IDEuNTQwMDYsLTMuMjA2NDUgNS42ODY1MywtOC4xMzE5NCA4LjI3MTgxLC05LjgyNTg4IGwgMC42NzAwMiwtMC40MzkwMSAzLjE2Nzk3LDMuMTUxOCAzLjE2Nzk4LDMuMTUxOCAtMC43Mzk2OSwwLjI1NjQ0IGMgLTEuNDQ5NDUsMC41MDI0OSAtNS4wMjMzLDIuNDQwODUgLTguMjgwMzEsNC40OTEgLTMuMjI4MDYsMi4wMzE5MyAtNS42ODU0MSwzLjMzNTcxIC02LjIxNzcxLDMuMjk4ODggLTAuMTQ1NTIsLTAuMDEwMSAtMC40MTM0MSwtMC4wNzg0IC0wLjU5NTMxLC0wLjE1MTc1IHogTSA4MC4xMjkxNTksMTQ2Ljc3NzIgYyAwLjAwNDQsLTE2Ljk2MDM5IDAuMTY1Njg4LC0yMC43MDUxOSAxLjA3MTkxMiwtMjQuODg3OTIgMS44NzY2ODcsLTguNjYxOTcgNy4xMDM1NjcsLTE4LjcyOTk1IDEzLjY1Njk1OCwtMjYuMzA1OTQ3IDguMTExODgxLC05LjM3NzY3NCAxNS40NTE0MzEsLTEyLjU2NTcwNCAxOC40NDk5MzEsLTguMDEzOTc0IDEuNTYxNjQsMi4zNzA1NjcgMS41NzIyNSwyLjUxMTk3NyAxLjY3MzIyLDIyLjMwMTQ3MSBsIDAuMDkyNSwxOC4xMjM5NiAtNC4zNzc0Niw0LjM2MjYyIC00LjM3NzQ3LDQuMzYyNjIgdiAtOC41OTQ0NSAtOC41OTQ0NSBsIC04LjczMTI0OSw4LjcyODI0IC04LjczMTI1LDguNzI4MjUgdiA4LjYwMzQ3IDguNjAzNDcgbCAtNC4zNjU2MjUsNC4zNTk2MSAtNC4zNjU2MjUsNC4zNTk2MSB6IG0gMjYuMTM2NjMxLC00MS4xMzk3IGMgLTAuMDc0OSwtNC44NzEzMSAtMC4xMTQ0NiwtNS4yMjA2NCAtMC43MDgwOCwtNi4yNTY2MDUgQyAxMDQuOTM1NDIsOTguMjk0ODc0IDEwNC4wOTE2NSw5Ny43IDEwMy4xNzM1Myw5Ny43IGMgLTAuMjYwOTUsMCAtMS4yMDE2MSwwLjM2MzM2MyAtMi4wOTAzNSwwLjgwNzQ3MyAtMS4xODg3NDUsMC41OTQwMjEgLTIuMjY2NTE5LDEuNDkzNzU3IC00LjA3NzE1OCwzLjQwMzY1NyAtMy41NjAzMTgsMy43NTU0OSAtNi4wNDI0MzgsOC4xNjYyNyAtNy4zOTYyNjYsMTMuMTQzMzEgLTAuNDczNDg0LDEuNzQwNjUgLTAuNTg3ODcsMy4wMjY1NiAtMC42ODAzNzgsNy42NDg2OSBsIC0wLjExMTIwNSw1LjU1NjI0IDguNzYzNDg2LC04LjczMTI0IDguNzYzNDgxLC04LjczMTI1IHogbSAtMy4yNTU4Myw0OS4yNDg1OCBjIC0zLjE0NjYzMywtMS40Mjk1IC03LjUxNTA2LC04LjI4MTkgLTcuNTMzNTc1LC0xMS44MTczMSAtMC4wMjE4MiwtNC4xNjcxNSA0LjU3NDU3NSwtMi4wOTY1NyA3Ljk1MDg4NSwzLjU4MTY5IDIuMDM3NTYsMy40MjY3NyAyLjg3NTE5LDcuNTAyNzggMS43MTY0LDguMzUyMjIgLTAuNjUzNzcsMC40NzkyNCAtMC44NDUxNiwwLjQ2ODc4IC0yLjEzMzcxLC0wLjExNjYgeiIgaWQ9InBhdGg5Ii8+PHBhdGggZD0ibSAxNDIuNTczMjEsNzMuMjI2MDIxIC0wLjAwMywyNi4xOTY4NTEgLTAuMDAzLDI2LjE5Njg0OCA0LjM2NTYyLDQuMzU5NDMgNC4zNjU2Myw0LjM1OTQyIHYgLTguNzI2NiAtOC43MjcxMSBsIDMuNDAyMzcsMy40MzgwMyAzLjQwMjM4LDMuNDM4NTUgMy41ODUzMSw4LjQ2NjY2IGMgMS45NzE4MSw0LjY1NjY3IDQuNzk4NzUsMTEuMzgzNzEgNi4yODIzMSwxNC45NDg5NiBsIDIuNjk3NTEsNi40ODIyOSAxLjk1NjQ3LDEuOTkwMDYgYyAyLjAwNjI1LDIuMDQwNSAyLjIzMDExLDIuMzc1NTcgMS41ODY5OCwyLjM3NTU3IC0wLjY5Nzk0LDAgLTUuMDUzOTIsMi4zNjcwMSAtNi44MzIxNCwzLjcxMjQzIC0wLjk3ODE1LDAuNzQwMDcgLTIuODY4NywyLjQzOTk5IC00LjIwMDc4LDMuNzc3NTUgLTguMjQ3ODYsOC4yODE4MiAtMTQuNTYzNDksMTkuNDEyNTggLTE0Ljk4NzIsMjYuNDEzMzggLTAuMTcyNTUsMi44NTEwNyAwLjAyNDIsMy45MzM4MSAwLjg4MzE1LDQuODYwNjggMC42Mjk1NywwLjY3OTMxIDAuNzg1NDUsMC43MTkzNiAyLjMxMTQ5LDAuNTk2ODYgMS45NzI1NywtMC4xNTgzNCA0LjA1MTg2LC0xLjE0ODA1IDkuMDU1MjYsLTQuMzA5MjkgNC4yNzc1OSwtMi43MDI2NiA1Ljk2MjksLTMuNTY2MTkgNi45NTkyNiwtMy41NjYxOSAyLjk0Mzc0LDAgLTAuMjgwOTYsNi45NTMxMyAtNS43NzI3NywxMi40NDczIC0yLjgzMjY3LDIuODMzODkgLTUuMjA1OTUsNC41NDM5OCAtOS4zNTM0Myw2LjczOTEyIC0xLjU1NTQ0LDAuODIzMjUgLTIuODI5MDYsMS41MTYxOSAtMi44MzAzMiwxLjUzOTk2IC0wLjAwMSwwLjAyMzggLTAuMTc5MDYsMS41MzE2OSAtMC4zOTQ4MSwzLjM1MDcgLTAuMjE1NzUsMS44MTkwMSAtMC4zOTM1NCwzLjYzMzkgLTAuMzk0ODEsNC4wMzI4MyBsIC0wLjAwMiwwLjcyNTAyIDEuNzc5MjIsLTAuNjY5NzMgYyAwLjk3ODYsLTAuMzY4MzQgMi41MjQyOSwtMS4wODY3NiAzLjQzNTQ1LC0xLjU5NjI4IDYuMTg4NjEsLTMuNDYwODcgMTQuNjcyMDYsLTEzLjAyNTg0IDE5LjM0MDk0LC0yMS44MDY0MiAyLjcwMDY4LC01LjA3OTA4IDQuMDE0MywtOS40MDU3NyA0LjAxNTc3LC0xMy4yMjkxNyAxMGUtNCwtMi43Nzc1NyAtMC41MDk0MywtMy44NDIzOSAtMS45NzM1MiwtNC4xMTcwNiAtMS45NzY4NCwtMC4zNzA4NiAtNC41MjE2NywwLjcyMjE0IC0xMC44OTIzNiw0LjY3Nzc1IC01LjEwODY0LDMuMTcxOTkgLTYuMzczMDIsMy43MDgwMiAtNy4wNzk2NywzLjAwMTM3IC0xLjkzMzU4LC0xLjkzMzU5IDMuOTQ0MTYsLTEwLjY5Mzk3IDkuNzUxODYsLTE0LjUzNDUyIDEuMTY5NTgsLTAuNzczNDIgMy4yMDQwOCwtMS45NDQwNyA0LjUyMTE3LC0yLjYwMTM5IGwgMi4zOTQ2OSwtMS4xOTUyNyAxLjAzMTk4LC0zLjYwMzkyIDEuMDMxOTgsLTMuNjAzOTEgMi42MDYwNCwyLjU4Nzk1IGMgMS42Mzc1NSwxLjYyNTk4IDIuNTEyOTQsMi4zNDIwOCAyLjM1NDM4LDEuOTI2NSAtMC4xMzg4LC0wLjM2MzggLTMuMjMyMiwtNy43ODcwNCAtNi44NzQsLTE2LjQ5NjE1IC01LjYyODEzLC0xMy40NTkyNSAtNi41MzQ5NywtMTUuODA3MzQgLTYuMDQ1MTEsLTE1LjY1MjI4IDMuMzk4NTYsMS4wNzU3NCA0LjgyMDAyLDEuMTA4NTEgNi4zNzUzMiwwLjE0NzI4IDQuNTA2MzMsLTIuNzg1MDcgMi41MTI4OCwtMTUuMjE3NDcgLTQuMzYwOTcsLTI3LjE5NTI0IC00LjIyMTgyLC03LjM1NjU2OSAtNi4yODc1OSwtOS44Mzk2NzcgLTE3Ljg4NzI5LC0yMS41MDE1MjcgeiBtIDguNzMyOCwxNy43MjcwODQgNS4yNDY3MSw1LjI5MTY2NiBjIDUuNDQyNzcsNS40ODkyMDkgNy4wMDQ4OCw3LjQ3NTE4OSA4Ljk5NzksMTEuNDM5MDk5IDIuNzY3OTQsNS41MDUxNSAzLjQyNzk5LDEwLjUyMzU2IDEuNTU2NDksMTEuODM0NDIgLTAuOTQ3NDQsMC42NjM2MSAtMi41Mzc2MiwwLjUwMTEyIC00LjE2NzE4LC0wLjQyNjMzIGggLTUuMmUtNCBjIC0wLjkxODAxLC0wLjUyMjQ4IC0zLjMzNTM4LC0yLjY4OTQ5IC02LjU0ODQ0LC01Ljg2OTkzIGwgLTUuMDkzMjMsLTUuMDQxNTUgMC4wMDQsLTguNjEzNDMxIHoiIHN0eWxlPSJmaWxsOiNmZmZmZmYiIGlkPSJwYXRoMTMiLz48L2c+PC9zdmc+&style=for-the-badge&logoColor=white" />
          </div>
          <h5 className="text-sm text-center tracking-tighter font-semibold">DivHacks 2024 submission (weekend)</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/MendPath/MendPath">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://www.mendpath.us">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Demo</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://dorahacks.io/buidl/16982">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M13.507 10.316l.012.023c.353 0 .615-.394.674-.893-.29.097-.575.199-.858.3-.035.06-.07.12-.11.173-.13.14.104.396.282.396zm16.748.33c-.741-3-6.543-3.746-13.487-1.96-.248.186-.531.27-.75.305-.577.085-.784.123-.84.496-.055.373.93.557 1.593.073.446-.324.767-1.027 1.163-1.076.514-.061.607 1.289.313 1.954-.295.665-1.287 1.094-1.66.758-.128-.122-.11-.19-.128-.475-.018-.286-.674-.233-.674.201.02.303.006.61-.044.91-.184.954-1.893 1.106-2.336 1.056-.44-.05-.98-.397-.717-.613.603-.475.227-1.586-.645-2.038-.274.11-.545.224-.814.341a.461.461 0 00.32.274.923.923 0 01.044 1.753c-1.14.63-1.913-.537-1.98-.793-.055-.21-.137-.292-.341-.315-5.29 2.689-8.665 6.198-8.03 8.805.823 3.354 7.986 3.894 15.995 1.222 8.01-2.671 13.843-7.522 13.018-10.879z" fill="url(#prefix__paint0_linear_12_232)"/>
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M13.592 7.755a.38.38 0 00-.312.367c.011.214.262.362.262.733a1.51 1.51 0 01-.318 1.064c-.128.14.105.397.283.397l.012.023c.405 0 .691-.519.685-1.126.05-.732-.239-1.583-.612-1.46v.002zm2.403-.006a.351.351 0 00.123-.146.345.345 0 00-.213-.467c-.187.042-.38.045-.566.012a1.488 1.488 0 01-.525-.207c-.269-.213-.134-.915-.134-.915.011-.234-.24-.324-.33-.33-.093-.006-.306-.044-.44.306-.068.266-.056.572.017.837.073.266.213.508.405.703.228.19.508.31.803.347.294.038.595-.011.863-.14h-.003zM28.63 23.333c-.613-1.814-3.53-5.49-6.834-8.035-.606-.654-.735-1.59-.991-2.488a8.132 8.132 0 01-.496-3.007c.157-.727.361-1.441.612-2.138.406-1.485.738-2.993.992-4.51a6.323 6.323 0 00-.061-2.487c-.277-1.112-4.498 2.126-5.282 2.657a8.325 8.325 0 00-2.605-.808c-1.811-.181-3.64.055-5.343.691C7.14 2.181 4.675.116 3.842.434h.017c-.767.318-.406 1.887-.251 2.835.373 2.249 1.312 4.827 1.557 6.88.884 7.42 1.208 11.802 8.943 16.36.854.435 1.75.785 2.672 1.044 1.898.251 2.604-.659 2.604-1.271a2.851 2.851 0 00-.863-1.741c-.624-.698-1.642-1.503-2.115-2.077a28.649 28.649 0 003.678-.68 5.057 5.057 0 011.225-.286.95.95 0 01.551.275c.523.434 1.018.898 1.49 1.388a17.28 17.28 0 001.987 1.907 2.353 2.353 0 002.923.053c.247-.219.417-.51.484-.834a1.52 1.52 0 00-.111-.957l-.003.003zM18.25 10.438c-.295.665-1.287 1.094-1.66.759-.128-.123-.11-.19-.128-.476-.018-.286-.674-.233-.674.202.02.303.006.61-.044.91-.184.953-1.893 1.105-2.336 1.055-.44-.05-.98-.396-.718-.612.64-.502.184-1.712-.79-2.109-.35-.134-.484-.184-.613-.055a.462.462 0 00-.09.213.5.5 0 00.02.227c.027.073.07.14.129.19.058.052.128.09.204.108a.917.917 0 01.66.86.91.91 0 01-.164.545.92.92 0 01-.452.348c-1.14.63-1.914-.537-1.98-.794-.068-.256-.173-.323-.497-.323-1.551-.05-1.525-.666-1.68-1.118-.154-.452.24-.665.307-.612.23.198.519.318.822.341.324-.055.295.146.613.557.54.697 1.006-.219.7-.39-.674-.386-.496-1.004-.257-1.138a.384.384 0 00.149-.105.392.392 0 00.079-.347.394.394 0 00-.088-.16.442.442 0 00-.612 0c-.412.379-.155.848-.496.88-.508.038-1.374-.574-1.018-1.796.356-1.222 1.837-1.222 1.837-1.222l-.038.422a1.886 1.886 0 00.744 1.322c.925.525 1.881.268 1.954-.085.044-.219-.256-.475-.735-.446a1.224 1.224 0 01-1.312-.881 1.434 1.434 0 01.227-.948c.184-.28.458-.49.78-.592a1.084 1.084 0 011.324.49c.034.064.043.14.09.195a.446.446 0 00.589.097s.589-.904 1.298-.855c.204.015.4.079.574.184.175.105.321.254.426.429 0 0 1.625-.324 1.893 1.105.312 1.64-.691 2.091-1.269 2.176-.577.084-.784.122-.84.496-.055.373.93.557 1.593.073.446-.324.767-1.027 1.164-1.077.513-.06.606 1.29.312 1.954l.003.003z" fill="#0E0E11"/>
            <path xmlns="http://www.w3.org/2000/svg" d="M13.589 12.97c-.076 0-.137-.003-.187-.01-.341-.037-.773-.253-.843-.49-.026-.093.003-.183.088-.25.21-.166.3-.426.256-.738-.073-.516-.496-1.03-1.03-1.248-.352-.137-.443-.158-.53-.076a.387.387 0 00-.073.175.431.431 0 00.017.192.402.402 0 00.28.251.998.998 0 01.715.93.985.985 0 01-.66.96c-.402.222-.801.251-1.183.088-.522-.225-.85-.75-.896-.93-.055-.21-.116-.269-.426-.269-1.429-.044-1.58-.58-1.7-1.012a3.213 3.213 0 00-.047-.157c-.108-.316.024-.546.181-.654.076-.052.178-.09.242-.038.219.187.487.3.773.327.269-.041.347.087.467.28.05.082.114.187.207.306.14.181.28.257.411.222.137-.038.236-.199.254-.333.006-.038.009-.134-.058-.172-.444-.254-.51-.583-.51-.758 0-.216.104-.423.25-.508l.009-.005a.32.32 0 00.122-.085.32.32 0 00.067-.28.284.284 0 00-.073-.128.365.365 0 00-.253-.1.38.38 0 00-.257.103c-.19.175-.222.364-.254.533-.029.17-.061.347-.288.368-.3.02-.654-.155-.884-.438-.3-.37-.376-.886-.21-1.452.367-1.26 1.893-1.275 1.907-1.275h.079l-.044.493c.027.248.1.484.222.703.122.219.286.405.487.557.618.35 1.251.344 1.607.184.134-.061.219-.14.236-.222.012-.052-.011-.114-.06-.172-.091-.102-.296-.207-.599-.187a1.297 1.297 0 01-1.388-.933V6.71c-.041-.35.044-.702.236-.997.193-.295.481-.513.817-.621.256-.097.54-.097.799 0 .26.096.475.283.61.525.017.032.029.064.04.093a.26.26 0 00.044.09.37.37 0 00.32.14.396.396 0 00.161-.05c.082-.122.654-.924 1.357-.874a1.347 1.347 0 011.03.604c.186-.03.848-.097 1.355.248.304.204.496.516.572.924.128.677.05 1.225-.233 1.625-.339.478-.878.603-1.097.636-.59.087-.732.12-.779.434-.011.079.056.137.114.172.254.155.887.181 1.365-.169.178-.128.338-.324.493-.513.228-.28.443-.543.706-.575.131-.014.25.041.341.166.268.362.292 1.336.047 1.89-.207.47-.732.805-1.14.893-.269.058-.494.017-.636-.111-.132-.125-.138-.216-.146-.411 0-.035-.003-.073-.006-.114-.006-.09-.126-.11-.196-.11-.134.002-.332.09-.332.306.02.303.006.615-.044.921-.175.91-1.601 1.126-2.228 1.126l.006.012zm-2.13-3.005c.12 0 .263.056.47.135.59.239 1.041.787 1.12 1.362.053.364-.058.674-.312.872-.047.038-.047.07-.038.096.04.143.382.347.718.385.41.047 2.082-.096 2.254-.997.047-.292.061-.595.041-.893 0-.289.245-.45.475-.458.193-.006.336.096.345.245 0 .044.005.082.005.117.01.19.012.227.1.312.105.096.285.122.504.076.374-.079.852-.385 1.039-.808.224-.508.21-1.424-.03-1.747-.06-.082-.128-.117-.207-.108-.204.026-.4.265-.61.522-.16.195-.326.4-.521.54-.493.358-1.188.382-1.526.174-.134-.081-.201-.195-.18-.317.063-.432.344-.473.9-.558.199-.029.692-.145.998-.577.26-.368.333-.875.21-1.514-.07-.37-.242-.65-.51-.831-.537-.362-1.292-.219-1.298-.216l-.05.009-.026-.044a1.198 1.198 0 00-.942-.574c-.66-.047-1.228.813-1.234.822l-.009.015-.014.008a.496.496 0 01-.24.08.555.555 0 01-.247-.042.542.542 0 01-.202-.151.411.411 0 01-.067-.135.546.546 0 00-.029-.072 1.005 1.005 0 00-1.234-.458 1.395 1.395 0 00-.743.563c-.172.265-.248.58-.216.895a1.154 1.154 0 001.23.822c.307-.02.575.07.721.237.079.09.114.195.093.297-.026.129-.14.245-.317.327-.391.175-1.08.187-1.745-.19l-.008-.006a1.95 1.95 0 01-.773-1.37v-.006l.029-.344c-.306.023-1.4.172-1.689 1.166-.152.52-.084.986.184 1.322.23.285.545.4.758.385.102-.01.123-.059.155-.248.029-.172.073-.406.297-.613a.518.518 0 01.712 0 .438.438 0 01.11.411.445.445 0 01-.271.318c-.087.053-.172.196-.172.38 0 .142.056.414.435.63.1.055.149.171.131.314-.023.184-.151.4-.358.455-.135.038-.339.02-.563-.27-.1-.126-.164-.234-.216-.319-.12-.195-.149-.239-.327-.21h-.017a1.527 1.527 0 01-.852-.35.284.284 0 00-.155.111c-.058.076-.116.21-.046.414l.05.164c.119.423.241.863 1.563.904.355 0 .487.087.565.379.03.117.313.618.814.831.341.146.697.117 1.062-.084l.011-.006a.838.838 0 00.566-.82.854.854 0 00-.606-.793.552.552 0 01-.38-.344.584.584 0 01-.026-.266.586.586 0 01.102-.245l.006-.008a.297.297 0 01.222-.097l.011-.006zm2.06.447h-.044l-.015-.03a.471.471 0 01-.32-.256c-.044-.096-.033-.19.032-.257.224-.283.332-.641.3-1.009 0-.201-.076-.327-.149-.446-.055-.094-.108-.181-.116-.289a.455.455 0 01.367-.443.317.317 0 01.295.061c.27.21.452.857.408 1.476.006.408-.122.784-.338 1.003a.595.595 0 01-.42.19zm.146-2.596c-.018 0-.033 0-.05.009h-.009a.335.335 0 00-.18.105.293.293 0 00-.074.192c.003.067.047.134.094.216.076.125.169.28.169.516.035.397-.085.79-.335 1.109-.012.011-.038.04-.01.105.042.09.152.175.234.175h.044l.011.023a.46.46 0 00.275-.143c.186-.19.3-.537.297-.904.038-.56-.125-1.179-.353-1.356a.186.186 0 00-.114-.044v-.003zm1.66.157a1.607 1.607 0 01-1.044-.376 1.687 1.687 0 01-.43-.74 1.772 1.772 0 01-.017-.873v-.009c.148-.382.396-.361.501-.352h.015c.146.011.414.14.4.408v.009c-.036.183-.085.694.107.845a1.371 1.371 0 001.03.181h.035a.411.411 0 01.289.336.43.43 0 01-.03.227.403.403 0 01-.148.178l-.009.006c-.222.105-.46.157-.703.157l.003.003zm-1.351-1.95a1.63 1.63 0 00.017.792c.067.254.201.485.388.671.213.178.478.292.761.327.28.035.563-.012.82-.131a.284.284 0 00.093-.111.29.29 0 00.02-.149.307.307 0 00-.06-.137.251.251 0 00-.109-.076 1.503 1.503 0 01-1.126-.207c-.294-.233-.186-.89-.168-.986.005-.186-.222-.245-.263-.248h-.018c-.09-.008-.242-.02-.35.254h-.005z" fill="#FF761C"/>
            <defs>
            <linearGradient xmlns="http://www.w3.org/2000/svg" id="prefix__paint0_linear_12_232" x1="5.833" y1="25.421" x2="25.632" y2="5.567" gradientUnits="userSpaceOnUse"><stop stopColor="#FF761C"/><stop offset=".98" stopColor="#FFF9F5"/></linearGradient>
            </defs>
          </svg>
          <h5 className="text-sm tracking-tighter">DoraHacks</h5>
          </a>
          </div>
        </div>

      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>MendPath combines therapy, technology, and social connection in a way that fosters empathy, accountability, and mental health progress for users, filling a crucial gap in both personal well-being and community support. </p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function CerebrixProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./cerebrix.svg" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">Cerebrix</h3>
    </div>
      
      <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/cloudflare%20workers-F38020?style=for-the-badge&logo=cloudflare%20workers&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Hume%20AI-000000.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPgogICAgPHBhdGggZD0iTTI0Mi45NDMgNjA0Ljc0NkMyMDEuMDc3IDYxNC4zNTkgMTc1LjAyNCA2NTMuOTUgMTg1LjIwNiA2OTYuMzg3QzE5NC44MiA3MzguODIxIDIzNS41NDggNzYzLjczOCAyNzYuODQ2IDc1NC4xMjJDMzE4LjcxMiA3NDQuNTEgMzQ0LjE5NiA3MDQuOTE4IDMzNC41ODIgNjYyLjQ4NEMzMjQuOTY5IDYxOS45OTMgMjg0LjI0MSA1OTUuMTM0IDI0Mi45NDMgNjA0Ljc0NloiIGZpbGw9IiNGRkI1RDYiLz4KICAgIDxwYXRoIGQ9Ik0yNzkuMDkzIDQ0NC41OTlDMzEyLjQ4NCA0NzEuMjIgMzU5LjQxMyA0NjYuNjcgMzg2LjYwMyA0MzIuNzFDNDEzLjczNiAzOTguNzUgNDA3LjUzNiAzNTEuODIyIDM3NC43MTUgMzI1LjJDMzQxLjg5MyAyOTguNTc5IDI5NC4zMzggMzAzLjEyOSAyNjcuMjA1IDMzNy4wODlDMjQwLjA3MSAzNzEuMDQ4IDI0Ni4yNzIgNDE3Ljk3NyAyNzkuMDkzIDQ0NC41OTlaIiBmaWxsPSIjRDJBN0U5Ii8+CiAgICA8cGF0aCBkPSJNNDgxLjY4NiA4NDYuOTEyQzQ0Mi42NjQgODI4LjI1NSAzOTcuOTUzIDg0NC4wNjkgMzc5LjI5NiA4ODIuNThDMzYwLjYzOCA5MjEuMDMyIDM3NS44ODMgOTY1Ljc0NCA0MTQuOTYyIDk4NC45NjlDNDUzLjk4NCAxMDAzLjYzIDQ5OC42OTQgOTg3LjgxNSA1MTcuMzUyIDk0OS4zMDRDNTM1LjQ0MSA5MTAuMjgxIDUyMC43NjUgODY1LjU3MiA0ODEuNjg2IDg0Ni45MTJaIiBmaWxsPSIjRkZEQ0RDIi8+CiAgICA8cGF0aCBkPSJNNzE3LjA0NSA4NDYuODc5QzY3OC4wMjQgODY1LjUzNSA2NjIuNzIgOTEwLjgxNSA2ODEuMzggOTQ5LjI2OEM3MDAuMDM3IDk4Ny43MjMgNzQ0LjE3OCAxMDA0LjE2IDc4My43NjkgOTg0LjkzNUM4MjIuNzkzIDk2Ni4yNzkgODM4LjA5NCA5MjAuOTk5IDgxOS40MzcgODgyLjU0NkM4MDAuNzc3IDg0NC4wOTEgNzU2LjEyNiA4MjcuNjUxIDcxNy4wNDUgODQ2Ljg3OVoiIGZpbGw9IiNGRkQxQTQiLz4KICAgIDxwYXRoIGQ9Ik05NTUuODY2IDYwNC43NDNDOTE0IDU5NS4xMzEgODczLjg0MSA2MjAuMDQ3IDg2NC4yMjggNjYyLjQ4MUM4NTQuNjEzIDcwNC45MTUgODgwLjA5NyA3NDUuMDc0IDkyMS45NjMgNzU0LjExOUM5NjMuODI5IDc2My43MzQgMTAwMy45OSA3MzguODE4IDEwMTMuNiA2OTYuMzg0QzEwMjMuMjIgNjUzLjk1IDk5Ny43MzIgNjE0LjM1OSA5NTUuODY2IDYwNC43NDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjQzXzIpIi8+CiAgICA8cGF0aCBkPSJNOTMwLjM4OSA0NDQuNjY3Qzk2My43ODIgNDE4LjA0NSA5NjkuNDEyIDM3MS4xMTYgOTQyLjI3OSAzMzcuMTU2QzkxNS4xNDYgMzAzLjE5NyA4NjguMTU5IDI5OC43MDMgODM0Ljc3IDMyNS4yNjhDODAxLjM3NyAzNTEuODkgNzk1Ljc0NiAzOTguODE4IDgyMi44NzkgNDMyLjc3OEM4NTAuMDcgNDY2LjczNyA4OTYuOTk5IDQ3MS4yMzEgOTMwLjM4OSA0NDQuNjY3WiIgZmlsbD0iI0EwQjBGNiIvPgogICAgPHBhdGggZD0iTTU5OS4zODQgMTc3QzU1NS4yMzkgMTc3IDUyMi40MTggMjEwLjk1OSA1MjIuNDE4IDI1My45NjNDNTIyLjQxOCAyOTYuOTY3IDU1NS4yMzkgMzMwLjkyNyA1OTkuMzg0IDMzMC45MjdDNjQyLjk1MyAzMzAuOTI3IDY3Ni4zNDYgMjk2Ljk2NyA2NzYuMzQ2IDI1My45NjNDNjc2LjI4OCAyMTAuOTAyIDY0Mi45NTMgMTc3IDU5OS4zODQgMTc3WiIgZmlsbD0iI0JCQUJFRCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI0M18yIiB4MT0iOTE3LjAyIiB5MT0iNzUzLjE1MiIgeDI9Ijk1OS40OTgiIHkyPSI2MTAuMTM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC4yNjU2IiBzdG9wLWNvbG9yPSIjRkZCN0IyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC41NzgxIiBzdG9wLWNvbG9yPSIjQUI5RUZDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==&style=for-the-badge" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/supabase-3FCF8E?logo=supabase&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/clerk-6C47FF?logo=clerk&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/spotify%20api-1DB954?logo=spotify&style=for-the-badge&logoColor=white" />

          
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">HackRU 2024 submission (weekend)</h5>
          <h5 className="text-sm tracking-lighter text-center font-semibold">Honorable Mention for the Neurotech Track 🎉</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/aw4630/hackru-2024">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://hackru-2024-rouge.vercel.app/dashboard">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Demo</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://devpost.com/software/cerebrix">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Devpost</h5>
          </a>
          </div>
        </div>

      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>Cerebrix is an adaptive app for dementia and Alzheimer's care, offering engaging minigames to boost memory and cognition. It features a voice AI companion for social support, while caretakers can manage accounts and track cognitive progress. </p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function PairGridProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <h3 className="text-xl font-semibold tracking-tighter">PairGrid</h3>
    </div>
      
      <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/clerk-6C47FF?logo=clerk&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/hasura-1EB4D4?logo=hasura&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/pusher-300D4F?style=for-the-badge&logo=pusher&logoColor=white" />

          
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">December 2024 - Current</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/pairgrid">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://www.pairgrid.com/">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a>
          </div>
        </div>

      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>PairGrid connects developers by similarity to pair program and build together. It matches them using interests, tech stack, and coding goals, and will include real-time chat, video calls, and screen sharing.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function HelpSignalProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./helpsignallogo.svg" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">HelpSignal</h3>
    </div>
      
      <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/expo-000000?style=for-the-badge&logo=expo&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/flask-4590A1?logo=flask&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/amazon%20rds-527FFF?style=for-the-badge&logo=amazon%20rds&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/cloudflare%20workers-F38020?style=for-the-badge&logo=cloudflare%20workers&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter font-semibold text-center">HackHarvard 2024 submission (weekend)</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/HelpSignal">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a> |
          <a target="_blank" className="cardLink flex gap-0.5" href="https://devpost.com/software/helpsignal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Devpost</h5>
          </a>
          </div>
        </div>

      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>An emergency app using voice input to assess situations, alert nearby certified helpers (CPR, first aid), and notify first responders—providing immediate assistance before official help arrives. </p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function TravelAmuletProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
    <img src="./travelamulet-icon.png" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">TravelAmulet</h3>
    </div>
      <div className="flex items-start justify-between gap-5">
          <div>
          <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Three.js-black?logo=three.js&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Flask-4590A1?logo=flask&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/openai%20api-black?logo=openai&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/google%20maps%20api-4285F4?logo=google%20maps&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/amadeus%20api-1b69bc.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNjkuMjY3NjI0IiBoZWlnaHQ9Ijg0LjgxODM3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjkuMjY3NjI0IDg0LjgxODM3NSI+PHBhdGggZD0iTSA1MS4xMjgzNzUsNjUuODUyMTI1IEMgNDcuMjQwNzUsNjcuMzg0MjUgMzcuODE1LDcwLjQ0Njc1IDMwLjg2NjI1LDcwLjQ0Njc1IGMgLTcuNTQwMTI1LDAgLTEzLjE5Mzg3NSwtMi41OTEyNSAtMTMuMTkzODc1LC0xMC44MzgzNzUgMCwtNy4xODUgMy44ODUyNSwtMTEuMzA3NjI1IDE0LjI1NTM3NSwtMTEuNjYxNjI1IGwgMTkuMjAwNjI1LC0wLjcwNjUgeiBNIDQwLjI5LDAgQyAyNC4wMzMyNSwwIDExLjMxMDU1LDQuMDA2Mzc1IDYuMzYyMyw2LjQ4MSBsIDMuODg4MTg4LDEzLjY2NDUgYyAwLDAgMTIuNDg4NzYyLC00LjQ3NiAyNC43Mzc3NjIsLTQuNDc2IDEwLjQ4NDg3NSwwIDE1LjkwMjg3NSwyLjk0Mzc1IDE1LjkwMjg3NSwxMy4zMSB2IDUuODkxNjI1IEggMzQuOTg4MjUgQyA4LjAxMjIxMjUsMzQuODcxMTI1IDAsNDcuMjQwMjUgMCw2MC45MDU3NSBjIDAsMTguMTM5Njc1IDE0LjEzNzc1LDIzLjkxMjYyNSAyNi45NzgsMjMuOTEyNjI1IDE0Ljk2MDUsMCAyMy42NzkyNSwtNi4yNDI2NzUgMjQuNzM4MjUsLTYuMjQyNjc1IDAuODI1NzUsMCAzLjg4ODI1LDMuMjk2ODc1IDE3LjU1MTM3NSwzLjI5Njg3NSB2IC01Ny43MjIyIEMgNjkuMjY3NjI1LDYuODM1IDU4LjU0OTM3NSwwIDQwLjI5LDAgWiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4xMjUiIC8+PC9zdmc+Cg==&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/tidb%20serverless-000000.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwIDUwIj4KPHBhdGggZD0iTTIxLjI4NzcgMC4zMDA3ODFMMC4yOTM5NDUgMTIuNjY5NFYzNy40MDI1TDIxLjI4NzcgNDkuNzcxMUw0Mi4yNzczIDM3LjQwMjVWMTIuNjY5NEwyMS4yODc3IDAuMzAwNzgxWiIgZmlsbD0iI0RDMTUwQiIgLz4KPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjI4NzYgMzcuNDAyOFYyMC45MTU1TDcuMjkxMDIgMjUuMDM4NFYxNi43OTI2TDIxLjI4ODIgOC41NDY4OEwyOC4yODQ4IDEyLjY2OThMMjEuMjg4MiAxNi43OTI2VjQxLjUyNTdMMTQuMjg3NiAzNy40MDI4WiIgLz4KPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI4LjI4NDIgMzcuNDAzMVYyMC45MTU5TDM1LjI4MDcgMTYuNzkzVjMzLjI4MDNMMjguMjg0MiAzNy40MDMxWiIgLz4KPC9zdmc+&style=for-the-badge" />
            </div>
            <h5 className="text-sm tracking-tighter text-center font-semibold">TiDB Hackathon 2024 submission (1 month)</h5>
            <div className="flex gap-0.5 justify-center">
            <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/travel-amulet">
            <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            <h5 className="text-sm tracking-tighter">
            GitHub</h5>
            </a> |
            <a target="_blank" className="cardLink flex gap-0.5" href="https://travelamulet.vercel.app/">
            <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
            </svg>
            <h5 className="text-sm tracking-tighter">Link</h5>
            </a> |
            <a target="_blank" className="cardLink flex gap-0.5" href="https://devpost.com/software/travelamulet/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"></path>
            </svg>
            <h5 className="text-sm tracking-tighter">Devpost</h5>
            </a>
            </div>
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>Lets users take a quiz for travel preferences, and then uses TiDB Vector Search to return a list of matching countries, each with an overview and a list of top cities, which have nearby hotels and flight prices.</p>
          </div>
      </div>
    </article>
  </motion.div>
  )
}
export function ChamaProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
    <img src="./chama.svg" width={32} />
    <h3 className="text-xl font-semibold tracking-tighter">Chama</h3>
    </div>
      <div className="flex items-start justify-between gap-5">
          <div>
          <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/fastapi-009688?logo=fastapi&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/openai%20api-black?logo=openai&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src=" https://img.shields.io/badge/Onchainkit-0052FF.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxjaXJjbGUgY3g9IjUxMiIgY3k9IjUxMiIgcj0iNTEyIiBzdHlsZT0iZmlsbDojMDA1MmZmIi8+CiAgIDxwYXRoIGQ9Ik01MTYuMyAzNjEuODNjNjAuMjggMCAxMDguMSAzNy4xOCAxMjYuMjYgOTIuNDdINzY0Qzc0MiAzMzYuMDkgNjQ0LjQ3IDI1NiA1MTcuMjcgMjU2IDM3Mi44MiAyNTYgMjYwIDM2NS42NSAyNjAgNTEyLjQ5UzM3MCA3NjggNTE3LjI3IDc2OGMxMjQuMzUgMCAyMjMuODItODAuMDkgMjQ1Ljg0LTE5OS4yOEg2NDIuNTVjLTE3LjIyIDU1LjMtNjUgOTMuNDUtMTI1LjMyIDkzLjQ1LTgzLjIzIDAtMTQxLjU2LTYzLjg5LTE0MS41Ni0xNDkuNjguMDQtODYuNzcgNTcuNDMtMTUwLjY2IDE0MC42My0xNTAuNjZ6IiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPg==&style=for-the-badge" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/polygon.io-5F5CFF.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjI1IDI1IDE1MCAxNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxwYXRoIGQ9Ik0xMDAuNDYyNTQ0LDM2IEwxMzcuMTQyODU3LDczLjI5OTgxNSBMMTMwLjU4MjM2OCw4MS43NTEwNzI2IEwxMDAuMjgxNjc0LDE2NCBMODIuMjI5NTg2NywxMDYuNTgxOTc3IEw2NCw3Mi44NDg3NTM4IEwxMDAuNDYyNTQ0LDM2IFogTTEyMi4xNDEsOTEuMDI5IEwxMDIuMDg0MjgsMTE2Ljg1NTgzNyBMMTAyLjA4NCwxNDUuNDczIEwxMjIuMTQxLDkxLjAyOSBaIE0xMDIuNDUzLDQ0Ljc5MSBMODcuMDAxLDEwNi4wNTQgTDk3LjUyMywxMzkuNTIgTDk3LjUyMzgwOTUsMTE1LjEyNTY5NyBMMTMwLjIxOSw3My4wMjYgTDEwMi40NTMsNDQuNzkxIFogTTk3LjEzMSw0Ni4xMTIgTDY5LjgyOTU4NDUsNzMuNzAzODkxNiBMODMuNjk5LDk5LjM2OCBMOTcuMTMxLDQ2LjExMiBaIiBpZD0icG9seUxvZ28iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgIDwvcGF0aD4KPC9zdmc+&style=for-the-badge" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/llamaindex-FF3621?logo=databricks&style=for-the-badge&logoColor=white" />
            <img className="h-5 sm:h-6" src="https://img.shields.io/badge/lancedb-FF3621?logo=databricks&style=for-the-badge&logoColor=white" />
            </div>
            <h5 className="text-sm tracking-tighter text-center font-semibold">HackPrinceton 2024 submission (weekend)</h5>
            <h5 className="text-sm tracking-tighter text-center font-semibold">Winner for Best Use of Onchainkit 🎉</h5>
            <div className="flex gap-0.5 justify-center">
            <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/chama">
            <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            <h5 className="text-sm tracking-tighter">
            GitHub</h5>
            </a> |
            <a target="_blank" className="cardLink flex gap-0.5" href="https://www.chama.study/">
            <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
            </svg>
            <h5 className="text-sm tracking-tighter">Link</h5>
            </a> |
            <a target="_blank" className="cardLink flex gap-0.5" href="https://dorahacks.io/buidl/19463/">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M13.507 10.316l.012.023c.353 0 .615-.394.674-.893-.29.097-.575.199-.858.3-.035.06-.07.12-.11.173-.13.14.104.396.282.396zm16.748.33c-.741-3-6.543-3.746-13.487-1.96-.248.186-.531.27-.75.305-.577.085-.784.123-.84.496-.055.373.93.557 1.593.073.446-.324.767-1.027 1.163-1.076.514-.061.607 1.289.313 1.954-.295.665-1.287 1.094-1.66.758-.128-.122-.11-.19-.128-.475-.018-.286-.674-.233-.674.201.02.303.006.61-.044.91-.184.954-1.893 1.106-2.336 1.056-.44-.05-.98-.397-.717-.613.603-.475.227-1.586-.645-2.038-.274.11-.545.224-.814.341a.461.461 0 00.32.274.923.923 0 01.044 1.753c-1.14.63-1.913-.537-1.98-.793-.055-.21-.137-.292-.341-.315-5.29 2.689-8.665 6.198-8.03 8.805.823 3.354 7.986 3.894 15.995 1.222 8.01-2.671 13.843-7.522 13.018-10.879z" fill="url(#prefix__paint0_linear_12_232)"/>
            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M13.592 7.755a.38.38 0 00-.312.367c.011.214.262.362.262.733a1.51 1.51 0 01-.318 1.064c-.128.14.105.397.283.397l.012.023c.405 0 .691-.519.685-1.126.05-.732-.239-1.583-.612-1.46v.002zm2.403-.006a.351.351 0 00.123-.146.345.345 0 00-.213-.467c-.187.042-.38.045-.566.012a1.488 1.488 0 01-.525-.207c-.269-.213-.134-.915-.134-.915.011-.234-.24-.324-.33-.33-.093-.006-.306-.044-.44.306-.068.266-.056.572.017.837.073.266.213.508.405.703.228.19.508.31.803.347.294.038.595-.011.863-.14h-.003zM28.63 23.333c-.613-1.814-3.53-5.49-6.834-8.035-.606-.654-.735-1.59-.991-2.488a8.132 8.132 0 01-.496-3.007c.157-.727.361-1.441.612-2.138.406-1.485.738-2.993.992-4.51a6.323 6.323 0 00-.061-2.487c-.277-1.112-4.498 2.126-5.282 2.657a8.325 8.325 0 00-2.605-.808c-1.811-.181-3.64.055-5.343.691C7.14 2.181 4.675.116 3.842.434h.017c-.767.318-.406 1.887-.251 2.835.373 2.249 1.312 4.827 1.557 6.88.884 7.42 1.208 11.802 8.943 16.36.854.435 1.75.785 2.672 1.044 1.898.251 2.604-.659 2.604-1.271a2.851 2.851 0 00-.863-1.741c-.624-.698-1.642-1.503-2.115-2.077a28.649 28.649 0 003.678-.68 5.057 5.057 0 011.225-.286.95.95 0 01.551.275c.523.434 1.018.898 1.49 1.388a17.28 17.28 0 001.987 1.907 2.353 2.353 0 002.923.053c.247-.219.417-.51.484-.834a1.52 1.52 0 00-.111-.957l-.003.003zM18.25 10.438c-.295.665-1.287 1.094-1.66.759-.128-.123-.11-.19-.128-.476-.018-.286-.674-.233-.674.202.02.303.006.61-.044.91-.184.953-1.893 1.105-2.336 1.055-.44-.05-.98-.396-.718-.612.64-.502.184-1.712-.79-2.109-.35-.134-.484-.184-.613-.055a.462.462 0 00-.09.213.5.5 0 00.02.227c.027.073.07.14.129.19.058.052.128.09.204.108a.917.917 0 01.66.86.91.91 0 01-.164.545.92.92 0 01-.452.348c-1.14.63-1.914-.537-1.98-.794-.068-.256-.173-.323-.497-.323-1.551-.05-1.525-.666-1.68-1.118-.154-.452.24-.665.307-.612.23.198.519.318.822.341.324-.055.295.146.613.557.54.697 1.006-.219.7-.39-.674-.386-.496-1.004-.257-1.138a.384.384 0 00.149-.105.392.392 0 00.079-.347.394.394 0 00-.088-.16.442.442 0 00-.612 0c-.412.379-.155.848-.496.88-.508.038-1.374-.574-1.018-1.796.356-1.222 1.837-1.222 1.837-1.222l-.038.422a1.886 1.886 0 00.744 1.322c.925.525 1.881.268 1.954-.085.044-.219-.256-.475-.735-.446a1.224 1.224 0 01-1.312-.881 1.434 1.434 0 01.227-.948c.184-.28.458-.49.78-.592a1.084 1.084 0 011.324.49c.034.064.043.14.09.195a.446.446 0 00.589.097s.589-.904 1.298-.855c.204.015.4.079.574.184.175.105.321.254.426.429 0 0 1.625-.324 1.893 1.105.312 1.64-.691 2.091-1.269 2.176-.577.084-.784.122-.84.496-.055.373.93.557 1.593.073.446-.324.767-1.027 1.164-1.077.513-.06.606 1.29.312 1.954l.003.003z" fill="#0E0E11"/>
            <path xmlns="http://www.w3.org/2000/svg" d="M13.589 12.97c-.076 0-.137-.003-.187-.01-.341-.037-.773-.253-.843-.49-.026-.093.003-.183.088-.25.21-.166.3-.426.256-.738-.073-.516-.496-1.03-1.03-1.248-.352-.137-.443-.158-.53-.076a.387.387 0 00-.073.175.431.431 0 00.017.192.402.402 0 00.28.251.998.998 0 01.715.93.985.985 0 01-.66.96c-.402.222-.801.251-1.183.088-.522-.225-.85-.75-.896-.93-.055-.21-.116-.269-.426-.269-1.429-.044-1.58-.58-1.7-1.012a3.213 3.213 0 00-.047-.157c-.108-.316.024-.546.181-.654.076-.052.178-.09.242-.038.219.187.487.3.773.327.269-.041.347.087.467.28.05.082.114.187.207.306.14.181.28.257.411.222.137-.038.236-.199.254-.333.006-.038.009-.134-.058-.172-.444-.254-.51-.583-.51-.758 0-.216.104-.423.25-.508l.009-.005a.32.32 0 00.122-.085.32.32 0 00.067-.28.284.284 0 00-.073-.128.365.365 0 00-.253-.1.38.38 0 00-.257.103c-.19.175-.222.364-.254.533-.029.17-.061.347-.288.368-.3.02-.654-.155-.884-.438-.3-.37-.376-.886-.21-1.452.367-1.26 1.893-1.275 1.907-1.275h.079l-.044.493c.027.248.1.484.222.703.122.219.286.405.487.557.618.35 1.251.344 1.607.184.134-.061.219-.14.236-.222.012-.052-.011-.114-.06-.172-.091-.102-.296-.207-.599-.187a1.297 1.297 0 01-1.388-.933V6.71c-.041-.35.044-.702.236-.997.193-.295.481-.513.817-.621.256-.097.54-.097.799 0 .26.096.475.283.61.525.017.032.029.064.04.093a.26.26 0 00.044.09.37.37 0 00.32.14.396.396 0 00.161-.05c.082-.122.654-.924 1.357-.874a1.347 1.347 0 011.03.604c.186-.03.848-.097 1.355.248.304.204.496.516.572.924.128.677.05 1.225-.233 1.625-.339.478-.878.603-1.097.636-.59.087-.732.12-.779.434-.011.079.056.137.114.172.254.155.887.181 1.365-.169.178-.128.338-.324.493-.513.228-.28.443-.543.706-.575.131-.014.25.041.341.166.268.362.292 1.336.047 1.89-.207.47-.732.805-1.14.893-.269.058-.494.017-.636-.111-.132-.125-.138-.216-.146-.411 0-.035-.003-.073-.006-.114-.006-.09-.126-.11-.196-.11-.134.002-.332.09-.332.306.02.303.006.615-.044.921-.175.91-1.601 1.126-2.228 1.126l.006.012zm-2.13-3.005c.12 0 .263.056.47.135.59.239 1.041.787 1.12 1.362.053.364-.058.674-.312.872-.047.038-.047.07-.038.096.04.143.382.347.718.385.41.047 2.082-.096 2.254-.997.047-.292.061-.595.041-.893 0-.289.245-.45.475-.458.193-.006.336.096.345.245 0 .044.005.082.005.117.01.19.012.227.1.312.105.096.285.122.504.076.374-.079.852-.385 1.039-.808.224-.508.21-1.424-.03-1.747-.06-.082-.128-.117-.207-.108-.204.026-.4.265-.61.522-.16.195-.326.4-.521.54-.493.358-1.188.382-1.526.174-.134-.081-.201-.195-.18-.317.063-.432.344-.473.9-.558.199-.029.692-.145.998-.577.26-.368.333-.875.21-1.514-.07-.37-.242-.65-.51-.831-.537-.362-1.292-.219-1.298-.216l-.05.009-.026-.044a1.198 1.198 0 00-.942-.574c-.66-.047-1.228.813-1.234.822l-.009.015-.014.008a.496.496 0 01-.24.08.555.555 0 01-.247-.042.542.542 0 01-.202-.151.411.411 0 01-.067-.135.546.546 0 00-.029-.072 1.005 1.005 0 00-1.234-.458 1.395 1.395 0 00-.743.563c-.172.265-.248.58-.216.895a1.154 1.154 0 001.23.822c.307-.02.575.07.721.237.079.09.114.195.093.297-.026.129-.14.245-.317.327-.391.175-1.08.187-1.745-.19l-.008-.006a1.95 1.95 0 01-.773-1.37v-.006l.029-.344c-.306.023-1.4.172-1.689 1.166-.152.52-.084.986.184 1.322.23.285.545.4.758.385.102-.01.123-.059.155-.248.029-.172.073-.406.297-.613a.518.518 0 01.712 0 .438.438 0 01.11.411.445.445 0 01-.271.318c-.087.053-.172.196-.172.38 0 .142.056.414.435.63.1.055.149.171.131.314-.023.184-.151.4-.358.455-.135.038-.339.02-.563-.27-.1-.126-.164-.234-.216-.319-.12-.195-.149-.239-.327-.21h-.017a1.527 1.527 0 01-.852-.35.284.284 0 00-.155.111c-.058.076-.116.21-.046.414l.05.164c.119.423.241.863 1.563.904.355 0 .487.087.565.379.03.117.313.618.814.831.341.146.697.117 1.062-.084l.011-.006a.838.838 0 00.566-.82.854.854 0 00-.606-.793.552.552 0 01-.38-.344.584.584 0 01-.026-.266.586.586 0 01.102-.245l.006-.008a.297.297 0 01.222-.097l.011-.006zm2.06.447h-.044l-.015-.03a.471.471 0 01-.32-.256c-.044-.096-.033-.19.032-.257.224-.283.332-.641.3-1.009 0-.201-.076-.327-.149-.446-.055-.094-.108-.181-.116-.289a.455.455 0 01.367-.443.317.317 0 01.295.061c.27.21.452.857.408 1.476.006.408-.122.784-.338 1.003a.595.595 0 01-.42.19zm.146-2.596c-.018 0-.033 0-.05.009h-.009a.335.335 0 00-.18.105.293.293 0 00-.074.192c.003.067.047.134.094.216.076.125.169.28.169.516.035.397-.085.79-.335 1.109-.012.011-.038.04-.01.105.042.09.152.175.234.175h.044l.011.023a.46.46 0 00.275-.143c.186-.19.3-.537.297-.904.038-.56-.125-1.179-.353-1.356a.186.186 0 00-.114-.044v-.003zm1.66.157a1.607 1.607 0 01-1.044-.376 1.687 1.687 0 01-.43-.74 1.772 1.772 0 01-.017-.873v-.009c.148-.382.396-.361.501-.352h.015c.146.011.414.14.4.408v.009c-.036.183-.085.694.107.845a1.371 1.371 0 001.03.181h.035a.411.411 0 01.289.336.43.43 0 01-.03.227.403.403 0 01-.148.178l-.009.006c-.222.105-.46.157-.703.157l.003.003zm-1.351-1.95a1.63 1.63 0 00.017.792c.067.254.201.485.388.671.213.178.478.292.761.327.28.035.563-.012.82-.131a.284.284 0 00.093-.111.29.29 0 00.02-.149.307.307 0 00-.06-.137.251.251 0 00-.109-.076 1.503 1.503 0 01-1.126-.207c-.294-.233-.186-.89-.168-.986.005-.186-.222-.245-.263-.248h-.018c-.09-.008-.242-.02-.35.254h-.005z" fill="#FF761C"/>
            <defs>
            <linearGradient xmlns="http://www.w3.org/2000/svg" id="prefix__paint0_linear_12_232" x1="5.833" y1="25.421" x2="25.632" y2="5.567" gradientUnits="userSpaceOnUse"><stop stopColor="#FF761C"/><stop offset=".98" stopColor="#FFF9F5"/></linearGradient>
            </defs>
          </svg>
          <h5 className="text-sm tracking-tighter">DoraHacks</h5>
          </a>
            </div>
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>Chama empowers everyone to understand crypto by providing real-time insights, sentiment analysis, and personalized explanations. We make complex trends accessible, enabling informed decisions and bridging the crypto literacy gap for all.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}

export function ScienceProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <h3 className="text-xl font-semibold tracking-tighter">TensorFlow Coronaviruses</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/matplotlib-212529.svg?logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiBzdHJva2U9ImdyYXkiPgo8ZyBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiNGRkYiPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjkwIiByPSI4OCIvPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjkwIiByPSI2NiIvPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjkwIiByPSI0NCIvPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjkwIiByPSIyMiIvPgo8cGF0aCBkPSJtOTAsMnYxNzZtNjItMjYtMTI0LTEyNG0xMjQsMC0xMjQsMTI0bTE1MC02MkgyIi8+CjwvZz48ZyBvcGFjaXR5PSIuOCI+CjxwYXRoIGZpbGw9IiM0NEMiIGQ9Im05MCw5MGgxOGExOCwxOCAwIDAsMCAwLTV6Ii8+CjxwYXRoIGZpbGw9IiNCQzMiIGQ9Im05MCw5MCAzNC00M2E1NSw1NSAwIDAsMC0xNS04eiIvPgo8cGF0aCBmaWxsPSIjRDkzIiBkPSJtOTAsOTAtMTYtNzJhNzQsNzQgMCAwLDAtMzEsMTV6Ii8+CjxwYXRoIGZpbGw9IiNEQjMiIGQ9Im05MCw5MC01OC0yOGE2NSw2NSAwIDAsMC01LDM5eiIvPgo8cGF0aCBmaWxsPSIjM0JCIiBkPSJtOTAsOTAtMzMsMTZhMzcsMzcgMCAwLDAgMiw1eiIvPgo8cGF0aCBmaWxsPSIjM0M5IiBkPSJtOTAsOTAtMTAsNDVhNDYsNDYgMCAwLDAgMTgsMHoiLz4KPHBhdGggZmlsbD0iI0Q3MyIgZD0ibTkwLDkwIDQ2LDU4YTc0LDc0IDAgMCwwIDEyLTEyeiIvPgo8L2c+PC9zdmc+&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">September 2022 - April 2023</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://github.com/josephHelfenbein/tf-coronaviruses">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">
          GitHub</h5>
          </a>
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>A simple project I did for the Long Island Science Congress competition that tests whether a convolutional neural network or recurrent neural network is better for classification of coronavirus RNA, winning a Meritorious Award.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function HorrorGameProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./scpicon.jpg" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">SCP: Hours To Go</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
      <img className="h-5 sm:h-6" src="https://img.shields.io/badge/c++-00599C?logo=cplusplus&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/unreal%20engine-black?logo=unreal%20engine&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/steamworks%20api-1b2838?style=for-the-badge&logo=steam&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter font-semibold text-center">March 2023 - June 2024</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://store.steampowered.com/app/2795370/SCP_Hours_to_Go/">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a>
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>A survival horror escape room game based on the SCP Foundation Wiki. A catastrophic event shuts down the facility, leaving you alone in the security room. Solve puzzles and contain loose SCPs to escape, or survive for as long as possible for a high score. </p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function FightingGameProjectCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./rhythmofknighticon.png" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">Rhythm of the Knight</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/c%23-68217A.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOCAxMjgiPgo8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTE3LjUgMzMuNWwuMy0uMmMtLjYtMS4xLTEuNS0yLjEtMi40LTIuNmwtNDguMy0yNy44Yy0uOC0uNS0xLjktLjctMy4xLS43LTEuMiAwLTIuMy4zLTMuMS43bC00OCAyNy45Yy0xLjcgMS0yLjkgMy41LTIuOSA1LjR2NTUuN2MwIDEuMS4yIDIuMy45IDMuNGwtLjIuMWMuNS44IDEuMiAxLjUgMS45IDEuOWw0OC4yIDI3LjljLjguNSAxLjkuNyAzLjEuNyAxLjIgMCAyLjMtLjMgMy4xLS43bDQ4LTI3LjljMS43LTEgMi45LTMuNSAyLjktNS40di01NS44Yy4xLS44IDAtMS43LS40LTIuNnptLTUzLjUgNzBjLTIxLjggMC0zOS41LTE3LjctMzkuNS0zOS41czE3LjctMzkuNSAzOS41LTM5LjVjMTQuNyAwIDI3LjUgOC4xIDM0LjMgMjBsLTEzIDcuNWMtNC4yLTcuNS0xMi4yLTEyLjUtMjEuMy0xMi41LTEzLjUgMC0yNC41IDExLTI0LjUgMjQuNXMxMSAyNC41IDI0LjUgMjQuNWM5LjEgMCAxNy4xLTUgMjEuMy0xMi40bDEyLjkgNy42Yy02LjggMTEuOC0xOS42IDE5LjgtMzQuMiAxOS44em01MS00MS41aC0zLjJsLS45IDRoNC4xdjVoLTVsLTEuMiA2aC00LjlsMS4yLTZoLTMuOGwtMS4yIDZoLTQuOGwxLjItNmgtMi41di01aDMuNWwuOS00aC00LjR2LTVoNS4zbDEuMi02aDQuOWwtMS4yIDZoMy44bDEuMi02aDQuOGwtMS4yIDZoMi4ydjV6TTEwMi4zIDY2aDMuOGwuOS00aC0zLjh6Ii8+Cjwvc3ZnPg==&style=for-the-badge" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/unity%20engine-black?logo=unity&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/photon%20engine-004480.svg?logo=data:image/svg%2bxml;base64,PHN2ZyBoZWlnaHQ9IjgwIiB3aWR0aD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjE0LjQyIDYuNjggNzYuMjcgNzYuMjciPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNi45NCw1OS4yNmMuMTguMi4zOC40LjU3LjU5bC42LjU4LTEwLjc0LDEzYy0uNjEtLjU0LTEuMjEtMS4xLTEuNzktMS42OFMyNC40NCw3MC42MSwyMy45MSw3MGwxMy0xMC43NFpNNDEuNDMsNjNsLTgsMTQuODdhMzcsMzcsMCwwLDEtNC4wNy0yLjcyTDQwLjA1LDYyYy40NS4zMy45MS42MywxLjM4LjkyWm0tNy03Yy4yOC40Ni41OS45Mi45MiwxLjM3TDIyLjI2LDY4YTM3LjMyLDM3LjMyLDAsMCwxLTIuNzItNC4wNmwxNC44OC04Wm0xMC43Niw4LjgzTDQwLjI0LDgwLjkyYTM4LjI5LDM4LjI5LDAsMCwxLTQuNTEtMS44N2w3LjkyLTE0LjkxcS43Ni4zNSwxLjUzLjYzWk0zMi42LDUyLjE4cS4yOC43OC42MywxLjUzTDE4LjMyLDYxLjY0YTM2LjE2LDM2LjE2LDAsMCwxLTEuODctNC41MkwzMi42LDUyLjE4Wk00OS4yMiw2NS44MmwtMS42OSwxNi44YTM5LjE3LDM5LjE3LDAsMCwxLTQuOC0xTDQ3LjYsNjUuNWMuNTMuMTMsMS4wNy4yMywxLjYyLjMyWk0zMS41NSw0OC4xNWMuMDguNTQuMTksMS4wOC4zMiwxLjYyTDE1LjcsNTQuNjNhMzcuNTcsMzcuNTcsMCwwLDEtLjk1LTQuNzlsMTYuOC0xLjY5Wk0zMS4zLDQ0YzAsLjU1LDAsMS4xMSwwLDEuNjZMMTQuNSw0Ny4yOWEzOCwzOCwwLDAsMSwwLTQuODlMMzEuMyw0NFpNNTMuMzgsNjYuMDYsNTUsODIuODdhMzkuODksMzkuODksMCwwLDEtNC44OSwwbDEuNjItMTYuODFhMTUuMTQsMTUuMTQsMCwwLDAsMS42NSwwWm00LjEzLS41Niw0Ljg3LDE2LjE3YTM5LjE3LDM5LjE3LDAsMCwxLTQuOCwxbC0xLjY5LTE2LjhjLjU0LS4wOSwxLjA5LS4xOSwxLjYyLS4zMlpNMzEuODcsMzkuODVjLS4xMy41NC0uMjQsMS4wOC0uMzIsMS42M2wtMTYuOC0xLjdBMzcuNTcsMzcuNTcsMCwwLDEsMTUuNywzNWwxNi4xNyw0Ljg2Wk02MS40Niw2NC4xNGw3LjkyLDE0LjkxYTM5LjQ2LDM5LjQ2LDAsMCwxLTQuNTIsMS44N0w1OS45Myw2NC43N3EuNzYtLjI4LDEuNTMtLjYzWm0tMjguMi0yOC4zYy0uMjMuNS0uNDUsMS0uNjQsMS41M2wtMTYuMTMtNWEzNy44NiwzNy44NiwwLDAsMSwxLjg5LTQuNTJsMTQuODgsOFpNNjUuMDUsNjIsNzUuNzQsNzUuMTFhNDAsNDAsMCwwLDEtNC4wNywyLjcyTDYzLjY4LDYzYy40Ny0uMjkuOTItLjU5LDEuMzctLjkyWk0zNS4zNSwzMi4zYy0uMzMuNDUtLjY0LjktLjkyLDEuMzdsLTE0Ljg3LThhMzkuMzcsMzkuMzcsMCwwLDEsMi43Mi00LjA2TDM1LjM1LDMyLjNaTTgxLjIsNzBjLS41NC42MS0xLjA5LDEuMi0xLjY3LDEuNzhzLTEuMTgsMS4xNC0xLjc5LDEuNjhMNjcsNjAuNDNsLjYtLjU4LjU3LS41OUw4MS4yLDcwWk0yNy4zNywxNi4xN2wxMC43NCwxMy0uNi41OGMtLjE5LjE5LS4zOS4zOS0uNTcuNTlsLTEzLTEwLjc0Yy41My0uNiwxLjA5LTEuMiwxLjY3LTEuNzhzMS4xOC0xLjE0LDEuNzktMS42N1ptNTguMiw0Ny43NkEzNy4zMiwzNy4zMiwwLDAsMSw4Mi44NSw2OEw2OS43Nyw1Ny4zMWMuMzMtLjQ1LjY0LS45MS45Mi0xLjM3bDE0Ljg4LDhaTTMzLjQ0LDExLjhsOCwxNC44N2MtLjQ3LjI5LS45My42LTEuMzguOTJMMjkuMzcsMTQuNTJhMzcsMzcsMCwwLDEsNC4wNy0yLjcyWk04OC42Niw1Ny4xMmEzNi4xNiwzNi4xNiwwLDAsMS0xLjg3LDQuNTJMNzEuODgsNTMuNzFxLjM0LS43NS42My0xLjUzbDE2LjE1LDQuOTRaTTQwLjI4LDguNjksNDUuMiwyNC44NXEtLjc4LjI4LTEuNTMuNjNMMzUuNzYsMTAuNTZhMzkuNDYsMzkuNDYsMCwwLDEsNC41Mi0xLjg3Wk05MC4zNiw0OS44NGEzNy41NywzNy41NywwLDAsMS0xLDQuNzlMNzMuMjQsNDkuNzdjLjEzLS41NC4yNC0xLjA4LjMyLTEuNjJsMTYuOCwxLjY5Wk00Ny41Myw3LDQ5LjIyLDIzLjhjLS41NS4wOS0xLjA5LjItMS42Mi4zMkw0Mi43Myw4QTM5LjE0LDM5LjE0LDAsMCwxLDQ3LjUzLDdaTTkwLjYxLDQyLjM3YTM2LjEyLDM2LjEyLDAsMCwxLDAsNC44OGwtMTYuOC0xLjYxYzAtLjU1LDAtMS4xLDAtMS42NmwxNi44LTEuNjFaTTU1LDYuNzUsNTMuMzgsMjMuNTZxLS44MywwLTEuNjUsMEw1MC4xMSw2Ljc1YTM5Ljg5LDM5Ljg5LDAsMCwxLDQuODksMFpNODkuNDEsMzVhMzcuNTcsMzcuNTcsMCwwLDEsMSw0Ljc5bC0xNi44LDEuN2MtLjA4LS41NS0uMTktMS4wOS0uMzItMS42M0w4OS40MSwzNVptLTI3LTI3TDU3LjUxLDI0LjEyYy0uNTMtLjEyLTEuMDgtLjIzLTEuNjItLjMyTDU3LjU4LDdhMzkuMTQsMzkuMTQsMCwwLDEsNC44Ljk0Wm03LDIuNjJMNjEuNDYsMjUuNDljLS41MS0uMjQtMS0uNDUtMS41My0uNjRMNjQuODYsOC43YTM5LjQ2LDM5LjQ2LDAsMCwxLDQuNTIsMS44N1pNODYuNzgsMjhhMzcuNzQsMzcuNzQsMCwwLDEsMS44Nyw0LjUybC0xNi4xNCw1Yy0uMTktLjUxLS40MS0xLS42NC0xLjUzTDg2Ljc4LDI4Wk03NS43MSwxNC41LDY1LDI3LjU4Yy0uNDUtLjMyLS45MS0uNjMtMS4zOC0uOTJsOC0xNC44OGEzNywzNywwLDAsMSw0LjA3LDIuNzJabTcuMSw3LjA4YTM4LjIsMzguMiwwLDAsMSwyLjcyLDQuMDVsLTE0Ljg2LDhjLS4yOS0uNDctLjU5LS45My0uOTItMS4zOGwxMy4wNi0xMC43Wm0tNS4wNy01LjQxYy42MS41MywxLjIsMS4wOSwxLjc5LDEuNjdTODAuNjYsMTksODEuMiwxOS42MmwtMTMsMTAuNzVxLS4yOC0uMzItLjU3LS42bC0uNi0uNTgsMTAuNzQtMTNaIi8+Cjwvc3ZnPg==&style=for-the-badge" />
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">March 2021 - May 2021</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://themangoeffect.itch.io/rhythm-of-the-knight">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a> 
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>A rhythm-based retro-style fighting game. Use a sword and shield and fly around the map, fighting your nemesis on the rhythm. When the rhythm bar hits green, attack! Online 1v1 is also available, just write a code in the room ID for the game room. </p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function PrototypeGameCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./prototypeimg.png" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">PR0707YP3</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/c%23-68217A.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOCAxMjgiPgo8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTE3LjUgMzMuNWwuMy0uMmMtLjYtMS4xLTEuNS0yLjEtMi40LTIuNmwtNDguMy0yNy44Yy0uOC0uNS0xLjktLjctMy4xLS43LTEuMiAwLTIuMy4zLTMuMS43bC00OCAyNy45Yy0xLjcgMS0yLjkgMy41LTIuOSA1LjR2NTUuN2MwIDEuMS4yIDIuMy45IDMuNGwtLjIuMWMuNS44IDEuMiAxLjUgMS45IDEuOWw0OC4yIDI3LjljLjguNSAxLjkuNyAzLjEuNyAxLjIgMCAyLjMtLjMgMy4xLS43bDQ4LTI3LjljMS43LTEgMi45LTMuNSAyLjktNS40di01NS44Yy4xLS44IDAtMS43LS40LTIuNnptLTUzLjUgNzBjLTIxLjggMC0zOS41LTE3LjctMzkuNS0zOS41czE3LjctMzkuNSAzOS41LTM5LjVjMTQuNyAwIDI3LjUgOC4xIDM0LjMgMjBsLTEzIDcuNWMtNC4yLTcuNS0xMi4yLTEyLjUtMjEuMy0xMi41LTEzLjUgMC0yNC41IDExLTI0LjUgMjQuNXMxMSAyNC41IDI0LjUgMjQuNWM5LjEgMCAxNy4xLTUgMjEuMy0xMi40bDEyLjkgNy42Yy02LjggMTEuOC0xOS42IDE5LjgtMzQuMiAxOS44em01MS00MS41aC0zLjJsLS45IDRoNC4xdjVoLTVsLTEuMiA2aC00LjlsMS4yLTZoLTMuOGwtMS4yIDZoLTQuOGwxLjItNmgtMi41di01aDMuNWwuOS00aC00LjR2LTVoNS4zbDEuMi02aDQuOWwtMS4yIDZoMy44bDEuMi02aDQuOGwtMS4yIDZoMi4ydjV6TTEwMi4zIDY2aDMuOGwuOS00aC0zLjh6Ii8+Cjwvc3ZnPg==&style=for-the-badge" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/unity%20engine-black?logo=unity&style=for-the-badge&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">June 2021 - July 2021</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://themangoeffect.itch.io/pr0707yp3">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a> 
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>Play as PR0707YP3, a robot in need of a power source. Collect power along your journey as you shoot aliens and drones. Save your ammo, and don't run out of power.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function SpiritBoxGameCard(){
  return (
    <motion.div initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ default: { type: "spring" },
    opacity: { ease: "linear" }, duration: 0.15 }} className="flex justify-center m-0 mt-4 md:m-4 p-4 shadow-lg rounded-xl h-100 md:h-96">
    <article className="w-4xl">
    <div className="flex items-start justify-center gap-2">
      <img src="./spiritbox.png" width={32} />
      <h3 className="text-xl font-semibold tracking-tighter">Protect the Spirit Box</h3>
    </div>
    <div>
      <div className="flex flex-wrap items-start justify-start gap-1 pt-2 pb-3">
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/c%23-68217A.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOCAxMjgiPgo8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTE3LjUgMzMuNWwuMy0uMmMtLjYtMS4xLTEuNS0yLjEtMi40LTIuNmwtNDguMy0yNy44Yy0uOC0uNS0xLjktLjctMy4xLS43LTEuMiAwLTIuMy4zLTMuMS43bC00OCAyNy45Yy0xLjcgMS0yLjkgMy41LTIuOSA1LjR2NTUuN2MwIDEuMS4yIDIuMy45IDMuNGwtLjIuMWMuNS44IDEuMiAxLjUgMS45IDEuOWw0OC4yIDI3LjljLjguNSAxLjkuNyAzLjEuNyAxLjIgMCAyLjMtLjMgMy4xLS43bDQ4LTI3LjljMS43LTEgMi45LTMuNSAyLjktNS40di01NS44Yy4xLS44IDAtMS43LS40LTIuNnptLTUzLjUgNzBjLTIxLjggMC0zOS41LTE3LjctMzkuNS0zOS41czE3LjctMzkuNSAzOS41LTM5LjVjMTQuNyAwIDI3LjUgOC4xIDM0LjMgMjBsLTEzIDcuNWMtNC4yLTcuNS0xMi4yLTEyLjUtMjEuMy0xMi41LTEzLjUgMC0yNC41IDExLTI0LjUgMjQuNXMxMSAyNC41IDI0LjUgMjQuNWM5LjEgMCAxNy4xLTUgMjEuMy0xMi40bDEyLjkgNy42Yy02LjggMTEuOC0xOS42IDE5LjgtMzQuMiAxOS44em01MS00MS41aC0zLjJsLS45IDRoNC4xdjVoLTVsLTEuMiA2aC00LjlsMS4yLTZoLTMuOGwtMS4yIDZoLTQuOGwxLjItNmgtMi41di01aDMuNWwuOS00aC00LjR2LTVoNS4zbDEuMi02aDQuOWwtMS4yIDZoMy44bDEuMi02aDQuOGwtMS4yIDZoMi4ydjV6TTEwMi4zIDY2aDMuOGwuOS00aC0zLjh6Ii8+Cjwvc3ZnPg==&style=for-the-badge" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/unity%20engine-black?logo=unity&style=for-the-badge&logoColor=white" />
          <img className="h-5 sm:h-6" src="https://img.shields.io/badge/steamvr-1b2838?style=for-the-badge&logo=steam&logoColor=white" />
          </div>
          <h5 className="text-sm tracking-tighter text-center font-semibold">April 2021 - August 2021</h5>
          <div className="flex gap-0.5 justify-center">
          <a target="_blank" className="cardLink flex gap-0.5" href="https://themangoeffect.itch.io/protect-the-spirit-box">
          <svg width="20" height="20" viewBox="0 -960 960 960" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path>
          </svg>
          <h5 className="text-sm tracking-tighter">Link</h5>
          </a> 
          </div>
        </div>
      <div className="block h-full rounded-lg">
          <div className="p-3 text-xs md:text-sm font-medium text-gray-900">
            <p>Welcome, spirit! You will be shortly teleported to the island. Your mission is to protect the valuable spirit box from waves of monsters. Weapons will be provided. Survive as many waves as you can. A SteamVR build is also available.</p>
          </div>
      </div>
    </article>
    </motion.div>
  )
}
export function E3ProjectCard( ){
  return (
    <div className="flex justify-center p-5 h-100 md:h-90">
      <article className="max-w-4xl">
          <div className="md:pl-5 md:pb-2">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tighter">Software Engineer Intern</h3>
            <h5 className="text-md md:text-lg tracking-tighter">E3 Biogenetics</h5>
            <h5 className="text-sm md:text-base tracking-tighter ">July 2022 - September 2022</h5>
          </div>
        <div className="block h-full rounded-lg md:pl-5">
            <div className="p-3 text-xs md:text-base font-medium text-gray-900">
              <li className="p-2">Created a daily survey web application using JavaScript and PHP, garnering 50 daily users</li>
              <li className="p-2">Implemented a robust account system using PHP and SQL with a MySQL database, allowing users to track their responses over time with visualized data trends from phpChart, enhancing user engagement</li>
              <li className="p-2">Increased accessibility by integrating a language toggle feature with JSON and JavaScript, enabling seamless language switching, and storing user language preferences for a personalized experience</li>
            </div>
        </div>
      </article>
    </div>
  )
}