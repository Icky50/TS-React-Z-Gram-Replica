interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>Searchpage { id }</h1>
			<p>Here you can search for posts or profiles</p>
		</>
	);
}
