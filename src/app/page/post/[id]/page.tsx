interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>Post</h1>
			<p>This is the post with the id {id}!</p>
		</>
	);
}
