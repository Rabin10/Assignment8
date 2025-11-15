import { useEffect, useMemo, useRef, useState } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import { judge, randomThrow } from "./utils/game";
import a from "./styles/App.module.css";

export default function App() {
  const [player, setPlayer] = useState(null);        // "rock" | "paper" | "scissors" | null
  const [computer, setComputer] = useState(null);    // same as above
  const [spinning, setSpinning] = useState(false);   // computer animation
  const [result, setResult] = useState("");          // "win" | "lose" | "tie" | ""
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });


  const animationRef = useRef({ interval: null, timeout: null });

  function startRound(choice) {
    // initial state for a new round
    setPlayer(choice);
    setComputer(null);
    setResult("");
    setSpinning(true);

    // spin through choices every 500ms for 3 seconds
    animationRef.current.interval = setInterval(() => {
      setComputer(randomThrow());
    }, 500);

    animationRef.current.timeout = setTimeout(() => {
      clearInterval(animationRef.current.interval);
      const finalThrow = randomThrow();
      setComputer(finalThrow);
      setSpinning(false);
      const r = judge(choice, finalThrow);
      setResult(r);
    }, 3000);
  }

  // cleanup if component unmounts mid-animation
  useEffect(() => {
    return () => {
      clearInterval(animationRef.current.interval);
      clearTimeout(animationRef.current.timeout);
    };
  }, []);

  // update scoreboard after each decided round
  useEffect(() => {
    if (!result) return;
    setScore((prev) =>
      result === "win" ? { ...prev, wins: prev.wins + 1 } :
      result === "lose" ? { ...prev, losses: prev.losses + 1 } :
      { ...prev, ties: prev.ties + 1 }
    );
  }, [result]);

  const canInteract = useMemo(() => !spinning, [spinning]);

  function resetAll() {
    setPlayer(null);
    setComputer(null);
    setResult("");
    setSpinning(false);
    setScore({ wins: 0, losses: 0, ties: 0 });
  }

  return (
    <main className={a.container}>
      <h1>Rock • Paper • Scissors</h1>

      <section className={`${a.section} ${a.grid}`} aria-label="Game panels">
        <div>
          <h2 className={a.heading}>Player Throw</h2>
          <PlayerThrow
            selected={player}
            onSelect={(t) => canInteract && startRound(t)}
            disabled={!canInteract}
          />
        </div>

        <div>
          <h2 className={a.heading}>Computer Throw</h2>
          <ComputerThrow current={computer} spinning={spinning} />
        </div>
      </section>

      <section className={a.section}>
        <h2 className={a.heading}>Outcome</h2>
        <ResultDisplay result={result} />
        <div className={a.footerRow}>
          <ScoreBoard wins={score.wins} losses={score.losses} ties={score.ties} />
          <ResetButton onReset={resetAll} disabled={spinning} />
        </div>
      </section>
    </main>
  );
}
