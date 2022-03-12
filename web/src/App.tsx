import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, CssBaseline, GeistProvider, Grid, useTheme, Text, Spacer, Link, User, Description } from '@geist-ui/core';

function App() {
  const theme = useTheme()
  const [themeType, setThemeType] = useState<string>()
  const [activeChannel, setActiveChannel] = useState("general")

  const channels = ["general", "active", "bhuvan", "harshit", "pannel", "page", "crumbs", "expenses", "random", "micl"];
  const messages = [
    { timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },
    { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Heyyyy!" },
    { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Sup?" },
    { timeStamp: "Oct 01, 7:18 AM", name: "Harshit Raj", message: "ntng" },
    { timeStamp: "Oct 01, 7:19 AM", name: "Harshit Raj", message: "Byeee" },
  ];
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
          <Grid xs={4} />
          <Grid xs={3} height="100%" alignContent="flex-end">
            <Card width="100%" height="700px" paddingLeft="25%" style={{ borderWidth: 0 }}>
              <Text style={{ color: "#888", letterSpacing: "1.3px", fontSize: "0.8125rem" }}>CHANNEL</Text>
              <Spacer h={0.5} />
              {channels.map((channel,) => {
                return (
                  <>
                    <Link
                      href={"/#" + channel}
                      onSubmit={() => setActiveChannel(channel)} // don't know if it works
                      color={activeChannel === channel}
                    >
                      # {channel}
                    </Link>
                    <Spacer h={0.2} />
                  </>
                );
              })}
            </Card>
          </Grid>
          <Grid xs height="100%">
            <Card shadow width="100%" >
              {messages.map((message, i) => {
                const content = (
                  <Text p mt={0}>
                    {message.message}
                  </Text>
                );
                return (
                  <Grid.Container style={{ margin: 15 }}>
                    <Grid xs={21}>
                      <Description title={message.name} content={content} />
                    </Grid>
                    <Grid xs={3} alignItems="flex-start" alignContent="flex-end">
                      <Text type="secondary" style={{ fontSize: "0.75rem" }}>{message.timeStamp}</Text>
                    </Grid>
                    <Spacer h={-0.5} />
                  </Grid.Container>)
              })}

            </Card>
          </Grid>
          <Grid xs={4} />

        </Grid.Container>

      </GeistProvider>
    </>
  );
}

export default App;
