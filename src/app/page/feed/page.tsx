interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>Feed { id }</h1>
			<p>Here you can see new posts of the profiles you follow</p>
		</>
	);
}
