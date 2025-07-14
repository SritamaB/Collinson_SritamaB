const config = {
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://www.activty-rank.com', // Adjust to your application's base URL
    screenshot: "on",
        video: "on",
        trace: "retain-on-failure" 
  },
  testMatch: ["Test/**/*.spec.ts"],
  reporter: [["dot"], ["json", { outputFile: "jsonReports/test-results.json" }], 
  ["html", { 
      outputFolder: "htmlReports",
      open: "true",
  }]]
};
export default config