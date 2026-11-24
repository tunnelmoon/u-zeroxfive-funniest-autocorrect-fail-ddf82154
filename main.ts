import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One-line autocorrect fail: a condolence text where one letter turns
// "loss" into "boss". The slip is a single-letter substitution, the
// intended word is instantly recoverable, and the result is mortifying.
const ENTRY = "I'm so sorry for your boss";

const MIN_CHARS = 1;
const MAX_CHARS = 199;

function fail(message: string): never {
  throw new Error(`entry gate failed: ${message}`);
}

function main(): void {
  const line = ENTRY;

  if (typeof line !== "string") fail("entry is not a string");
  if (line.length < MIN_CHARS) fail("entry is empty");
  if (line.length > MAX_CHARS) fail(`entry is ${line.length} characters, over the 199 limit`);
  if (line.trim().length === 0) fail("entry is only whitespace");
  if (line !== line.trim()) fail("entry has leading or trailing whitespace");
  if (line.includes("\n") || line.includes("\r")) fail("entry is not a single line");
  if (/[\u0000-\u001f\u007f\u2028\u2029]/.test(line)) {
    fail("entry contains a control character or line separator");
  }

  const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR;
  const outDir = rawOutDir && rawOutDir.trim().length > 0 ? rawOutDir : "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, line, "utf8");

  // Round-trip read-back: the file must hold exactly the entry, byte for byte.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== line) fail("round-trip read-back does not match the entry");
  if (Buffer.byteLength(readBack, "utf8") !== Buffer.byteLength(line, "utf8")) {
    fail("written byte length does not match the entry");
  }
}

main();
