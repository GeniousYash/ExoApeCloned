


const Footer = () => {
  return (
    <div className="w-full relative bg-[#070707] overflow-hidden">
        <div className="w-[80%] sm:w-[70%] absolute top-10 sm:-top-5 -right-10 z-0">
            <video className="w-full h-full scale-[1.2] z-0" autoPlay muted loop src="https://www.exoape.com/video/video-6.mp4"></video>
        </div>
        <div className="w-full relative px-10 py-20 text-[#e0ccbb] z-10">
            <div className="w-full"><h1 className="text-[3rem] sm:text-[5rem] font-semibold leading-none">Our</h1></div>
            <div className="w-full"><h1 className="text-[3rem] sm:text-[5rem] font-semibold leading-none">Story</h1></div>
            <div className="w-full sm:w-[40%] mt-8"><p>The story behind Exo Ape is one of exploration, creativity and curiosity.</p></div>
            <div className="w-full mt-6 flex items-center sm:hidden">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 circle-outline border-[1px] border-[#e0ccbb] rounded-full"><circle cx="25" cy="25" r="23"></circle></svg>
                <h3 className="border-b-[1px] border-[#e0ccbb] text-md font-semibold ml-2">Our Story</h3>
            </div>
            <div className="w-full border-b-[1px] border-white mt-8 mb-8"></div>
            <div className="w-full flex flex-row gap-6">
                <div className="w-[100%]">
                        <li className="list-none text-gray-400 cursor-pointer">Work</li>
                        <li className="list-none text-gray-400 cursor-pointer">Studio</li>
                        <li className="list-none text-gray-400 cursor-pointer">News</li>
                        <li className="list-none text-gray-400 cursor-pointer">Contact</li>
                </div>
                <div className="w-[100%]">
                        <li className="list-none text-gray-400 cursor-pointer">Behance</li>
                        <li className="list-none text-gray-400 cursor-pointer">Dribble</li>
                        <li className="list-none text-gray-400 cursor-pointer">Twitter</li>
                        <li className="list-none text-gray-400 cursor-pointer">Instagram</li>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
