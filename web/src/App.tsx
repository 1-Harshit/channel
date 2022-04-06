import { useEffect, useState } from 'react';
import './App.css';
import { CssBaseline, GeistProvider, useTheme } from '@geist-ui/core';
import AuthScreen from './components/Auth';
import GeneralScreen from './components/main';


function App() {
  const theme = useTheme();
  const [themeType, setThemeType] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme !== 'dark') return
    setThemeType('dark')
  }, [])

  const useDomClean = (): void => {
    useEffect(() => {
      document.documentElement.removeAttribute('style')
      document.body.removeAttribute('style')
    }, [])
  }
  useDomClean()
  return (
    <>
      <GeistProvider themeType={themeType} themes={[theme]}>
        <CssBaseline />
        {isAuthenticated ? (
          <GeneralScreen />
        ) : (
          <AuthScreen />
        )
        }
      </GeistProvider>
    </>
  );
}

export default App;
