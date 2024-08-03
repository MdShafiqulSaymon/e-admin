import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full bg-slate-100">
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
