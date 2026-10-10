import type { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.paliaapkhub.promptmaker",
  appName: "Prompt Maker",
  webDir: "out",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2200,
      launchAutoHide: true,
      backgroundColor: "#fbfdfc",
      androidScaleType: "CENTER_CROP",
      showSpinner: false
    },
    StatusBar: { overlaysWebView: false, backgroundColor: "#fbfdfc", style: "LIGHT" }
  },
  server: { androidScheme: "https" }
};
export default config;
