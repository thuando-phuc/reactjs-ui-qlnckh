import React from "react";
import { Avatar, AvatarGroup, HStack  } from "@chakra-ui/react"

class Header extends React.Component {
    render() {
        const { title, subtitle } = this.props;

        return (    
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <h1>{this.props.title}</h1>
            <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
            >
                <i className="fa fa-bars"></i>
            </button>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                <a
                    className="nav-link dropdown-toggle"
                    href="# "
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
                <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                >
                    <h6 className="dropdown-header">Thông báo</h6>
                    <a className="dropdown-item d-flex align-items-center" href="# ">
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">Tháng 12, 2023</div>
                        <span className="font-weight-bold">Báo cáo hàng tháng đã sẵn sàng để tải xuống!</span>
                    </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="# ">
                    <div className="mr-3">
                        <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">Tháng 12, 2023</div>
                        Đã nhận được khoản thanh toán 250.000 VNĐ.
                    </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="# ">
                    <div className="mr-3">
                        <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">Tháng 12, 2023</div>
                        Cảnh báo: Có quá nhiều đăng nhập thất bại.
                    </div>
                    </a>
                </div>
                </li>
                <li className="nav-item dropdown no-arrow">
                <a
                    className="nav-link dropdown-toggle"
                    href="# "
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small" id='admin-name'></span>
                    <img
                    className="img-profile rounded-circle"
                    src="../assets/images/avatar.jpeg"
                    alt=''
                    />
                </a>

                <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                >
                    <a
                    className="dropdown-item"
                    href="# "
                    data-toggle="modal"
                    data-target="#logoutModal"
                    >
                    Đăng xuất
                    </a>
                </div>
                </li>
            </ul>
            </nav>
        );
    }
}

export default Header;