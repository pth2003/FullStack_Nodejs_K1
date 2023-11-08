export const Color = (Component) => {
  const color = "#" + Math.random().toString(16).slice(-6);
  return function MyComponent(props) {
    return (
      <div className="color" style={{ color }}>
        <Component {...props} />
      </div>
    );
  };
};

// Tạo ra 1 component mới bên trong 1 hàm khác
// hàm color => hàm bọc (cấp cao hơn)
