const config = {
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://localhost:3000', // Adjust to your application's base URL
  },
  testDir: './tests',
};
export default config