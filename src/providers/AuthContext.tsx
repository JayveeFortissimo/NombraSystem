import { authContext } from "./CreateContext.ts";
import { useState } from "react";
interface props {
  children: React.ReactNode;
}

const AuthContext: React.FC<props> = ({ children }) => {
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    address: "",
    password: "",
    confirmation: "",
  });

  const HandleChange = (type: string, value: string) => {
    setRegister((pro) => {
      return {
        ...pro,
        [type]: value,
      };
    });
  };

  const PassedItem = {
    register,
    HandleChange,
  };

  return (
    <authContext.Provider value={PassedItem}>{children}</authContext.Provider>
  );
};

export default AuthContext;
