const ClientLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1> Client header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1> Client footer</h1>
      </footer>
    </>
  );
};

export default ClientLayout;
