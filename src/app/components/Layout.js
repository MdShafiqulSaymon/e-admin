import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Nav />
      <div className="flex flex-row">
        <Sidebar />
        <div className='w-full'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
