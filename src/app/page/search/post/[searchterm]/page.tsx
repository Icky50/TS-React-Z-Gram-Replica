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
			<main>
				<div></div>
				<div>
					<h1>Search Results for "{searchterm}"</h1>
					<p>
						Search results for the term "{searchterm}" will be displayed here.
					</p>
					<div>
						<h2>Mockup Posts</h2>
						<ul>
							<li>
								<h3>Post 1 Title</h3>
								<p>Post 1 content...</p>
							</li>
							<li>
								<h3>Post 2 Title</h3>
								<p>Post 2 content...</p>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
}
