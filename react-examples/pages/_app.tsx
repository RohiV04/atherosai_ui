import React from 'react';
import '@components/global.scss';

interface IAppProps {
  Component: React.FunctionComponent;
  pageProps: Record<string, unknown>;
}

const App: React.FunctionComponent<IAppProps> = ({
  Component,
  pageProps,
}: IAppProps) => {

  return (
    <div>
        <Component {...pageProps} />
    </div>
  );
};

export default App;
