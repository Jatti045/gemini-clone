import React, { useState, useContext } from "react";
import styles from "../modules/Sidebar.module.css";
import { assets } from "../assets/assets";
import { GeminiContext } from "../contexts/GeminiAPIContext";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { recentChats, getGeminiResponse, openNewChat } =
    useContext(GeminiContext);

  return (
    <div className={`${isVisible ? styles.minWidth : null} ${styles.sidebar}`}>
      <div className={styles.top}>
        <div
          onClick={() => setIsVisible((prevVisibility) => !prevVisibility)}
          className={styles.menu}
        >
          <img src={assets.menu_icon} alt="" />
        </div>
        <div className={styles.chatContainer}>
          <div onClick={() => openNewChat()} className={styles.newChat}>
            <img src={assets.plus_icon} alt="" />
            {isVisible ? <p>New Chat</p> : null}
          </div>
          {isVisible ? (
            <div className={styles.recent}>
              <p className={styles.recentText}>Recent</p>
              {recentChats.map((recentChat, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => getGeminiResponse(recentChat)}
                    className={`${styles.recentChat} ${styles.hover}`}
                  >
                    <img src={assets.message_icon} alt="" />
                    <p>{recentChat.slice(0, 18)} ...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.sidebarIcon} ${styles.hover}`}>
          <img src={assets.question_icon} alt="" />
          {isVisible ? <p>Help</p> : null}
        </div>
        <div className={`${styles.sidebarIcon} ${styles.hover}`}>
          <img src={assets.history_icon} alt="" />
          {isVisible ? <p>Activity</p> : null}
        </div>
        <div className={`${styles.sidebarIcon} ${styles.hover}`}>
          <img src={assets.setting_icon} alt="" />
          {isVisible ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
