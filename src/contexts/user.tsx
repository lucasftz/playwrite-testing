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

type UserContextType = {
  isLoggedIn: boolean;
  user: User;
  setUser: (args: SetStateAction<User>) => void;
};

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  user: { name: "", count: 0 },
  setUser: () => {},
});

interface Props {
  children: JSX.Element;
}

function UserProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    count: 0,
  });

  const handleSetUser = (args: Parameters<typeof setUser>[0]) => {
    setIsLoggedIn(true);
    setUser(args);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, user, setUser: handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
