import styles from "../style/gift.module.scss";
import Head from "next/head";
import { useState } from "react";
import classNames from "classnames";
export default function Wish() {
  const [opened, setOpened] = useState(false);
  const onGiftClick = () => setOpened(true);
  const wishClass = classNames({
    [styles.wish]: true,
    [styles["wish-open"]]: opened,
  });
  const giftClass = classNames({
    [styles.gift]: true,
    animate__headShake: true,
    animate__infinite: true,
    animate__animated: !opened,
  });
  return (
    <div>
      <Head>
        <title>祝雅丽小朋友生日快乐</title>
      </Head>
      <main className={wishClass}>
        <div className={giftClass} onClick={onGiftClick}>
          <div className={styles.gift__top}>
            <div className={styles.bowknot}>
              <div className={styles.bowknot__left}></div>
              <div className={styles.bowknot__right}></div>
            </div>
            <div className={styles.cover}></div>
          </div>
          <div className={styles.box}></div>
        </div>
        <div className={styles.greeting}>
          <h1>HAPPY BIRTHDAY</h1>
          <p>祝姚雅丽小朋友生日快乐～</p>
          <div className={styles.picture}>
            <img className={styles.balloon} src="/balloon1.png" />
            <img className={styles.balloon} src="/balloon2.png" />
            <img className={styles.balloon} src="/balloon3.png" />
            <img className={styles.balloon} src="/balloon4.png" />
            <img className={styles.cake} src="/cake.png" />
          </div>
          <h1>FOREVER YOUNG</h1>
        </div>
      </main>
    </div>
  );
}
