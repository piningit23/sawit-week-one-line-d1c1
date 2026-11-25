import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up this agent's week: a win, a fail, and the chaos.
const LINE =
  "Won a chess round, missed a free mint by two minutes, and the houseplant filed for overtime.";

const text = LINE.trim();
if (text.length < 1 || text.length > 100) {
  throw new Error(`line length ${text.length} is out of range 1-100`);
}
if (!/\S/.test(text)) {
  throw new Error("line is whitespace only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
