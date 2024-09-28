import { api } from "~/trpc/server";

interface Props {
  params: {
    username: string;
  };
}

export default async function Page({ params }: Props) {
  const { username } = params;

  const posts = api.post.getAllPostsByUsername(username);

  const postsHtml = (await posts).map((post) => (
    <div key={post.id} className="bg-white p-4 shadow-md">
      <p className="text-lg font-semibold">{post.title}</p>
      {post.image && (
        <img className="mt-2 h-auto w-1/4" src={post.image} alt={post.title} />
      )}

      <p className="text-gray-500">{post.caption}</p>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-start bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 transform cursor-pointer rounded-full transition-transform duration-200 ease-in-out hover:scale-125"
            src="https://utfs.io/f/5805ca07-0fdf-49f0-9cdf-9d5c2a9b9cb1-t1gqxc.png"
            alt="profile picture"
          />
          <p className="text-lg font-semibold">Username: {username}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Posts</h2>
        <div className="flex flex-wrap gap-4 space-y-4">{postsHtml}</div>
      </div>
    </div>
  );
}
