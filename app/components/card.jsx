import Image from 'next/image';
import picture from '/public/1708555168208.jpg';
export default function Card( ){
    return (
      <div>
        <div className='justify-center flex md:m-0 m-1 mt-4'>
            <article className="flex items-center max-w-4xl justify-center">
              <div>
                <div className="flex justify-center sm:flex-row flex-col items-center gap-5">
                  <Image
                    alt=""
                    width={250}
                    height={250}
                    src={picture}
                    className="size-32 mt-8 md:m-6 object-cover border-3 border-black"
                  />
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl md:text-4xl mb-4 font-semibold tracking-tighter text-black dark:text-white">Hi 👋, I'm Joseph J Helfenbein</h2>
                    <p className="mt-2 text-xs mr-2 font-medium text-gray-900 dark:text-gray-50 text-center">
                      🎓 Computer Science & Physics Student @ CCNY <br />
                      🎮 Graphics Programming & Full-Stack Developer
                    </p>
                  </div>
                </div>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />
                <p className="mt-5 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-50">
                 I'm a Computer Science & Physics student at CCNY specializing in real-time rendering and simulation, building high-performance graphics pipelines and interactive environments with APIs like Vulkan, CUDA, and OpenGL, while also developing scalable, cloud-native fullstack applications using serverless architectures and modern frameworks (Go, Java Spring, Next.js/React, Nuxt/Vue).
                </p>
              </div>
            </article>
          </div>
      </div>
    )
}