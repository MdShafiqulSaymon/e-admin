import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#f6f9ff]">
      <Nav />
      <div className="flex flex-row min-h-screen">
        <Sidebar />
        <div className='w-full h-full'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
