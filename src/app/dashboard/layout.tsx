import "@stream-io/video-react-sdk/dist/css/styles.css";
import StreamVideoProvider from "@/providers/stream-video-provider";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
};

export default Layout;
