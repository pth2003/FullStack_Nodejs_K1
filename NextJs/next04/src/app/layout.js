import localFont from "next/font/local";

export const metadata = {
  title: "Next 04",
  description: "Generated by create next app",
};

export const myFont = localFont({
  src: "../assets/fonts/JetBrainsMono-Regular.ttf",
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// SEO onpage :
// -semantic :
// -meta : title , meta desc, open graph(các mạng xã hội)
// File robots.txt : cho phép hoặc ngăn chặn bot của các bộ máy tìm kím truy cập vào các đường dẫn trên web để thu nhập dữ liệu (index)
// File sitemap.xml -> khai báo file sitemap.xml cho công cụ google search console
// File favicon.ico
// File json-ld : khai báo cấu trúc dữ kiệu
