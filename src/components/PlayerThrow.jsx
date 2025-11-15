import { THROWS, IMAGES } from "../utils/game";
import s from "../styles/Throws.module.css";

/**
 * @param {{selected: string|null, onSelect: (t:string)=>void, disabled?: boolean}} props
 */
export default function PlayerThrow({ selected, onSelect, disabled }) {
  return (
    <div>
      <div className={s.choices} role="group" aria-label="Choose your throw">
        {THROWS.map((t) => (
          <button
            key={t}
            type="button"
            className={s.choiceBtn}
            aria-label={t}
            aria-pressed={selected === t}
            onClick={() => onSelect(t)}
            disabled={disabled}
          >
            <img className={s.img} src={IMAGES[t]} alt={t} />
          </button>
        ))}
      </div>
    </div>
  );
}
