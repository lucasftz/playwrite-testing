import { useUser } from "../contexts/user";
import { formHandler } from "../utils/forms";

function LoginPage() {
  const { setUser } = useUser();

  const handleSubmit = formHandler<{ username: string }>((formData) => {
    if (formData.username.length > 3) {
      setUser({ name: formData.username, count: 0 });
    }
  });

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { LoginPage };
