import 'glamor/reset';
import './layout.scss';

const Layout = props => (
  <div className="layout">
    {props.children}
  </div>
);

export default Layout;