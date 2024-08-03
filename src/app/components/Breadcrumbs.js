import Link from 'next/link';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="flex items-center space-x-2 text-blue-500">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Link href={breadcrumb.href} legacyBehavior>
            <a className="hover:underline">{breadcrumb.label}</a>
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className="text-gray-500">{'>'}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
