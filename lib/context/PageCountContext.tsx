import React, { createContext, Dispatch, useContext, useState } from 'react';

export type PageCountDispatch = Dispatch<any>;

interface Props {
  children: JSX.Element;
}

const PageCountStateContext = createContext<number | undefined>(
  undefined
);

const PageCountDispatchContext = createContext<
  PageCountDispatch | undefined
>(undefined);

const PageCountContextProvider = ({ children }: Props) => {
  const [pageCount, setPageCount] = useState(1);
  return (
    <PageCountDispatchContext.Provider value={setPageCount}>
      <PageCountStateContext.Provider value={pageCount}>
        {children}
      </PageCountStateContext.Provider>
    </PageCountDispatchContext.Provider>
  );
};

export const usePageCountState = () => {
  const state = useContext(PageCountStateContext);
  return state;
};

export const usePageCountDispatch = () => {
  const dispatch = useContext(PageCountDispatchContext);
  return dispatch;
};

export default PageCountContextProvider;
