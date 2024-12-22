import { createContext, useState } from "react";
import run from "../GeminiAPI/gemini";

export const GeminiContext = createContext(null);

const GeminiState = ({ children }) => {
  const [userInput, setUserInput] = useState("");
  const [geminiResult, setGeminiResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [recentChats, setRecentChat] = useState([]);

  const openNewChat = () => {
    setLoading(false);
    setGeminiResult("");
    setCurrentPrompt("");
    setUserInput("");
  };

  const delayTyping = (i, nextWord) => {
    setTimeout(() => {
      setGeminiResult((prevResult) => prevResult + nextWord + " ");
    }, i * 20);
  };

  const getGeminiResponse = async (prompt) => {
    setLoading(true);
    setGeminiResult("");

    let response;

    if (prompt) {
      setCurrentPrompt(prompt);
      response = await run(prompt);
      setUserInput("");
    } else {
      const userPrompt = userInput;
      setCurrentPrompt("");
      setUserInput("");
      setCurrentPrompt(userPrompt);
      setRecentChat((prevChats) => [...prevChats, userPrompt]);

      response = await run(userPrompt);
    }

    let result = response.replaceAll("**", " ").split("*").join("</br></br>");
    let resultArray = result.split(" ");

    for (let i = 0; i < resultArray.length; i++) {
      const nextWord = resultArray[i];
      delayTyping(i, nextWord);
    }

    setLoading(false);
  };

  return (
    <GeminiContext.Provider
      value={{
        userInput,
        setUserInput,
        getGeminiResponse,
        geminiResult,
        loading,
        currentPrompt,
        recentChats,
        openNewChat,
      }}
    >
      {children}
    </GeminiContext.Provider>
  );
};

export default GeminiState;
