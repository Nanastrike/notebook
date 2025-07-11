import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

import React from 'react'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if(token){
        const decode = jwtDecode(token)
        const { username, roles } = decode.UserInfo
        
        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if(isManager) status = "Manager"
        if(isAdmin) status = "Admin"

        return { username, roles, status, isManager, isAdmin}
    }

    return { username: '', roles:[], isManager, isAdmin, status}
}

export default useAuth