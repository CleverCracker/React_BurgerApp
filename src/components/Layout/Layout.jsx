import React from 'react';
import Aux from '../../hoc/ReactAux';

const Layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer, BackDrop</div>
        <main>{props.children}</main>
    </Aux>
);

export default Layout;
