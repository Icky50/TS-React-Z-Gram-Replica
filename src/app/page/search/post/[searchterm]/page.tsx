interface Props {
	params: {
		id: string;
		searchterm: string;
	};
}

export default function Page({ params }: Props) {
	const { id, searchterm } = params;

	return (
		<>
			<h1>Serach results { id }</h1>
			<p>you serached for posts with this term: {searchterm}</p>
		</>
	);
}
