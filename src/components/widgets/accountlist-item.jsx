import React, { Component } from "react";
import DeleteMSG from "../../components/modals/delete-msg-modal";

class AccountlistItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <tr id={this.props.id}>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.username}</td>
                <td>{this.props.role == "1" ? "Giảng viên" : "Sinh viên"}</td>
                
                <td>
                    <button className="btn btn-danger" data-toggle="modal" data-target="#deletemsgModal">
                        <i className="fa fa-fw fa-trash"></i>
                    </button>      
                    <DeleteMSG />
                </td>
            </tr>
        );
    }
}

export default AccountlistItem;