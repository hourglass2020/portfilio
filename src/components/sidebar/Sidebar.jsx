import { SidebarContent } from "./";
import { SidebarDrawer, DrawerFAB } from "../drawer";

const Sidebar = () => {
    return (
        <>
            <DrawerFAB />
            <SidebarContent />
            <SidebarDrawer />
        </>
    );
};

export default Sidebar;
