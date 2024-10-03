"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

interface IProviders {
  children: React.ReactNode;
}

const ReactQueryClientProvider: FC<IProviders> = ({ children }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
