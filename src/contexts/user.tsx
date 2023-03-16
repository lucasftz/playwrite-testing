import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface User {
  name: string;
  count: number;
}

const UserContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}>({
  user: null,
  setUser: () => {},
});

interface Props {
  children: JSX.Element;
}

function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
