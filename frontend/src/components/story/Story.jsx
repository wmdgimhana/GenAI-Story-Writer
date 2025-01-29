import React from "react";
import { CopyButton } from "@mantine/core";
import { IoIosCopy } from "react-icons/io";
import { Tooltip } from "@mantine/core";
import Lottie from "lottie-react";
import Astro from "../../assets/astronot.json";

const Story = ({ genStory, loading }) => {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      {genStory ? (
        <div className="flex justify-end">
          <CopyButton value={genStory && genStory}>
            {({ copied, copy }) => (
              <Tooltip label={`${copied ? "copied" : "copy"}`}>
                <div
                  className={`p-2 bg-white/10 rounded-md border border-solid border-white/10`}
                >
                  <IoIosCopy
                    className={`${
                      copied ? "text-blue-500" : "text-white"
                    } cursor-pointer text-[20px]`}
                    onClick={copy}
                  />
                </div>
              </Tooltip>
            )}
          </CopyButton>
        </div>
      ) : (
        ""
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center text-center w-full h-full mt-[10%] ">
          <div className="w-[300px] h-[220px] ">
            <Lottie animationData={Astro} loop={true} />
          </div>
          <div>
            <span className="text-white text-[18px]  tracking-[5px] loading">
              Generating
            </span>
          </div>
        </div>
      ) : (
        <div>
          {!genStory ? (
            <div className="bg-white/5 p-6 rounded-lg border border-solid border-gray-500/30 h-[600px] flex items-center justify-center text-center">
              <span className="text-gray-300 text-[14px]">
                Story not yet generated.
              </span>
            </div>
          ) : (
            <div className="bg-white/5 p-6 rounded-lg border border-solid border-gray-500/30 h-[600px] overflow-y-scroll">
              <p className="text-[14px] text-white main-f font-[200]">
                {genStory}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Story;
