import Head from "next/head";
import Quiz from "../../components/dailyQuiz";

const wordList = [
  { zh: "龙虾🦞", en: "lobster" },
  { zh: "章鱼🐙", en: "octopus" },
];
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>cypc.site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Daily quiz</h1>
      <Quiz wordList={wordList} />
      <footer></footer>
    </div>
  );
}
