import Header from "@/components/Header";
import Profile from "@/components/Profile";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang);

  return (
    <div className="container">
      <Header />
      <Profile page={page} />
    </div>
  );
}
