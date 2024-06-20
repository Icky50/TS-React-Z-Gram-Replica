interface NavBarProps {
  children: React.ReactNode;
}

export function NavBar() {
  return (
    <div className="m-1 flex w-11/12 rounded-md bg-gray-900 p-1">
      <NavBarElement link="#" />
      <NavBarElement link="#" />
      <NavBarElement link="#" />
    </div>
  );
}

export function NavBarElement(props: { link: string; }) {
  return (
    <>
      <div className="p1 m-1 rounded-md bg-gray-400">
        <a href={props.link} className="">
          <img src="favicon.ico" alt="nav bar element" />
        </a>
      </div>
    </>
  );
}
