import { useContext } from "react";


type Profile = {
    name: string;
    email: string;
  };

export const profileContext = useContext<any>(null);