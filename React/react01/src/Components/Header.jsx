import Menu from "./Menu";
const Header = ({ title, name, email, age }) => {
  console.log(name, email, age);
  const menu = [
    {
      id: 1,
      link: "#",
      title: "Menu 1",
    },
    {
      id: 2,
      link: "#",
      title: "Menu 2",
    },
    {
      id: 3,
      link: "#",
      title: "Menu 3",
    },
  ];
  const handleReceiveData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Menu menu={menu} onReceiveData={handleReceiveData} />
    </div>
  );
};

export default Header;

// lenh tao : rfc
