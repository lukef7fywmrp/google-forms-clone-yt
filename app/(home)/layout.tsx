import LandingHeader from "@/components/LandingHeader";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  );
}

export default HomeLayout;
