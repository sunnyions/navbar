import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className="flex w-full items-center justify-center p-10 text-white  text-2xl">
        <div className="flex rounded-full items-center justify-between p-3 bg-black gap-12">
            <div className="flex items-center justify-start gap-2  hover:cursor-pointer">
              <div className="p-3 bg-[#ea580c] rounded-full">
              <img src={viteLogo} alt='logo' />
              </div>
              Asgard.
            </div>
            <div className="flex items-center justify-center gap-10 ">
              <div className="flex opacity-75 hover:opacity-100 hover:cursor-pointer">
                Home
              </div>
              <div className="flex opacity-75 hover:opacity-100 hover:cursor-pointer">
                Services
              </div>
              <div className="flex opacity-75 hover:opacity-100 hover:cursor-pointer">
                Portfolio
              </div>
              <div className="flex opacity-75 hover:opacity-100 hover:cursor-pointer">
                Pricing
              </div>
              <div className="flex opacity-75 hover:opacity-100 hover:cursor-pointer">
                Faqs
              </div>
            </div>
            <button className="bg-[#ea580c] rounded-full py-3 px-7  hover:cursor-pointer">
              Get Started
            </button>
        </div>
        </div>
    </>
  )
}

export default App

