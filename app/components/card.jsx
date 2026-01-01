import Image from 'next/image';
import picture from '../../public/1708555168208.jpg';
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
                      🎓 Computer Science & Physics Student @ CCNY
                    </p>
                  </div>
                </div>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />
                <p className="mt-5 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-50">
                 Computer Science & Physics student working on graphics and systems programming in C++ and Vulkan. 
Building rendering engines from scratch with custom memory allocators, collision systems, and real-time simulation. Also working on CUDA kernel optimization and distributed systems. Previously built real-time esports infrastructure at EA. Interested in performance optimization and how hardware architecture influences software design.
                </p>
              </div>
            </article>
          </div>
      </div>
    )
}