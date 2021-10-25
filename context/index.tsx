import { createContext, useState } from "react";
import { AppProps } from "../types";

interface AppContextInterface {
  loading: boolean;
  data: any;
  fetchAddress: (data: any) => void;
}

export const AppContext = createContext<AppContextInterface>({
  loading: false,
  data: {},
  fetchAddress: (data: any) => {},
});

const AppProvider = ({ children }: AppProps) => {
  const [data, setData] = useState({});

  const fetchAddressHandler = (data: any) => {
    setData(data);
  };
  const values = {
    loading: false,
    data,
    fetchAddress: fetchAddressHandler,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
