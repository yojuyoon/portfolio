import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type BlogContextProps = {
  title: string;
  createDate: string;
  currentPost: string;
  setState: Dispatch<
    SetStateAction<{ title: string; createDate: string; currentPost: string }>
  >;
};

type BlogProviderProps = {
  children: ReactNode;
};

export const BlogContext = createContext<BlogContextProps>({
  title: "",
  createDate: "",
  currentPost: "",
  setState: () => {},
});

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [state, setState] = useState({
    title: "",
    createDate: "",
    currentPost: "",
  });

  return (
    <BlogContext.Provider value={{ ...state, setState }}>
      {children}
    </BlogContext.Provider>
  );
};
