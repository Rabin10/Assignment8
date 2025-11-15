import r from "../styles/Result.module.css";

/** @param {{result: ""|"win"|"lose"|"tie"}} props */
export default function ResultDisplay({ result }) {
  if (!result) return <p className={`${r.result} ${r.subtle}`}>Make a selection to play.</p>;
  const cls = result === "win" ? r.win : result === "lose" ? r.lose : r.tie;
  const text = result === "win" ? "You win!" : result === "lose" ? "You lose!" : "It's a tie.";
  return <p className={`${r.result} ${cls}`}>{text}</p>;
}
