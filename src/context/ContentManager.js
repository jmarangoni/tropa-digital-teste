import React, { createContext, useState, useContext } from "react";

const ContentManagerContext = createContext();

export function ContentManagerProvider({ children }) {
    const [page, setPage] = useState('start');
    
    return (
        <ContentManagerContext.Provider
            value={{
                page,
                setPage
            }}
        >
            {children}
        </ContentManagerContext.Provider>
    )
}

export function useContentManager() {
    const context = useContext(ContentManagerContext);

    const { page, setPage } = context;
    return { page, setPage };
}