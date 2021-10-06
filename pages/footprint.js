import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicMapComponentWithNoSSR = dynamic(
  () => import("../components/footprint/map"),
  { ssr: false }
);
// import Map from "../components/footprint/map";
import styles from "../style/footprint.module.scss";

export default function Footprint() {
  return (
    <div className={styles.wrap}>
      <Head>
        <title>草呓平川的足迹</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Footprint</h1>
      <div className={styles.map}>
        <DynamicMapComponentWithNoSSR />
      </div>
    </div>
  );
}
