import { Card, Grid, Spacer, Description, Image } from '@geist-ui/core';
import { useState } from 'react';
import { Modal } from '@geist-ui/core';

interface User {
	name: string;
	username: string;
	phone: string;
	avatar: string;
	designation: string;
}

const People = () => {
	const [people, setPeople] = useState([
		{ name: "Harshit raj", username: "harshit", avatar: "https://avatars.githubusercontent.com/u/75195728?v=4", phone: "123456789", designation: "OWNER" },
		{ name: "Harshit raj 2", username: "harshitr", avatar: "https://avatars.githubusercontent.com/u/82652819?v=4", phone: "129955789", designation: "GBM" },
		{ name: "Bhuvan", username: "bhuvan", avatar: "https://avatars.githubusercontent.com/u/16359086?v=4", phone: "8963541278", designation: "NON GBM" },
		{ name: "Someone", username: "someone", avatar: "https://avatars.githubusercontent.com/u/16349086?v=4", phone: "8963541278", designation: "GBM" },
	]);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [channel, setChannel] = useState<User>({ name: "", username: "", avatar: "", phone: "", designation: "" });


	const closeModal = () => { setModalIsOpen(false) }

	const userModal = (channel: User) => {
		setChannel(channel);
		setModalIsOpen(true);
	}


	return (<>
		<Card width="100%">
			<Description title={"List of people registered with Channel"} content={<b>People using Channel</b>} />
		</Card>
		<Spacer />
		<Modal
			visible={modalIsOpen}
			onClose={closeModal}
			style={{ alignContent: "flex-start", alignItems: "flex-start" }}
		>
			<Modal.Title>
				User view
			</Modal.Title>
			<div style={{ alignContent: "flex-start", alignItems: "flex-start", textAlign: "start" }}>
				<Image src={channel.avatar}></Image>
				<Description title={"User Name"} content={<b>{channel?.name}</b>} /> <Spacer />
				<Description title={"Username"} content={<b>{channel?.username}</b>} /><Spacer />
				<Description title={"Channel Phone No"} content={<b>{channel?.phone}</b>} /><Spacer />
				<Description title={"Channel Designation"} content={<b>{channel.designation}</b>} />
			</div>

			<Modal.Action onClick={closeModal}>
				Close
			</Modal.Action>

		</Modal>
		<Card width="100%">
			<Grid.Container gap={2}>
				{people.map((person) => {
					return (
						<Grid lg={8} justify="center">
							<Card className="col" style={{ cursor: "pointer" }} onClick={() => { userModal(person) }}>
								<Image src={person.avatar}></Image>
								<Description title={person.username} content={<b>{person.name.toUpperCase()}</b>} />
							</Card>
						</Grid>
					);
				})}
			</Grid.Container>

		</Card>
	</>);
}

export default People;
