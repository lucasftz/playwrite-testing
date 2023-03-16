import { useUser } from "./contexts/user";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? <HomePage /> : <LoginPage />;
}

export default App;
