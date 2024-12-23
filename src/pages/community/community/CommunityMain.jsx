import React, { useContext, useEffect, useState } from 'react';
import Banner from "./Banner.jsx";
import S from './style.js';
import Slide from './Slide.jsx';
import { Link } from 'react-router-dom';
import HeartBtn from './HeartBtn.jsx';
import { CommunityContext } from '../../../context/communityContext.js';
import CommunityComponent from './CommunityComponent.jsx';


const CommunityMain = () => {

    const [ popularCommunites , setPopularCommunites] = useState([]);

    useEffect(() => {

        const getPopularCommunites = async () => {
            const response = await fetch("http://localhost:10000/posts/postsPopular");
            const datas = await response.json()
            return datas;
        }

        getPopularCommunites().then(setPopularCommunites).catch(console.error)

    }, [])

    const myPosts = popularCommunites.slice(0, 5).map(({id, imageName1}) => (
        <S.MyPost key={id} >
            {console.log(id)}
            <S.Heart>
                 <HeartBtn id={id} type={"community"} />
            </S.Heart>
            <Link to={`/post/read/${id}`}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`} />
            </Link>
        </S.MyPost>
    ))
    
    return (
        <div>
            {/* 커뮤니티 메인 배너 */}
            <S.BannerWrapper>
                    <p className='text1'>소중한 나의 반려동물과의 추억을 <br/>기록할 수 있어요!</p>
                    <p className='text2'>펫스널 컬러 별 포포 친구들 게시물 구경하러 와요</p>
                    <Link to={"/post/recommend/all"}>
                        <button>게시물 보러가기</button>
                    </Link>

                {/* 게시물 스와이퍼 */}
                <Banner />
            </S.BannerWrapper>

            <S.Title>
                {/* 나의 게시글 전체 박스 */}
                <S.MyPostBox>
                
                {/* 커뮤니티 나의 게시글 타이틀 */}
                    <S.MyTitle>
                        <div>
                            <p className='text3'>게시물 작성하기</p>
                            <p className='text4'>지금 나만의 반려동물 일기를 작성해보세요!</p>
                        </div>
                        <Link to={`/post/list?postId=${1}`}>
                            <p className='text5'>전체보기</p>
                        </Link>
                    </S.MyTitle>

                {/* 커뮤니티 게시글 작성 */}
                    <S.MyCommunityPost>
                        <S.AddPost>
                            <Link to={"../post/write"}>
                                <div>
                                    <img className='thumb' src="/assets/images/community/plus.png" alt="플러스아이콘" />
                                    <p>내 게시물 추가하기</p>
                                </div>
                            </Link>
                        </S.AddPost>
                {/* 커뮤니티 나의 게시글 */}
                        {myPosts}
                    </S.MyCommunityPost>
                </S.MyPostBox>

                {/* 슬라이드 배너 */}
                <Slide />

                <S.ColorTitle>COLOR’S PICK!</S.ColorTitle>

                <S.ColorBox>
                    <S.OrangeBox>
                        <S.ColorName>ORANGE</S.ColorName>
                        <Link to={"/post/recommend/orange"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"Orange"}/>
                        </S.PostBox>
                    </S.OrangeBox>

                    <S.GoldBox>
                        <S.ColorName>GOLD</S.ColorName>
                        <Link to={"/post/recommend/gold"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"Gold"}/>
                        </S.PostBox>
                    </S.GoldBox>

                    <S.GradationBox>
                        <S.ColorName>GRADATION</S.ColorName>
                        <Link to={"/post/recommend/gradation"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"Gradation"}/>
                        </S.PostBox>
                    </S.GradationBox>

                    <S.LightPurpleBox>
                        <S.ColorName>LIGHT PURPLE</S.ColorName>
                        <Link to={"/post/recommend/light-purple"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"LightPurple"}/>
                        </S.PostBox>
                    </S.LightPurpleBox>

                    <S.SkyBlueBox>
                        <S.ColorName>SKY BLUE</S.ColorName>
                        <Link to={"/post/recommend/sky-blue"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"SkyBlue"}/>
                        </S.PostBox>
                    </S.SkyBlueBox>

                    <S.SageGreenBox>
                        <S.ColorName>SAGE GREEN</S.ColorName>
                        <Link to={"/post/recommend/sage-green"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"SageGreen"}/>
                        </S.PostBox>
                    </S.SageGreenBox>

                    <S.IceBlueBox>
                        <S.ColorName>ICE BLUE</S.ColorName>
                        <Link to={"/post/recommend/ice-blue"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"IceBlue"}/>
                        </S.PostBox>
                    </S.IceBlueBox>

                    <S.DustySilverBox>
                        <S.ColorName>DUSTY SILVER</S.ColorName>
                        <Link to={"/post/recommend/sky-blue"}><S.AllToGo>전체보기</S.AllToGo></Link>
                        <S.PostBox>
                            <CommunityComponent postColor={"DustySilver"}/>
                        </S.PostBox>
                    </S.DustySilverBox>

                </S.ColorBox>
            </S.Title>    
        </div>
    );
};

export default CommunityMain;





