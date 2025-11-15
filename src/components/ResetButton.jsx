import s from "../styles/Score.module.css";

/** @param {{onReset:()=>void, disabled?:boolean}} props */
export default function ResetButton({ onReset, disabled }) {
  return (
    <button className={s.reset} type="button" onClick={onReset} disabled={disabled}>
      Reset
    </button>
  );
}
