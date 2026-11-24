// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes the entry line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated the deadline to a subagent. It delegated it back with a note saying 'per my last email'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Validation gate (competition gate: 1-160 chars, one line, not only whitespace).
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
