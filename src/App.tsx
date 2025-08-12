import TargetCursor from "./components/reactbits/TargetCursor/TargetCursor";
import MainPage from "./Page/MainPage";
import { ThemeProvider } from "./Theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TargetCursor spinDuration={5} hideDefaultCursor={true} />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
