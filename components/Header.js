
import Link from 'next/link';
import Nav from './Nav';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="container mx-auto w-4/5 mb-8">
    <Nav />
  </div>
);

export default Header;