import { Card, Grid, Text, Spacer, Link, Description, Input, Button, Image } from '@geist-ui/core';
import { Send, Plus, ArrowRight, X, Trash2 } from "@geist-ui/icons";
import React, { useState, useEffect, useRef } from 'react';

const People = () => {
	const [people, setPeople] = useState([{ username: "username", name: "name" }, { username: "username", name: "name" }, { username: "username", name: "name" }, { username: "username", name: "name" }]);
	
	const userModal = (username: string) => {

	}
	return (<>
		<Card width="100%">
			<Description title={"List of people registered with Channel"} content={<b>People using Channel</b>} />
		</Card>
		<Spacer />
		<Card width="100%">
			<Grid.Container gap={2}>
				{people.map((person) => {
					return (
						<Grid lg={8} justify="center">
							<Card className="col" style={{ cursor: "pointer" }} onClick={() => { userModal(person.username) }}>
								<Image src='https://i.pravatar.cc/300'></Image>
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
