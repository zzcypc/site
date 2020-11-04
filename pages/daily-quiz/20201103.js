import Head from "next/head";
import Quiz from "../../components/dailyQuiz";

const wordList = [
  { zh: "获得知识", en: "acquire knowledge" },
  { zh: "吸收信息", en: "absorb information" },
  { zh: "激发兴趣", en: "stimulate interests" },
  { zh: "开发潜能", en: "explore potential" },
  { zh: "锻炼动手能力", en: "hone manual skills" },
  { zh: "练习眼手协调能力", en: "practice eye-hand coordination" },
  { zh: "培养审美观", en: "cultivate the sense of beauty" },
  { zh: "促进团队合作", en: "foster the teamwork spirit" },
  { zh: "促进情感", en: "boost bonds with peers" },
  { zh: "解决问题的能力", en: "problem-solving ability" },
  { zh: "人际沟通技巧", en: "interpersonal communication skills" },
  { zh: "领导力", en: "leadership" },
  { zh: "责任感", en: "sense of obligation" },
  { zh: "扩展视野", en: "broaden horizon" },
  { zh: "丰富人生经历", en: "enrich life experience" },
  { zh: "锻炼能力", en: "extend their limits" },
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
