import "../styles/globals.css";
import CounterProvider from "/context/CounterContext";
function MyApp({ Component, pageProps }) {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  );
}

export default MyApp;
