import React from "react";
import SidebarAdmin from "../../components/sections/sidebar-admin";
import SearchBar from "../../components/sections/searchbar";
import Footer from "../../components/sections/footer";
import LogoutModal from "../../components/modals/logout-modal";
import AccountlistItem from "../../components/widgets/accountlist-item";
import Header from "../../components/sections/Header";
import AddTopicModal from "../../components/modals/add-topic-modal";

import { Button, HStack } from "@chakra-ui/react"

class AdminManageTopic extends React.Component{
    render() {
        return(
            <div id="page-top">                
            <div id="wrapper">
                <SidebarAdmin />
                <div id="content-wrapper" className="d-flex flex-column">
                <Header title="Quản Lý Đề Tài"/>
                <div id="content">
                    <div className="container-fluid">
                    <SearchBar />
                    <div className="row mt-4 mb-4">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Danh sách đề tài</h6>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-icon-split"
                                        data-toggle="modal"
                                        data-target="#addTopicModal" // Modal ID
                                    >
                                        <span className="icon text-white-50">
                                            <i className="fas fa-plus"></i>
                                        </span>
                                        <span className="text">Thêm Đề Tài</span>
                            
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên Đề Tài</th>
                                                    <th>Giảng Viên Hướng Dẫn</th>
                                                    <th>Trạng Thái</th>
                                                    <th>Thao Tác</th>
                                                </tr>
                                            </thead>
                                            <tbody id="account-list-table-body">
                                                {/* Example of AccountlistItem component usage */}
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <AccountlistItem key={index} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AddTopicModal />
                </div>
                <Footer />
                </div>
            </div>

            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            <LogoutModal />
                </div>
            </div>
        );
    }
}
export default AdminManageTopic;