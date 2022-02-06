import CounterProvider from '/context/CounterContext';
import TodosProvider from '/context/TodosContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </TodosProvider>
  );
}

export default MyApp;
