import React, { useContext } from "react";
import styles from "../modules/Main.module.css";
import { assets } from "../assets/assets";
import { GeminiContext } from "../contexts/GeminiAPIContext";
import useWindowResize from "../custom-hook/UseWindowResize";

const Main = () => {
  const {
    userInput,
    setUserInput,
    getGeminiResponse,
    geminiResult,
    loading,
    currentPrompt,
  } = useContext(GeminiContext);

  const { windowSize } = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div style={{ height: height }} className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <p>Gemini</p>
        </div>
        <div className={styles.userIcon}>
          <img src={assets.gemini_icon} alt="" />
        </div>
      </div>
      {loading ? (
        <div>
          <div className={styles.displayUserInputContainer}>
            <p className={styles.displayUserInput}>{currentPrompt}</p>
          </div>
          <div className={styles.geminiResult}>
            <img
              className={loading ? styles.loadingAnimation : null}
              src={assets.gemini_logo}
              alt=""
            />
            <div className={styles.loadingContainer}>
              <hr />
              <hr />
              <hr />
            </div>
          </div>
        </div>
      ) : geminiResult ? (
        <div>
          <div className={styles.displayUserInputContainer}>
            <p>{currentPrompt}</p>
          </div>
          <div className={styles.geminiResult}>
            <img
              className={loading ? styles.loadingAnimation : null}
              src={assets.gemini_logo}
              alt=""
            />
            <p dangerouslySetInnerHTML={{ __html: geminiResult }}></p>
          </div>
        </div>
      ) : (
        <div className={styles.username}>
          <div>
            <span>Hello, Dev</span>
          </div>
        </div>
      )}

      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <img className={styles.icon} src={assets.gallery_icon} alt="" />
          <input
            type="text"
            placeholder="Ask Gemini"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            onKeyDown={(event) => {
              if (userInput && event.key === "Enter") getGeminiResponse();
            }}
          />
        </div>
        <div className={styles.searchSend}>
          <img className={styles.icon} src={assets.mic_icon} alt="" />
          {userInput ? (
            <img
              onClick={() => getGeminiResponse()}
              className={styles.icon}
              src={assets.send_icon}
              alt=""
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Main;
