interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>New Post page { id }</h1>
			<p>here you can upload new posts</p>
		</>
	);
}
