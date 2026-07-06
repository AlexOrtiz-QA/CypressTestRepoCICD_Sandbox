const { execSync } = require("child_process");
const fs = require("fs");

// Create timestamp
const now = new Date();

const timestamp =
`${now.getFullYear()}-${
String(now.getMonth() + 1).padStart(2, "0")}-${
String(now.getDate()).padStart(2, "0")}_${
String(now.getHours()).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}`;

// If running on GitHub Actions this will be something like "15"
// Otherwise it becomes "LOCAL"
const runNumber = process.env.GITHUB_RUN_NUMBER || "LOCAL";

const reportFileName = `PlayGround_Report_${timestamp}_Run-${runNumber}`;

const reportsFolder = "reports/latest";

// Create reports/latest if it doesn't exist
if (!fs.existsSync(reportsFolder)) {
    fs.mkdirSync(reportsFolder, { recursive: true });
}

console.log("====================================");
console.log("Merging Mochawesome JSON reports...");
console.log("====================================");

execSync(
    'npx mochawesome-merge "reports/*.json" > merged-report.json',
    { stdio: "inherit", shell: true }
);

console.log("====================================");
console.log("Generating HTML report...");
console.log("====================================");

execSync(
    `npx marge merged-report.json --reportDir "${reportsFolder}" --reportFilename "${reportFileName}"`,
    { stdio: "inherit", shell: true }
);

console.log("====================================");
console.log("Cleaning temporary files...");
console.log("====================================");

// Delete merged report
if (fs.existsSync("merged-report.json")) {
    fs.unlinkSync("merged-report.json");
}

console.log("====================================");
console.log("Report generated successfully!");
console.log(`Location: ${reportsFolder}/${reportFileName}.html`);
console.log("====================================");