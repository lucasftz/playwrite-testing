import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { UserProvider } from "@/contexts/user";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
  );
}

export default App;
