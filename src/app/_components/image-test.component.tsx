import { url } from "inspector";

const mockUrls = [
	"https://utfs.io/f/5805ca07-0fdf-49f0-9cdf-9d5c2a9b9cb1-t1gqxc.png",
	"https://utfs.io/f/2c357556-b34d-4dfb-906a-a8e00e9d6ce6-46q68z.png",
	"https://utfs.io/f/f9d13d84-8598-41c1-8722-50108eff3682-dvr1p8.png",
	"https://utfs.io/f/7412bebe-b93c-45d6-88f5-f8da0b54cd3e-1lp6pv.jpg",
	"https://utfs.io/f/56fb8edb-ff20-4bd6-878b-64253c0d8dff-xid0n1.png",
	"https://utfs.io/f/e0596066-58f7-4cf4-8489-81e8890ced5d-2wzvq8.png",
	"https://utfs.io/f/09381b79-373f-41d4-9451-fe38962bb85a-txpmg1.png",
]

const mockImagesHtml = mockUrls.map((url, index) => (
	<img className="w-80 m-2" key={index + 1} src={url} alt="image" />
));

export function ImageTest() {
	return (
		<>
			<h1>ImageTest</h1>
			<div>
				{mockImagesHtml}
			</div>
		</>
	);
}