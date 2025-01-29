import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Story from "./components/story/Story";
import { storyGenerator } from "./functions/ApiCalls";
import Logo from "./assets/logo.jpg";

const App = () => {
  const [generatedStory, setGeneratedStory] = useState("");
  const [loading, setLoading] = useState(false);

  const submitData = async ({
    title,
    genre,
    setting,
    protagonist,
    antagonist,
    conflict,
    dialogue,
    theme,
    tone,
  }) => {
    try {
      setLoading(true);
      const res = await storyGenerator({
        title,
        genre,
        setting,
        protagonist,
        antagonist,
        conflict,
        dialogue,
        theme,
        tone,
      });

      setLoading(false);
      setGeneratedStory(res.data);
    } catch (error) {
      setLoading(false);
      throw Error(error);
    }
  };

  return (
    <div className="h-screen bg-[#0a0d14] relative overflow-hidden">
      <div className="bg-[#334eff] w-[500px] h-[500px] rounded-full absolute left-0 top-0 blue-ball left-ball"></div>
      <div className="bg-[#334eff] w-[300px] h-[300px] rounded-full absolute bottom-0 right-0 blue-ball right-ball"></div>
      <div className="bg-[#334eff]  rounded-full absolute top-0 right-0 blue-ball right-top"></div>

      <div className="absolute w-full h-full backdrop-blur-[150px]"></div>

      {/* main content */}
      <div className="z-[100] relative flex w-full h-screen justify-center items-center  px-[320px] ">
        <div className="w-full h-[800px] bg-white/6 rounded-2xl backdrop-blur-2xl border border-solid border-gray-600/50 shadow-2xl flex py-2.5">
          {/* side bar */}
          <div className="flex-[4] border-r border-solid border-r-gray-600/30 overflow-y-scroll scroll-smooth">
            <SideBar handlerFunc={submitData} />
          </div>

          {/* dashboard */}
          <div className="flex-[7.6]">
            <div className="flex justify-end  pr-5 pt-3 items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img src={Logo} alt="logo" />
              </div>
              <div className="text-white text-[20px]"></div>
            </div>
            <div className="px-15 pt-8">
              <Story genStory={generatedStory} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
