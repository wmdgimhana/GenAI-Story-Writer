import React, { useState } from "react";
import { TagsInput } from "@mantine/core";
import { TextInput } from "@mantine/core";

const SideBar = ({ handlerFunc }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [setting, setSetting] = useState([]);
  const [protagonist, setProtagonist] = useState([]);
  const [antagonist, setAntagonist] = useState([]);
  const [conflict, setConflict] = useState("");
  const [dialogue, setDialogue] = useState([]);
  const [theme, setTheme] = useState([]);
  const [tone, setTone] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const send = await handlerFunc({
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

    console.log(send);
  };

  return (
    <div className="p-6 main-f font-[300] text-white tracking-[3px]">
      <div></div>

      <div>
        <form
          className="flex flex-col gap-6"
          onSubmit={submitHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          {/* title */}
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="title">Story Title</label>
            </div>
            <TextInput
              id="title"
              placeholder="Eg:- The Brave Baker"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          {/* Genre */}
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="genre">Genre </label>
            </div>
            <TextInput
              id="genre"
              placeholder="Eg:- Inspirational"
              description="(Type of Story)"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          {/* setting */}
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="setting">Setting</label>
            </div>
            <TagsInput
              id="setting"
              placeholder="Eg:- A quiet village surrounded by green hills."
              description="(Where the story takes place)"
              onChange={setSetting}
              value={setting}
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          {/* protagonist */}
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="protagonist">Protagonist </label>
            </div>
            <TagsInput
              id="protagonist"
              placeholder="Eg:- Lila, a 25-year-old baker with a heart of gold."
              description="(Main Character)"
              onChange={setProtagonist}
              value={protagonist}
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          {/* antagonist */}
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="antagonist">Antagonist </label>
            </div>
            <TagsInput
              id="antagonist"
              placeholder="Eg:- A greedy landlord who wants to destroy the bakery."
              onChange={setAntagonist}
              value={antagonist}
              description="(The Villain)"
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          {/* conflict */}

          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="conflict">Conflict </label>
            </div>
            <TextInput
              id="conflict"
              placeholder="Eg:- Lila must save her bakery from demolition and unite the village."
              onChange={(e) => setConflict(e.target.value)}
              value={conflict}
              description="(The Problem to Solve)"
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="dialogue">Key Dialogues</label>
            </div>
            <TagsInput
              id="dialogue"
              placeholder="Eg:- 'You can’t take this bakery away!' Lila shouted defiantly."
              onChange={setDialogue}
              value={dialogue}
              description="(Important conversations or quotes)"
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="theme">Theme</label>
            </div>
            <TextInput
              id="theme"
              placeholder="Eg:- Fighting for what’s right and the strength of community."
              onChange={(e) => setTheme(e.target.value)}
              value={theme}
              description="(The message or lesson of the story)"
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="tone">Tone</label>
            </div>
            <TextInput
              id="tone"
              placeholder="Eg:- Uplifting and full of hope."
              onChange={(e) => setTone(e.target.value)}
              value={tone}
              description="(Mood of the Story)"
              styles={{
                input: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderColor: "white",
                  borderRadius: "6px",
                  maxWidth: "400px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
              }}
            />
          </div>

          {/* submit button */}
          <div className="w-full">
            <button
              type="submit"
              className="bg-white font-semibold  text-black py-2 px-10 rounded-md w-full hover:bg-white/90 cursor-pointer transition-colors duration-150"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
