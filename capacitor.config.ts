import type { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.paliaapkhub.promptmaker",
  appName: "Prompt Maker",
  webDir: "out",
  plugins: { StatusBar: { overlaysWebView: false, backgroundColor: "#fbfdfc", style: "LIGHT" } },
  server: { androidScheme: "https" }
};
export default config;
