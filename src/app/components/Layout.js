import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#f6f9ff] h-screen overflow-hidden">
      <Nav />
      <div className="flex flex-row min-h-screen">
        <Sidebar />
        <div className='w-full overflow-scroll pb-32'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
