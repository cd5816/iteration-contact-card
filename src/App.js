import ContactCard from "./ContactCard";

const data = [
	{
		id: "sunita-abc123",
		name: "Kelly Dismuke",
		job: "CEO",
		email: "sunita.kumar@acme.co",
	},
	{
		id: "henderson-def456",
		name: "Ella",
		job: "Receptionist",
		email: "henderson-the-second@acme.co",
	},
	{
		id: "aio-ghi789",
		name: "Caleb Dismuke",
		job: "Hacker",
		email: "kobayashi.aoi@acme.co",
	},
];

function App() {
	return (
		<ul>
			{data.map(({ id, name, job, email }) => (
				<ContactCard
					key={id} // Every item needs a unique identifier
					name={name}
					job={job}
					email={email}
				/>
			))}
		</ul>
	);
}

// The longer way:
// const element = data.map((contact) => (
//   <ContactCard
//     key={contact.id} // Every item needs a unique identifier
//     name={contact.name}
//     job={contact.job}
//     email={contact.email}
//   />
// ));
// return <ul>{element}</ul>;
// }

export default App;
