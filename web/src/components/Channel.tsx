import { Card, Grid, Spacer, Description, Image, Modal } from '@geist-ui/core';
import { useState } from 'react';


interface Channel {
	name: string;
	description: string;
	createdAt: number;
	createdByUsername: string;
}

interface Props {
	channels: Channel[]
}

const People: React.FC<Props> = ({channels}) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [channel, setChannel] = useState<Channel>({ name: "", description: "", createdAt: 0, createdByUsername: "" });

	const closeModal = () => { setModalIsOpen(false) }

	const userModal = (channel: Channel) => {
		setChannel(channel);
		setModalIsOpen(true);
	}

	return (<>
		<Card width="100%">
			<Description title={"List of channels registered"} content={<b>All Channel</b>} />
		</Card>
		<Spacer />
		<Modal
			visible={modalIsOpen}
			onClose={closeModal}
			style={{ alignContent: "flex-start", alignItems: "flex-start" }}
		>
			<Modal.Title>
				Channel view
			</Modal.Title>
			<div style={{ alignContent: "flex-start", alignItems: "flex-start", textAlign: "start" }}>
				<Description title={"Channel Name"} content={<b>{channel?.name}</b>} /> <Spacer />
				<Description title={"Channel Description"} content={<b>{channel?.description}</b>} /><Spacer />
				<Description title={"Channel Created By"} content={<b>{channel?.createdByUsername}</b>} /><Spacer />
				<Description title={"Channel Created At"} content={<b>{new Date(channel.createdAt).toDateString()}</b>} />
			</div>

			<Modal.Action onClick={closeModal}>
				Close
			</Modal.Action>

		</Modal>
		<Card width="100%">
			<Grid.Container gap={2}>
				{channels.map((person) => {
					return (
						<Grid lg={8} justify="center">
							<Card className="col" width="90%" style={{ cursor: "pointer" }} onClick={() => { userModal(person) }}>
								<Description title={"Channel Name"} content={<b>{person?.name}</b>} /> <Spacer />
								<Description title={"Channel Description"} content={<b>{person?.description}</b>} />
							</Card>
						</Grid>
					);
				})}
			</Grid.Container>

		</Card>
	</>);
}

export default People;
