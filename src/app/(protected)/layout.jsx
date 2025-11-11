import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/events/EventLoading";

export default function ProtectedLayout({ children }) {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="scrollbar-hide min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
