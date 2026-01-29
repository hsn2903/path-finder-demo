import Footer from "@/components/layouts/root/footer";
import Header from "@/components/layouts/root/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
