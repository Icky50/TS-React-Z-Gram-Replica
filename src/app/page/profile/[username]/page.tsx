interface Props {
	params: {
		id: string;
		username: string;
	};
}

export default function Page({ params }: Props) {
	const { id, username } = params;

	return (
		<>
			<h1>Profile page { id }</h1>
			<p>User:</p>
			<p>{username}</p>
		</>
	);
}
