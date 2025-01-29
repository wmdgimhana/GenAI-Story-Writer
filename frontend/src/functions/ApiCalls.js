import axios from "axios";

const API_URL = import.meta.env.VITE_API_KEY;

export const storyGenerator = async ({
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
    const res = await axios.post(`${API_URL}`, {
      title: title,
      genre: genre,
      setting: setting,
      protagonist: protagonist,
      antagonist: antagonist,
      conflict: conflict,
      dialogue: dialogue,
      theme: theme,
      tone: tone,
    });

    return res;
  } catch (error) {
    throw Error(error);
  }
};
