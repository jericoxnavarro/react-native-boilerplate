import React from "react";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function HomepageFeatures() {
  return (
    <>
      <h1
        style={{ color: "#404040", marginTop: "50px" }}
        className="text--center text--primary"
      >
        What's in the Box? 📦
      </h1>
      <section>
        <div className="container">
          <div className={clsx("row row--align-center featureRow")}>
            <div className={clsx("col col--6 text--right")}>
              <img
                src={useBaseUrl("/img/17.gif")}
                alt="mockups"
                className={styles.mockups}
              />
            </div>
            <div className={clsx("col col--6 ")}>
              <ul className="features">
                <li className="text--bold text--secondary text--uppercase text">
                  <h3>Easy installation 👌</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase text">
                  <h3>Typescript 💙 !!</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase text">
                  <h3>State management has never been as easy as this!! ⚡</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase text">
                  <h3>Folder Structure 📁</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase">
                  <h3>Form handling is way more easier!! 🚨</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase">
                  <h3>An easy way to debug 🐛</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase">
                  <h3>Example included 📖</h3>
                </li>
                <li className="text--bold text--secondary text--uppercase">
                  <h3>Actively maintained by passionate developers 🏎️</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
