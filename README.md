# Channel

**CS315A - Principles of Database Systems**


Deployed here: [harshit-chan.herokuapp.com/](https://harshit-chan.herokuapp.com/)

## Team

**Bhuvan Singla**
180199
bhuvans@iitk.ac.in

**Harshit Raj**
200433
harshitr20@iitk.ac.in

## Description

The application, `Channel` is a chat room system that allows people to send text messages to one another in public rooms in real-time within an organisation. We use the term ‘channel’ for these public rooms. Every room has a unique name and purpose associated with it.

## ER Diagram

![ER_MODEL.png](github-assets/ER_MODEL.png)

## How to run
```bash
# clone this repo
git clone https://github.com/1-Harshit/channel.git
cd channel
# build the web app
cd web
npm install
npm run build
# run the server
cd ..
go mod download
go run ./cmd/server/main.go
```

## Tech Stack

### Backend

We have developed the backend of the application using **Go**.
Go is a statically typed, compiled programming language developed at Google. It is known for its better memory safety, garbage collection, and concurrency.

### Frontend

We have developed the frontend of the application using **React**. React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It was developed at Facebook.

### Database

We have used **SQLite** as the database. However the code is written in a manner that we can easily switch b/w other SQL databases such as PostgreSQL.

## REST APIs

```jsx
POST /user/signup HTTP/1.1
Host: localhost:8080
Content-Length: 218

{
    "name": "Sheldon Cooper",
    "password": "bazinga",
    "username": "moonpie",
    "phoneNo": "7373737373",
    "designation": "Captain",
    "avatarURL": "https://avatars.githubusercontent.com/u/16359086?v=4"
}
```

```jsx
POST /user/login HTTP/1.1
Host: localhost:8080
Content-Length: 58

{
    "username" : "moonpie",
    "password" : "bazinga"
}
```

```jsx
GET /users HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
GET /user/moonpie HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
GET /channels HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
GET /user/moonpie/channels HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
POST /channel HTTP/1.1
Host: localhost:8080
Content-Length: 65
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo

{
    "name": "tech",
    "description": "everything goes here"
}
```

```jsx
GET /channels HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo

```

```jsx
DELETE /channel/general HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
POST /channel/tech/membership HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
DELETE /channel/tech/membership HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
GET /channel/tech/membership HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
GET /channel/general/members HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

```jsx
POST /channel/general/message HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
Content-Type: application/json
Content-Length: 44

{
    "content" : "The best number is 73."
}
```

```jsx
GET /channel/general/messages?after_time=0 HTTP/1.1
Host: localhost:8080
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk3NDU5MDQsInVzZXJuYW1lIjoibW9vbnBpZSJ9.oW55Tr4rQipDeuhttTI9MEwvud6lCNJYgN0Fh8nkoDo
```

## DB Schema

```sql
CREATE TABLE "channels" (
	"name"	text,
	"description"	text,
	"created_at"	integer,
	"user_username"	text,
	PRIMARY KEY("name"),
	CONSTRAINT "fk_channels_user" FOREIGN KEY("user_username")
	REFERENCES "users"("username") ON DELETE SET NULL ON UPDATE CASCADE
);
```

```sql
CREATE TABLE "users" (
	"username"	text,
	"password"	text,
	"name"	text,
	"last_login_at"	integer,
	"phone_no"	text,
	"designation"	text,
	"avatar_url"	text,
	PRIMARY KEY("username")
);
```

```sql
CREATE TABLE "messages" (
	"id"	integer,
	"content"	text,
	"time_sent_at"	integer,
	"user_username"	text,
	"channel_name"	text,
	PRIMARY KEY("id"),
	CONSTRAINT "fk_messages_channel" FOREIGN KEY("channel_name")
	REFERENCES "channels"("name") ON DELETE SET NULL ON UPDATE CASCADE,
	CONSTRAINT "fk_messages_user" FOREIGN KEY("user_username")
	REFERENCES "users"("username") ON DELETE SET NULL ON UPDATE CASCADE
);

-- INDEX
CREATE INDEX "idx_time_sent_at" ON "messages" (
	"time_sent_at"
);

```

```sql
CREATE TABLE "channel_users" (
	"user_username"	text,
	"channel_name"	text,
	CONSTRAINT "fk_channel_users_channel" FOREIGN KEY("channel_name")
	REFERENCES "channels"("name") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT "fk_channel_users_user" FOREIGN KEY("user_username")
	REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("user_username","channel_name")
);
```

## Screenshots

![Channel Infor](<github-assets/2_(1).jpeg>)

Channel Infor

![List All Channels](<github-assets/1_(1).jpeg>)

List All Channels

![List all users](<github-assets/3_(1).jpeg>)

List all users

![User Profile](<github-assets/4_(1).jpeg>)

User Profile

![Channel Message History](<github-assets/6_(1).jpeg>)

Channel Message History

![Delete channel](<github-assets/7_(1).jpeg>)

Delete channel

![Add channel](<github-assets/9_(1).jpeg>)

Add channel

![Signup](github-assets/Untitled%202.png)

Signup

![Login](github-assets/Untitled%203.png)

Login

## Codebase

- Hosted on here GitHub
- Continuous effort and contribution by each member of the project can be viewed from the commit history available on the above GitHub repository.

## Acknowledgment

We would like to thank the Instructor of the course, **Prof. Sumit Ganguly**, for teaching us the Principles of Database Systems, and giving us the opportunity to build this application.
