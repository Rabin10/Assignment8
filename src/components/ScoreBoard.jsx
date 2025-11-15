import s from "../styles/Score.module.css";

/** @param {{wins:number, losses:number, ties:number}} props */
export default function ScoreBoard({ wins, losses, ties }) {
  return (
    <div className={s.board} aria-label="Scoreboard">
      <span className={s.badge}>Wins: {wins}</span>
      <span className={s.badge}>Losses: {losses}</span>
      <span className={s.badge}>Ties: {ties}</span>
    </div>
  );
}
