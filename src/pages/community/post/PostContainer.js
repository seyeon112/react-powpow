import React from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";
import S from './style';
import Footer from '../../layout/Footer';

const PostContainer = () => {
    const path = useLocation().pathname;

    return (
        <>
            <S.LayoutBox>
                <S.LayoutButton>
                    {
                        !path.includes("/post/read") && !path.includes("/post/list") && path !== "/post/write" && path !== "/post/tag" ? (
                        <div className='button'>
                            <NavLink to={"/post/recommend/orange"}><button className='orange'></button></NavLink>
                            <NavLink to={"/post/recommend/gold"}><button className='gold'></button></NavLink>
                            <NavLink to={"/post/recommend/gradation"}><button className='gradation'></button></NavLink>
                            <NavLink to={"/post/recommend/light-purple"}><button className='lightPurple'></button></NavLink>
                            <NavLink to={"/post/recommend/sky-blue"}><button className='skyBlue'></button></NavLink>
                            <NavLink to={"/post/recommend/sage-green"}><button className='dageGreen'></button></NavLink>
                            <NavLink to={"/post/recommend/ice-blue"}><button className='iceBlue'></button></NavLink>
                            <NavLink to={"/post/recommend/dusty-silver"}><button className='dustySilver'></button></NavLink>
                            <NavLink to={"/post/recommend/all"}> <button className='all'>All</button></NavLink>
                        </div>
                        ) : (
                            <></>
                        )
                    }
                    <Outlet />
                </S.LayoutButton>
            </S.LayoutBox>
            <Footer />
        </>
    );
};

export default PostContainer;