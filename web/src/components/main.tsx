import { Card, Grid, Text, Spacer, Link, Description, Input, Button, Modal } from '@geist-ui/core';
import { Send, Plus, ArrowRight, X, Trash2 } from "@geist-ui/icons";
import React, { useState, useEffect, useRef } from 'react';
import { getChannels } from '../api/callbacks';
import People from './People';

const InsideScreen = () => {
	const [activeChannel, setActiveChannel] = useState("general");
	const messageEndRef = useRef<HTMLDivElement>(null);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [showPeople, setShowPeople] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	}

	const [channels, setChannels] = useState(["general", "active"]);
	const [messages, setMessages] = useState([{ timeStamp: "Oct 01, 7:15 AM", name: "Harshit Raj", message: "Hey there!" },]);

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
					<Description title={"description"} content={<b>Channel: {activeChannel.toUpperCase()}</b>} />
				</Card>
			</Grid>
			<Grid xs style={{ alignContent: "flex-end" }}>
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
		</Grid></>);

	const sidebar = <Card width="100%" height="500px" paddingLeft="25%" style={{ borderWidth: 0 }}>
		<Text style={{ color: "#888", letterSpacing: "1.5px", fontSize: "0.8125rem", cursor: "pointer" }} onClick={() => { setShowPeople(false); }}>
			CHANNEL  <Plus onClick={handleAddChannel} fontSize="0.8rem" />
		</Text>
		<Spacer h={0.5} />

		<Text style={{ color: "#333", letterSpacing: "1.5px", fontSize: "1rem", cursor: "pointer" }} onClick={() => { setShowPeople(true); }}>
			People
		</Text>
		<Spacer h={0.5} />

		{channels.map((channel) => {
			return (
				<>
					<Link
						href={"/#" + channel}
						onClick={() => { setShowPeople(false); setActiveChannel(channel); }}
						color={activeChannel === channel}
					>
						# {channel}
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

				<Input width="100%" placeholder="Enter Channel name">
					Channel Name
				</Input>
				<Spacer />
				<Input width="100%" placeholder="Enter Description">
					Description
				</Input>
				<Modal.Action passive onClick={closeModal}>
					<Spacer inline w={0.1} />
					Close<Spacer w={0.5} /> <X />
				</Modal.Action>
				<Modal.Action onClick={addChannel}>
					<Spacer inline w={0.1} />
					Create Channel<Spacer w={0.5} /> <ArrowRight />
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
					{showPeople ? <People /> : messagePane}
				</Grid.Container>
			</Grid>
			<Grid xs={4} />

		</Grid.Container >
	);
}

export default InsideScreen;