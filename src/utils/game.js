export const THROWS = /** @type {const} */ (["rock", "paper", "scissors"]);
export const IMAGES = {
  rock: "/public/Img/rock.png",
  paper: "/public/Img/paper.png",
  scissors: "/public/Img/scissors.png",
  question: "/public/Img/question.png",
};

// whoBeatsWho[a] includes the option(s) a defeats
const whoBeatsWho = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"],
};

/** return "win" | "lose" | "tie" */
export function judge(player, computer) {
  if (!player || !computer) return "";
  if (player === computer) return "tie";
  return whoBeatsWho[player].includes(computer) ? "win" : "lose";
}

export function randomThrow() {
  const i = Math.floor(Math.random() * THROWS.length);
  return THROWS[i];
}
