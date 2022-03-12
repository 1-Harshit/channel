import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, CssBaseline, GeistProvider, Grid, useTheme, Text, Spacer, Link } from '@geist-ui/core';

function App() {
  const theme = useTheme()
  const [themeType, setThemeType] = useState<string>()
  const [activeChannel, setActiveChannel] = useState("general")

  const channels = ["general", "active", "bhuvan", "harshit", "pannel", "page", "crumbs", "expenses", "random", "micl"];

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
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={6} height="100%" alignContent="flex-end">
            <Card width="100%" height="700px" paddingLeft="25%" style={{borderWidth:0}}>
              <Text style={{ color: "#888", letterSpacing: "1.3px", fontSize: "0.8125rem" }}>CHANNEL</Text>
              <Spacer h={0.5} />
              {channels.map((channel) => {
                return (
                  <>
                    <Link
                      href={"/" + channel}
                      onSubmit={() => setActiveChannel(channel)} // don't know if it works
                      color={activeChannel === channel}
                    >
                      {channel}
                    </Link>
                    <Spacer h={0.2} />
                  </>
                );
              })}
            </Card>
          </Grid>
          <Grid xs height="100%"><Card shadow width="100%" height="50px" /></Grid>
        </Grid.Container>

      </GeistProvider>
    </>
  );
}

export default App;
