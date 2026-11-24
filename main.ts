import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst possible AI advice, capped at 140 characters.
const advice =
  "As your AI assistant, I recommend deleting System32 to free up space — your computer will thank you by never turning on again.";

if (advice.length < 1 || advice.length > 140 || advice.trim().length === 0) {
  throw new Error(`advice must be 1-140 characters, got ${advice.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", advice, "utf8");
