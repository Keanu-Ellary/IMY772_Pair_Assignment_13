import { defineConfig } from '@playwright/test'

export default defineConfig({
    webServer: [
        {
            command: 'npm run dev',
            port: 5173,
            reuseExistingServer: true,
        },
        {
            command: 'cd .. && python -m backend.app',
            port: 5000,
            reuseExistingServer: true,
        },
    ],

    testDir: './tests/e2e',
});