import { Card, Grid, Text, Spacer, Input, Button, Tabs } from "@geist-ui/core";
import { ArrowRight } from "@geist-ui/icons";

const AuthScreen = () => {

	return (
		<Grid.Container gap={2} justify="center">
			<Grid xs={12}>
				<Card shadow width="100%" height="700px">
					<Text type="secondary" h2>
						Channel Login/Signup
					</Text>
					<Tabs initialValue="1" align="center" leftSpace={0}>
						<Tabs.Item label={<>Login Form</>} value="1">
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
