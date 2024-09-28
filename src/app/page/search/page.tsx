interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  const mockSearchResults = [
	{
	  id: "1",
	  title: "Title 1",
	  description: "Description 1",
	},
	{
	  id: "2",
	  title: "Title 2",
	  description: "Description 2",
	},
	{
	  id: "3",
	  title: "Title 3",
	  description: "Description 3",
	},
  ];

  const searchResultsHtml = mockSearchResults.map((result) => (
	<div key={result.id}>
	  <h2>{result.title}</h2>
	  <p>{result.description}</p>
	</div>
  ));

  return (
    <>
      <main>
        <div></div>
		<div>
		  <h1>Search Results for "{id}"</h1>
		  {searchResultsHtml}
		</div>
      </main>
    </>
  );
}
