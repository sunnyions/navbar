import { useCallback, useRef } from 'react'
import Dice from 'react-dice-roll'

import viteLogo from '/vite.svg'

import Dice1Img from './assets/imgs/1.png'
import Dice2Img from './assets/imgs/2.png'
import Dice3Img from './assets/imgs/3.png'
import Dice4Img from './assets/imgs/4.png'
import Dice5Img from './assets/imgs/5.png'
import Dice6Img from './assets/imgs/6.png'

type TDiceRef = {
  rollDice: (value: number) => void;
};

function App() {

  const diceRef = useRef<TDiceRef>(null);

  const onClickRoll = useCallback( () => {
    const randomNumber = (Math.ceil(Math.random() * 6) );
    diceRef.current?.rollDice(randomNumber);
  },[])

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center p-10 text-white  text-2xl">
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
            <button className="bg-[#ea580c] rounded-full py-3 px-7 hover:brightness-110 active:brightness-90  hover:cursor-pointer">
              Get Started
            </button>
        </div>

        <div className='mt-32 flex flex-col items-center justify-between gap-10'>
           <Dice triggers={['']} ref={diceRef} onRoll={(value) => console.log(value)}  faces={[Dice1Img, Dice2Img, Dice3Img, Dice4Img, Dice5Img, Dice6Img]} faceBg={'#ffffff'}  />

            <div className='flex'>
            <button className='mt-20 flex items-center justify-center p-2 text-2xl bg-[#65a30d] active:opacity-70 rounded-3xl px-5 py-2' onClick={onClickRoll}>Play</button>

            </div>
        </div>
        </div>
    </>
  )
}

export default App

