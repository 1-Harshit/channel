import { Card, Grid, Text, Spacer, Link, Description, Input, Button } from '@geist-ui/core';
import { Send, Plus, ArrowRight, X, Trash2 } from "@geist-ui/icons";
import Modal from 'react-modal';
import React, { useState, useEffect, useRef } from 'react';

const InsideScreen = () => {
	const [activeChannel, setActiveChannel] = useState("general");
	const messageEndRef = useRef<HTMLDivElement>(null);
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const closeModal = () => {
		setIsOpen(false);
	}

	const channels = ["general", "active", "bhuvan", "harshit", "pannel", "page", "crumbs", "expenses", "random", "micl"];
	const [messages, setMessages] = useState([{ timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },]);

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


	const handleScroll = () => {
		if (messageEndRef.current?.scrollIntoView) {
			messageEndRef.current.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => {
				if (messageEndRef.current?.scrollIntoView)
					messageEndRef.current.scrollIntoView = () => { }
			}, 1000);
		}
	}

	const handleAddChannel = () => {
		setIsOpen(true);
	}

	useEffect(() => {
		handleScroll();
	}, [messages])

	return (
		<Grid.Container gap={2} justify="center" >
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Add Channel"
			>
				<Grid.Container gap={2} justify="center">
					<Grid xs={10} />
					<Grid xs>
						<Grid.Container gap={2} justify="center">

							<Grid xs={24}>
								<Text h3>Add Channel</Text>
							</Grid>
							<Grid xs={24}>

								<Input placeholder="Enter Channel name">
									Channel Name
								</Input>
							</Grid>
							<Grid xs={24}>
								<Input placeholder="Enter Description">
									Description
								</Input>
							</Grid>
							<Grid xs={24}>
								<Button auto className="info-icon text-center" style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
									<Spacer inline w={0.1} />
									Create Channel<Spacer w={0.5} /> <ArrowRight />
								</Button>
								<Button auto className="info-icon text-center" style={{ borderWidth: 0, justifyContent: "center", alignItems: "center" }} onClick={closeModal}>
									<Spacer inline w={0.1} />
									Close<Spacer w={0.5} /> <X />
								</Button>
							</Grid>
						</Grid.Container>
					</Grid>
					<Grid xs={5} />
				</Grid.Container>

			</Modal>
			<Grid xs={3} />
			<Grid xs={3} height="100%" alignContent="flex-end">
				<Card width="100%" height="500px" paddingLeft="25%" style={{ borderWidth: 0 }}>
					<Text style={{ color: "#888", letterSpacing: "1.3px", fontSize: "0.8125rem" }}>
						CHANNEL  <Plus onClick={handleAddChannel} fontSize="0.8rem" />
					</Text>
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
				<Grid.Container gap={0.5} justify="center" direction="row">
					<Grid xs={24}>
						<Card style={{ border: "none" }} height="4px">
						</Card>
					</Grid>
					<Grid xs={24}>
						<Grid.Container gap={2} direction="column">
							<Grid xs={22}>
								<Card width="100%" height="10px" style={{ border: "none" }}>
									<Description title={"description"} content={<b>Channel: {activeChannel.toUpperCase()}</b>} />
								</Card>
							</Grid>
							<Grid xs style={{alignContent:"flex-end"}}>
								<Button style={{ border: "none" }}>
									<Trash2 />
								</Button>
							</Grid>
						</Grid.Container>
					</Grid>
					<Grid xs={24} >
						<Card shadow width="100%" height="590px" style={{ overflowY: "scroll" }}>
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

		</Grid.Container >
	);
}

export default InsideScreen;