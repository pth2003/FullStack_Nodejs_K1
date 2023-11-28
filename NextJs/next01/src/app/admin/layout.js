export const metadata = {
  title: "Trang quan tri",
};
const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>admin header</h1>
      </header>

      <main>{children}</main>

      <footer>
        <h1>Admin footer</h1>
      </footer>
    </>
  );
};
export default AdminLayout;
