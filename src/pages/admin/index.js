import React from "react";
import LogoutModal from "../../components/modals/logout-modal";
import Footer from "../../components/sections/footer";
import Header from "../../components/sections/Header";
import SearchBar from "../../components/sections/searchbar";
import SidebarAdmin from "../../components/sections/sidebar-admin";

class AdminHome extends React.Component {
    render() {
        return(
            <div id="page-top">
                
                <div id="wrapper">
                    <SidebarAdmin />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header />
                            <div className="container-fluid">
                            <SearchBar />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                <LogoutModal />
            </div>
        );
    }
}

export default AdminHome;
