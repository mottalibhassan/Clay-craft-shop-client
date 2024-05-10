import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Private = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to='/logIn' ></Navigate>
};
Private.propTypes = {
    children: PropTypes.node
  };

export default Private;