import { useState } from "react";
import { UserContext } from "./UserContext";

interface User {    
  id: number;
  name: string;
  email: string;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
