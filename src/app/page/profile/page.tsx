export default function Page() {
	return (
		<div className="flex flex-col items-center gap-2 mt-20">
			<h1 className="text-red-800 text-2xl">You should not be here!</h1>
			<h2 className="text-lg">This page should have redirected to the client profile page.</h2>
			<p>Instead, you are seeing this error message.</p>
		</div>
	);
}
