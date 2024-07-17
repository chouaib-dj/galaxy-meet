import Sidebar from "@/components/navbar/dashboard";
import SidebarMobile from "@/components/navbar/dashboard/sidebar-mobile";
import StreamVideoProvider from "@/providers/stream-video-provider";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StreamVideoProvider>
      <div className="min-h-screen w-full">
        <Sidebar />
        <div className="flex flex-col lg:pl-[280px]">
          <SidebarMobile />
          <main className="flex flex-1 flex-col gap-6 p-6 lg:gap-8 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </StreamVideoProvider>
  );
};

export default Layout;
