import { useState } from "preact/hooks";

const FloatingButton = ({ label = "Horarios", icon = "🗓️", schedules }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (<>
    <div
        style={{ width: '70%'}}
        className={`dark:bg-neutral-700 fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl rounded-lg overflow-hidden z-[10000000] flex flex-col transition-all duration-500 ${
            clicked ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="flex flex-col h-full p-6">
                <button type="button" onClick={() => setClicked(false)} className="border-0 bg-transparent w-fit cursor-pointer">
                    <span id="left" class="text-white"> 🅧 </span>
                </button>
                <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-300 md:text-4xl lg:text-5xl">Horarios</h1>
                { schedules.map(s => (
                    <p class="py-3 dark:text-neutral-300 border-b border-neutral-300">{ s.day } - { s.schedule }</p>
                )) }
            </div>
    </div>
    <button
      onClick={handleClick}
      className="md:invisible fixed bottom-4 left-4 flex items-center gap-2 bg-blue-600 text-black px-4 py-2 rounded-full shadow-lg bg-white"
    >
      <span>
        {icon}
      </span>
      {label}
    </button>
    </>);
};

export default FloatingButton;