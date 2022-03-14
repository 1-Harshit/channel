import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Card, CssBaseline, GeistProvider, Grid, useTheme, Text, Spacer, Link, Description, Input, Button, Tabs } from '@geist-ui/core';
import { ArrowRight, Send } from "@geist-ui/icons";

function App() {
  const theme = useTheme();
  const [themeType, setThemeType] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeChannel, setActiveChannel] = useState("general");
  const messageEndRef = useRef<HTMLDivElement>(null);


  const channels = ["general", "active", "bhuvan", "harshit", "pannel", "page", "crumbs", "expenses", "random", "micl"];
  const [messages, setMessages] = useState([{ timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  setTimeout(() => {
    setMessages([
      { timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },
      { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Heyyyy!" },
      { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Sup?" },
      { timeStamp: "Oct 01, 7:18 AM", name: "Harshit Raj", message: "ntng" },
      { timeStamp: "Oct 01, 7:19 AM", name: "Harshit Raj", message: "Byeee" },
      { timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },
      { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Heyyyy!" },
      { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Sup?" },
      { timeStamp: "Oct 01, 7:18 AM", name: "Harshit Raj", message: "ntng" },
      { timeStamp: "Oct 01, 7:19 AM", name: "Harshit Raj", message: "Byeee" },
      { timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },
      { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Heyyyy!" },
      { timeStamp: "Oct 01, 7:17 AM", name: "Harshit Raj 2", message: "Sup?" },
      { timeStamp: "Oct 01, 7:18 AM", name: "Harshit Raj", message: "ntng" },
      { timeStamp: "Oct 01, 7:19 AM", name: "Harshit Raj", message: "Byeee" },
    ]);
  }, 1000); // Simulate network latency

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme !== 'dark') return
    setThemeType('dark')
  }, [])

  const handleScroll = () => {
    if (messageEndRef.current?.scrollIntoView) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    handleScroll();
  }, [messages])

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
          <Grid.Container gap={2} justify="flex-start">
            <Grid xs={3} />
            <Grid xs={3} height="100%" alignContent="flex-end">
              <Card width="100%" height="500px" paddingLeft="25%" style={{ borderWidth: 0 }}>
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
            <Grid xs height="100%" >
              <Grid.Container gap={2} justify="center">
                <Grid xs={24} >
                  <Card shadow width="100%" height="600px" style={{ overflowY: "scroll" }}>
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
                        </Grid.Container>)
                    })}
                    <div style={{ float: "left", clear: "both" }} ref={messageEndRef} />
                  </Card>
                </Grid>
                <Grid xs={24}>
                  <Card shadow width="100%" style={{ borderWidth: 0 }}>
                    <Grid.Container>
                      <Grid xs={22}>
                        <Input placeholder="Message" width="100%" />
                      </Grid>
                      <Grid xs={2}>
                        <Button auto className="info-icon text-center" style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
                          <Spacer inline w={0.1} />
                          <Send />

                        </Button>
                      </Grid>
                    </Grid.Container>
                  </Card>
                </Grid>
              </Grid.Container>
            </Grid>
            <Grid xs={4} />

          </Grid.Container>
        ) : (
          <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
              <Card shadow width="100%" height="700px">
                <Text type="secondary" h2>
                  Channel Login/Signup
                </Text>
                <Tabs initialValue="1" align="center" leftSpace={0}>
                  <Tabs.Item label={<>Login Form</>} value="1">
                    <Text mt={0}>Welcome back!</Text>
                      <Grid.Container gap={2} justify="center">
                        <Grid xs={24}>
                          <Text h3>Login Form</Text>
                        </Grid>
                        <Grid xs={24}>

                          <Input placeholder="Enter Username">
                            Username
                          </Input>
                        </Grid>
                        <Grid xs={24}>
                          <Input.Password placeholder="Enter Password">
                            Password
                          </Input.Password>
                        </Grid>
                        <Grid xs={24}>
                          <Button auto className="info-icon text-center" style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
                            <Spacer inline w={0.1} />
                            Singin<Spacer w={0.5} /> <ArrowRight />
                          </Button>
                        </Grid>
                      </Grid.Container>
                  </Tabs.Item>
                  <Tabs.Item label={<>Singup Form</>} value="2">
                    <Text mt={0}>Please Singup to continue...</Text>
                      <Grid.Container gap={2} justify="center">
                        <Grid xs={24}>
                          <Text h3>Signup Form</Text>
                        </Grid>
                        <Grid xs={24}>
                          <Input placeholder="Enter Name">
                            Name
                          </Input>
                        </Grid><Grid xs={24}>
                          <Input placeholder="Enter Username">
                            Username
                          </Input>
                        </Grid>
                        <Grid xs={24}>
                          <Input.Password placeholder="Enter Password">
                            Password
                          </Input.Password>
                        </Grid>
                        <Grid xs={24}>
                          <Input.Password placeholder="Re-Enter Password">
                            Password
                          </Input.Password>
                        </Grid>
                        <Grid xs={24}>
                          <Button auto className="info-icon text-center" style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
                            <Spacer inline w={0.1} />
                            Singup<Spacer w={0.5} /> <ArrowRight />
                          </Button>
                        </Grid>
                      </Grid.Container>
                  </Tabs.Item>
                </Tabs>
              </Card>
            </Grid>
          </Grid.Container>
        )
        }
      </GeistProvider>
    </>
  );
}

export default App;
