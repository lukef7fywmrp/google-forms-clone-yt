import Header from "@/components/Header";
import RecentForms from "@/components/RecentForms";

function FormsPage() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto">
        <RecentForms />
      </main>
    </>
  );
}

export default FormsPage;
