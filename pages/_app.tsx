import type { AppProps } from "next/app";
import { client } from "@/pages/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
