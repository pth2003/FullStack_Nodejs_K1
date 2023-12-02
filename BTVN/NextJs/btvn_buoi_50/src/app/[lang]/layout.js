import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { i18n } from "../../../i18.config";
import Provider from "../../components/Provider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
