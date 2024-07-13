interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>Explore { id }</h1>
			<p>Here you can see new random public posts</p>
		</>
	);
}
