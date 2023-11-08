import { memo } from "react";

const Content = () => {
  console.log("re-render");
  return <div>Content</div>;
};

export default memo(Content);

// Higher order component
// chỉ render khi props thay đổi
