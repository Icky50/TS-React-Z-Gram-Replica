interface NavBarProps {
  children: React.ReactNode;
}

export function NavBar() {
  return (
    <div className="p-2 m-1 flex w-11/12 justify-center">
      <NavBarElement icon="/icons/search.svg" link="/page/search" name={"Search"} />
      <NavBarElement icon="/icons/explore.svg" link="/page/explore" name={"Explore"} />
      <NavBarElement icon="/icons/feed.svg" link="/page/feed" name={"Feed"} />
      <NavBarElement icon="/icons/profile.svg" link="/page/profile" name={"My Profile"} />
      <NavBarElement icon="/icons/new_post.svg" link="/page/post/new" name={"New Post"} />
    </div>
  );
}

export function NavBarElement(props: {
  name: string;
  icon?: string | undefined;
  link: string;
  showName?: boolean;
}) {
  return (
    <>
      <div className="p1 my-1 mx-5 flex items-center rounded-md bg-transparent hover:bg-[#5E548E] w-20 h-20">
        <a href={props.link} className="w-full h-full flex justify-center items-center">
          {props.showName ? (
            <p className="p-1">{props.name}</p>
          ) : (
            <img src={props.icon ?? "favicon.ico"} alt={props.name} className="w-8 h-8" />
          )}
        </a>
      </div>
    </>
  );
}
