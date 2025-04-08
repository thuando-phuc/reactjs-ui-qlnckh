import React from "react";

class SidebarAdmin extends React.Component {
    render() {
        return (
            <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
            >
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="/admin/"
            >
                <div className="sidebar-brand-icon">
                <i className="fas fa-user"></i>
                </div>
                <div id="lecture-name" className="sidebar-brand-text mx-3"></div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a
                className="nav-link collapsed"
                href="# "
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                >
        
                <i class="fa-solid fa-circle-user"></i>
                <span> Cá Nhân</span>
                </a>
                <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
                >
                <div className="bg-white py-2 collapse-inner rounded">
                    
                    <a className="collapse-item" href="/admin/info">Thông tin cá nhân</a>
                </div>
                </div>
            </li>
            <li className="nav-item">
                <a
                className="nav-link collapsed"
                href="/admin/accountlist"
                >
                <i className="fas fa-fw fa-user"></i>
                <span>Quản Lý Tài Khoản</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link collapsed"
                href="/admin/accountlist"
                >
                <i class="fa-solid fa-folder-open"></i>
                <span>Quản Lý Khai Báo</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link collapsed"
                href="/admin/manage-topic"
                >
                <i class="fa-solid fa-file"></i>
                <span> Quản Lý Đề Tài</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link collapsed"
                href="/admin/accountlist"
                >
                <i class="fa-solid fa-chart-simple"></i>
                <span> Báo Cáo Thống Kê</span>
                </a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button
                className="rounded-circle border-0"
                id="sidebarToggle"
                onClick={() => {
                    const sidebar = document.getElementById("accordionSidebar");
                    sidebar.classList.toggle("toggled");
                    sidebar.style.transition = "all 0.3s ease";
                }}
                ></button>
            </div>
            </ul>
        );
    }
}

export default SidebarAdmin;
