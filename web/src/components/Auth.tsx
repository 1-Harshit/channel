import { Card, Grid, Text, Spacer, Input, Button, Tabs } from "@geist-ui/core";
import { ArrowRight } from "@geist-ui/icons";
import React, { useState } from "react";
import { postSignup, SignupParams, postLogin, LoginParams } from "../api/callbacks";

interface Params {
	setIsAuthenticated: (value: React.SetStateAction<boolean>) => void
}

const AuthScreen: React.FC<Params> = ({ setIsAuthenticated }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password1, setPassword1] = useState("");
	const [name, setName] = useState("");

	const handleLogin = () => {
		if (!username || !password) {
			alert("Empty fields");
			return
		}

		const params: LoginParams = {
			Username: username,
			Password: password
		}

		postLogin(params).then(res => {
			if (res.Status !== 200) {
				alert("Failed with staus code " + res.Status);
			} else {
				setIsAuthenticated(true);
			}
		})

	}
	const handleSignup = () => {
		if (!password1 || !password || !username || !name) {
			alert("Empty fields");
			return
		}
		if (password !== password1) {
			alert("Password mismatch");
			return
		}

		const params: SignupParams = {
			Name: name,
			Username: username,
			Password: password,
		}

		postSignup(params).then((res) => {
			if (res.Status !== 200) {
				alert("Failed with status code " + res.Status)
			}
		});
	}

	return (
		<Grid.Container gap={2} justify="center">
			<Grid xs={12}>
				<Card shadow width="100%" height="700px">
					<Text type="secondary" h2 className="center" width="100%">
						Channel Login/Signup
					</Text>
					<Tabs initialValue="1" align="center" leftSpace={0}>
						<Tabs.Item label={<>Login Form</>} value="1">
							<Grid.Container gap={2} justify="center">
								<Grid xs={24}>
									<Text h3>Login Form</Text>
								</Grid>
								<Grid xs={24}>
									<Input placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }}>
										Username
									</Input>
								</Grid>
								<Grid xs={24}>
									<Input.Password placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}>
										Password
									</Input.Password>
								</Grid>
								<Grid xs={24}>
									<Button
										auto
										className="info-icon text-center"
										onClick={() => { handleLogin() }}
										style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }}
									>
										<Spacer inline w={0.1} />
										Signin<Spacer w={0.5} /> <ArrowRight />
									</Button>
								</Grid>
							</Grid.Container>
						</Tabs.Item>
						<Tabs.Item label={<>Signup Form</>} value="2">
							<Grid.Container gap={2} justify="center">
								<Grid xs={24}>
									<Text h3>Signup Form</Text>
								</Grid>
								<Grid xs={24}>
									<Input placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }}>
										Name
									</Input>
								</Grid><Grid xs={24}>
									<Input placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }}>
										Username
									</Input>
								</Grid>
								<Grid xs={24}>
									<Input.Password placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}>
										Password
									</Input.Password>
								</Grid>
								<Grid xs={24}>
									<Input.Password placeholder="Re-Enter Password" onChange={(e) => { setPassword1(e.target.value) }}>
										Password
									</Input.Password>
								</Grid>
								<Grid xs={24}>
									<Button
										auto
										className="info-icon text-center"
										onClick={() => { handleSignup() }}
										style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }}
									>
										<Spacer inline w={0.1} />
										Signup<Spacer w={0.5} /> <ArrowRight />
									</Button>
								</Grid>
							</Grid.Container>
						</Tabs.Item>
					</Tabs>
				</Card>
			</Grid>
		</Grid.Container>
	);
};

export default AuthScreen;
