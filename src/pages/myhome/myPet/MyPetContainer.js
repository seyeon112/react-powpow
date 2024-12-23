import React, { useEffect } from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import S from "./style";
import Footer from '../../layout/Footer';
import { useSelector } from 'react-redux';

const MyPetContainer = () => {

    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!currentUser){
            navigate("/login")
        }
    }, [])

    return (
        <div>
            <S.Petanimal as="h1">반려동물</S.Petanimal>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MyPetContainer;