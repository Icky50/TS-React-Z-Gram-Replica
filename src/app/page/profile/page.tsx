interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>Profile page { id }</h1>
			<p>This page should later redirect to the login screen or the profile of the logged in user</p>
		</>
	);
}
