import { useUser } from "./contexts/user";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const { user } = useUser();

  return user ? <HomePage /> : <LoginPage />;
}

export default App;
