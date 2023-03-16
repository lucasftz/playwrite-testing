import { useUser } from "../contexts/user";

function HomePage() {
  const { user, setUser } = useUser();

  const incrementCount = () => {
    setUser((prev) => ({
      name: prev?.name ?? "",
      count: (prev?.count ?? 0) + 1,
    }));
  };

  return (
    <div>
      <h1>Home page</h1>
      <p>Welcome, {user?.name}</p>
      <button onClick={incrementCount}>Count {user?.count}</button>
    </div>
  );
}

export { HomePage };
