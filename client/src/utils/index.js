import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIdx = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIdx];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
