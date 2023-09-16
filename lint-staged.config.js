const path = require("path");

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx)": (filenames) => [
    //` next lint --fix --file ${filenames.join(" ")}`,
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`,
    `pnpm prettier --write ${filenames.join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `pnpm prettier --write ${filenames.join(" ")}`,
};
