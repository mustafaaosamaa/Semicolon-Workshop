const database = {
	users: [
		{
			id: "1",
			name: "John",
			email: "John@mail.com",
		},
		{
			id: "2",
			name: "Sally",
			email: "Sally@mail.com",
		},
		{
			id: "3",
			name: "Mustafa",
			email: "Mustafa@mail.com",
		},
	],
	blogs: [
		{
			id: "1",
			name: "Blog 1",
		},
		{
			id: "2",
			name: "Blog 2",
		},
	],
};

// Create a server
const express = require("express");
const app = express();
app.use(express.json());

// Handle routing
app.get("/users", (req, res) => {
	res.json(database.users);
});

app.get('/users/:userId', (req, res) => {
	const { userId } = req.params
	const user = database.users.find(u => u.id === userId)
	res.json(user)
});

app.post("/users", (req, res) => {
	const { name, email } = req.body;
	database.users.push({
		id: (database.users.length + 1).toString(),
		name,
		email,
	});
	res.status(201).json(`user ${name} added`);
});

app.get("/blogs", (req, res) => {
	res.json(database.blogs);
});

app.get('/blogs/:blogId', (req, res) => {
	const { blogId } = req.params
	const blog = database.blogs.find(b => b.id === blogId)
	res.json(blog)
});

app.post("/blogs", (req, res) => {
	const { name } = req.body;
	database.blogs.push({
		id: (database.blogs.length + 1).toString(),
		name,
	});
	res.status(201).json(`blog ${name} added`);
});

// Start the server
app.listen(4000, () => console.log("Server ready on port 4000"));


