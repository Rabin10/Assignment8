import { IMAGES } from "../utils/game";
import s from "../styles/Throws.module.css";

/**
 * @param {{current: string|null, spinning: boolean}} props
 */
export default function ComputerThrow({ current, spinning }) {
  const src = current ? IMAGES[current] : IMAGES.question;
  const alt = current ? `computer chose ${current}` : "computer thinking";
  return (
    <div className={s.throwWrap} aria-live="polite">
      <img
        className={s.throwImg}
        src={src}
        alt={alt}
        aria-busy={spinning}
      />
    </div>
  );
}
