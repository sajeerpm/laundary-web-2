import { createContext, useContext, useState } from "react";

interface StateContextProps {
    currentUser: any;
    token: string | null;
    setToken: (token: string | null) => void;
    setUser: (user: any) => void;
}

type Props = {
    children: React.ReactNode;
};

const StateContext = createContext<StateContextProps>({
    currentUser: null,
    token: null,
    setToken: () => {},
    setUser: () => {},
});

export const ContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<any>({});
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("ACCESS_TOKEN")
    );

    const updateToken = (newToken: string | null) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem("ACCESS_TOKEN", newToken);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                currentUser: user,
                token,
                setToken: updateToken,
                setUser,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
