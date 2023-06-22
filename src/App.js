import { useState } from "react";
import "./App.css";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

function App() {
  const [darkMode, setdarkMode] = useState(false);

  const handleChackChange = (e) => {
    setdarkMode(e.target.checked);
  };

  return (
    <div className={darkMode && "dark"}>
      <div className="text-slate-400 pb-8 dark:bg-darkbg-dark dark:text-slate-300">
        {/* header */}
        <div className="bg-bg dark:bg-darkbg pb-40 pt-3">
          <div className="container w-full text-lg md:py-9  md:flex  md:justify-between lg:px-10  md:font-bold  md:items-center">
            <div >
              <h1 className="text-slate-800 pt-3  dark:text-white  font-bold md:text-3xl ">
                Social Media Dashboard
              </h1>
              <span className="text-sm"> Total Follwers: 32,200</span>
            </div>
            <div>
              <label className="text-sm mr-2" htmlFor="checkbox">
                Dark mode
              </label>
              <span>
                <input
                  id="checkbox"
                  type="checkbox"
                  onChange={handleChackChange}
                ></input>
              </span>
            </div>
          </div>
        </div>
        <div className="container -mt-40 lg:px-10 lg:-mt-40">
          {/*main cards*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap- mt-6 ">
            {/* card */}
            <div className="card before:bg-sky-500 ">
              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-twitter">
                  <AiFillTwitterCircle size={22} />
                </span>
                <span>@asas</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl">1203</h2>
              <p className="font-medium uppercase tracking-[0.4em]">Follwers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-instgram">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>

            {/* card */}
            <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500">
              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-fuchsia-400">
                  <AiFillInstagram size={22} />
                </span>
                <span>@asas</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl">1203</h2>
              <p className="font-medium uppercase tracking-[0.4em]">Follwers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-red-500">
                <span>
                  <RiArrowDownSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card */}
            <div className="card before:bg-sky-500">
              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-instgram">
                  <AiFillTwitterCircle size={22} />
                </span>
                <span>@asas</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl">1203</h2>
              <p className="font-medium uppercase tracking-[0.4em]">Follwers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-instgram">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>

            {/* card */}
            <div className="card before:bg-orange-400">
              <div className="flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-twitter">
                  <AiFillTwitterCircle size={22} />
                </span>
                <span>@asas</span>
              </div>
              <h2 className="text-slate-800 dark:text-white text-6xl">1203</h2>
              <p className="font-medium uppercase tracking-[0.4em]">Follwers</p>
              <div className="flex items-center justify-center gap-1 pt-6 text-instgram">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
          </div>
          {/* smail cards*/}
          <div className="mt-12 ">
            <h2 className="text-2xl font-bold"> Overview - Today</h2>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 pb-2">
              {Array(8)
                .fill(" ")
                .map((el) => (
                  <div className="card-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold"> Pages View</h4>
                      <AiFillTwitterCircle className="text-twitter" size={22} />
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <h3 className="font-black text-2xl text-slate-800 dark:text-white">
                        {" "}
                        101
                      </h3>
                      <div className="flex items-center gap-1 text-instgram text-sm">
                        <span>
                          <RiArrowUpSFill />
                        </span>
                        <span> 300%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
