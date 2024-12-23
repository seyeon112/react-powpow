import React from 'react';
import S from "./style"
import {Outlet, useLocation} from "react-router-dom";
// import {useSelector} from "react-redux";


const SellerProductContainer = () => {
    const location = useLocation();
    // const { isLogin } = useSelector((state) => state.user);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(!isLogin){
    //         alert("로그인 후 이용해 주세요.")
    //         navigate("/login")
    //     }
    // }, [])

    const pageTitle = () => {
        switch (location.pathname) {
            case '/seller/product':
                return '상품 조회';
            case '/seller/product-write':
                return '신규 상품등록';
            case '/seller/product-update':
                return '상품 수정';
            default:
                return '상품 조회';
        }
    };

    return (
        <div>
            <S.Content>
                <S.Title >
                    <span>{pageTitle()}</span>
                </S.Title >
            <Outlet/>
            </S.Content>
        </div>
    );
};

export default SellerProductContainer;