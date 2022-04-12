import { Card, Grid, Text, Spacer, Link, Description, Input, Button, Modal } from '@geist-ui/core';
import { Send, Plus, ArrowRight, X, Trash2 } from "@geist-ui/icons";
import React, { useState, useEffect, useRef } from 'react';
import { getChannels } from '../api/callbacks';
import People from './People';
import Channel from './Channel';

const InsideScreen = () => {
	const [activeChannel, setActiveChannel] = useState({ description: "General Conversation", name: "general", createdAt: 1649745585, createdBy: "Harshit" });
	const messageEndRef = useRef<HTMLDivElement>(null);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [modalIsOpen1, setModalIsOpen1] = React.useState(false);
	const [tab, setTab] = useState('c');

	const closeModal = () => {
		setIsOpen(false);
	}
	const closeModal1 = () => {
		setModalIsOpen1(false);
	}

	const [channels, setChannels] = useState([
		{ description: "General Conversation", name: "general", createdAt: 1649745585, createdBy: "Harshit" },
		{ description: "General Techy Stuff", name: "tech", createdAt: 1649748900, createdBy: "Harshit" },
		{ description: "Random Chit Chat", name: "chit-chat", createdAt: 1649747600, createdBy: "Bhuvan" },
		{ description: "Water Cooler", name: "water-ciiker", createdAt: 1649743900, createdBy: "Harshit" },
	]);
	const [messages, setMessages] = useState([
		{ timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },
		{ timeStamp: "Apr 10, 8:15 PM", name: "Bhuvan Singla", message: "Hola" },
		{ timeStamp: "Apr 10, 8:17 PM", name: "Harshit Raj", message: "Nice portal!" },
		{ timeStamp: "Apr 10, 8:17 PM", name: "Bhuvan Singla", message: "Indeed" },
		{ timeStamp: "Apr 10, 8:18 PM", name: "Harshit Raj", message: "Should add this in report now!" },
		{ timeStamp: "Apr 10, 8:19 PM", name: "Bhuvan Singla", message: "Sure!" },
		{ timeStamp: "Apr 10, 8:20 PM", name: "Harshit Raj", message: "Treat at CCD?" },
		{ timeStamp: "Apr 10, 8:21 PM", name: "Bhuvan Singla", message: "NO!" },
		{ timeStamp: "Apr 10, 8:22 PM", name: "Harshit Raj", message: "Okie Bye!" },
		{ timeStamp: "Apr 10, 8:23 PM", name: "Bhuvan Singla", message: "bye." },
	]);

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

	const addChannel = () => {
		//api call
	}

	useEffect(() => {

		getChannels().then((res) => {
			console.log(res.Payload)
		})

	});

	useEffect(() => {
		handleScroll();
	}, [messages])

	useEffect(() => {
	}, [activeChannel]);

	const messagePane = (<><Grid xs={24}>
		<Grid.Container gap={2} direction="column">
			<Grid xs={22}>
				<Card width="100%" height="10px" style={{ border: "none" }}>
					<Description title={activeChannel.description} content={<b>Channel: {activeChannel.name.toUpperCase()}</b>} />
				</Card>
			</Grid>
			<Grid xs style={{ alignItems: "center", justifyContent: "flex-end", verticalAlign: "center" }}>
				<Button style={{ border: "none" }} onClick={() => { setModalIsOpen1(true); }}>
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
		</Grid></>);

	const sidebar = <Card width="100%" height="500px" paddingLeft="25%" style={{ borderWidth: 0 }}>
		<Text style={{ color: "#888", letterSpacing: "1.5px", fontSize: "0.8125rem", cursor: "pointer" }} onClick={() => { setTab("c"); }}>
			CHANNEL  <Plus onClick={handleAddChannel} fontSize="0.8rem" />
		</Text>
		<Spacer h={0.5} />

		<Text style={{ color: "#333", letterSpacing: "1.5px", fontSize: "1rem", cursor: "pointer" }} onClick={() => { setTab("p"); }}>
			People
		</Text>
		<Spacer h={0.5} />

		{channels.map((channel) => {
			return (
				<>
					<Link
						href={"/#" + channel.name}
						onClick={() => { setTab("m"); setActiveChannel(channel); }}
						color={activeChannel.name === channel.name}
					>
						# {channel.name}
					</Link>
					<Spacer h={0.2} />
				</>
			);
		})}
	</Card>;
	return (
		<Grid.Container gap={2} justify="center" >
			<Modal
				visible={modalIsOpen}
				onClose={closeModal}
			>
				<Modal.Title>Add Channel</Modal.Title>
				<div style={{ alignContent: "flex-start", alignItems: "flex-start", textAlign: "start" }}>
					<Input width="100%" placeholder="Enter Channel name">
						Channel Name
					</Input>
					<Spacer />
					<Input width="100%" placeholder="Enter Description">
						Description
					</Input>
				</div>
				<Modal.Action passive onClick={closeModal}>
					<Spacer inline w={0.1} />
					Close<Spacer w={0.5} /> <X />
				</Modal.Action>
				<Modal.Action onClick={addChannel}>
					<Spacer inline w={0.1} />
					Create Channel<Spacer w={0.5} /> <ArrowRight />
				</Modal.Action>

			</Modal>
			<Modal
				visible={modalIsOpen1}
				onClose={closeModal1}
			>
				<Modal.Title>Delete Channel</Modal.Title>
				<div style={{ alignContent: "flex-start", alignItems: "flex-start", textAlign: "start" }}>
					<b>Are your sure you want to delete cahnnel {activeChannel.name}?</b> <br />
					<small>
						Note: ALL messages will be deleted permanently.
					</small>
				</div>
				<Modal.Action onClick={closeModal1}>
					Close
				</Modal.Action>
				<Modal.Action passive onClick={addChannel}>
					Yes delete!
				</Modal.Action>

			</Modal>
			<Grid xs={3} />
			<Grid xs={3} height="100%" alignContent="flex-end">
				{sidebar}
			</Grid>
			<Grid xs height="100%" >
				<Grid.Container gap={0.5} justify="center" direction="row">
					<Grid xs={24}>
						<Card style={{ border: "none" }} height="4px">
						</Card>
					</Grid>
					{tab === "p" ? <People /> : tab === "c" ? <Channel /> : messagePane}
				</Grid.Container>
			</Grid>
			<Grid xs={4} />
		</Grid.Container >
	);
}

export default InsideScreen;