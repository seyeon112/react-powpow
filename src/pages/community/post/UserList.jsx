import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommunityContext } from "../../../context/communityContext";
import FollowBtn from "./FollowBtn";

const UserList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [isFollowerPopupOpen, setIsFollowerPopupOpen] = useState(false);
  const [isFollowingPopupOpen, setIsFollowingPopupOpen] = useState(false);
  const [activePostId, setActivePostId] = useState(null); 
  
  const localJwtToken = localStorage.getItem("jwtToken");
  const { communityState } = useContext(CommunityContext);
  const { communites } = communityState;
  const memberId = currentUser.id;
  const [isUpdate, setIsUpdate] = useState(false)
  const [posts, setPosts] = useState([]);

  // 로그인 상태 확인
  useEffect(() => {
    if (!localJwtToken) {
      alert("로그인 후 이용해 주세요.");
      navigate("/login");
    }
  }, [localJwtToken, navigate]);

  // 팔로워와 팔로잉 데이터를 가져오는 함수들
  const fetchFollowerData = async () => {
    try {
      const followersResponse = await fetch(
        `http://localhost:10000/follows/followers/${memberId}`
      );
      if (followersResponse.ok) {
        const followersData = await followersResponse.json();
        setFollowersList(followersData);
        setFollowersCount(followersData.length);
      }
    } catch (error) {
      console.error("팔로우 데이터 가져오기 실패", error);
    }
  };

  const fetchFollowingData = async () => {
    try {
      const followingResponse = await fetch(
        `http://localhost:10000/follows/following/${memberId}`
      );
      if (followingResponse.ok) {
        const followingData = await followingResponse.json();
        setFollowingCount(followingData.length);
        setFollowingList(followingData);
      }
    } catch (error) {
      console.error("팔로우 데이터 가져오기 실패", error);
    }
  };

  useEffect(() => {
    fetchFollowerData();
    fetchFollowingData();
  }, [memberId]);

  // 팔로워 팝업 열기
  const openFollowerPopup = () => {
    setIsFollowerPopupOpen(true);
    setIsFollowingPopupOpen(false);
  };

  // 팔로잉 팝업 열기
  const openFollowingPopup = () => {
    setIsFollowingPopupOpen(true);
    setIsFollowerPopupOpen(false);
  };

  // 팝업 닫기
  const closePopup = () => {
    setIsFollowerPopupOpen(false);
    setIsFollowingPopupOpen(false);
  };

  // 팔로우 버튼 클릭 시 처리
  const handleFollowClick = async (targetUserId) => {
    try {
      const response = await fetch(
        `http://localhost:10000/follows/${targetUserId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localJwtToken}`,
          },
          body: JSON.stringify({ followerId: memberId }),
        }
      );
      if (response.ok) {
        fetchFollowerData();
        fetchFollowingData();
      } else {
        console.error("팔로우 처리 실패");
      }
    } catch (error) {
      console.error("팔로우 요청 실패", error);
    }
  };

  // 팔로우 취소 버튼 클릭 시 처리

  const handleUnfollowClick = async (targetUserId) => {
    try {
      const response = await fetch(`http://localhost:10000/follows/cancel`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localJwtToken}`,
        },
        body: JSON.stringify({
          followerMemberId: Number(currentUser.id),
          followingMemberId: Number(targetUserId),
        }),
      });

      if (response.ok) {
        console.log("팔로우 취소 성공");
        setFollowersList(followersList.filter((user) => user.id !== targetUserId));
        setFollowersCount(followersList.length - 1);
        setIsUpdate(!isUpdate)
      } else {
        console.error("팔로우 취소 실패");
      }
    } catch (error) {
      console.error("팔로우 취소 요청 실패", error);
    }
  };

  // 게시물 팝업 열기/닫기
  const togglePopup = (postId) => {
    if (activePostId === postId) {
      setActivePostId(null); // 팝업 닫기
    } else {
      setActivePostId(postId); // 팝업 열기
    }
  };

  const getDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:10000/posts/post/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("삭제 실패");
      }
      setPosts(posts.filter(post => post.id !== id)); 
      alert("게시물이 삭제되었습니다.");
    } catch (error) {
      console.error(error.message);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };
  
  return (
    <div>
      <S.UserCommunity>
        <S.MyProfileCardWapper>
          <S.MyProfileCard>
            <div className="MYProfile-img-wrapper">
              <S.MyProfileImage>
                <S.ProfileImage>
                    {/* 프로필 이미지 렌더링 */}
                    <img
                        src={
                            currentUser.memberImage ||
                            currentUser.memberFilePath && currentUser.memberFileName
                                ? `http://localhost:10000/member/display?fileName=${currentUser.memberFilePath}/${currentUser.memberFileName}`
                                : `${process.env.PUBLIC_URL}/assets/images/default-profile-image.jpg`
                        }
                        alt="프로필 사진"
                    />
                    <p>{currentUser.memberNickname}</p>
                </S.ProfileImage>
              </S.MyProfileImage>
            </div>
          </S.MyProfileCard>
          <S.MyProfilelineStyle />
          <S.ButtonCenter>
            <FollowBtn targetUserId={currentUser.id} />
          </S.ButtonCenter>
          <S.MyprofileCardInformation>
            <S.MyFollwer>
              <button>게시물 {communites.slice(0, 8).length}</button>
              <button type="button" onClick={openFollowerPopup}>
                팔로워 {followersCount}
              </button>
              <button type="button" onClick={openFollowingPopup}>
                팔로잉 {followingCount}
              </button>
            </S.MyFollwer>
          </S.MyprofileCardInformation>
        </S.MyProfileCardWapper>
        <S.MyPost>
          <S.Title>
            <p>My 게시물</p>
          </S.Title>
          <S.MyPostList>
            {communites.slice(0, 8).map(({ id, imageName1 }, index) => (
              <S.MyPostItem key={index} style={{ position: "relative" }}>
                <S.DotButton onClick={() => togglePopup(id)}>
                  <button>
                    <img
                      src="/assets/images/community/white.jpg"
                      alt="삼점메뉴"
                    />
                  </button>
                </S.DotButton>
                {activePostId === id && (
                  <S.PopupBtn>
                    <button type="button" onClick={() => getDelete(id)}> 삭제하기 </button>
                  </S.PopupBtn>
                )}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
                  alt="게시물 이미지"
                  style={{
                    width: "190px",
                    height: "190px",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                  onClick={() => navigate(`/post/read/${id}`)}
                />
              </S.MyPostItem>
            ))}
          </S.MyPostList>
        </S.MyPost>
      </S.UserCommunity>

      {/* 팔로워 팝업 */}
      {isFollowerPopupOpen && (
        <S.PopupAreaFollowing>
          <S.PopupFollowingClose
            src="/assets/images/community/cancel.png"
            alt="팝업 닫기"
            onClick={closePopup}
          />
          <div className="following-popup">
            <S.MenuFollowing>
              <p>내 팔로워</p>
            </S.MenuFollowing>
            <S.myFollowingList>
              <ul>
                {followersList.map((user) => (
                  <li key={user.id}>
                    <S.Following1>
                      <S.PimageWarpper>
                        <img
                          src="/assets/images/community/userprofile.png"
                          alt="프로필 사진"
                        />
                        <p>{user.memberNickname}</p>
                      </S.PimageWarpper>
                      <button
                        className="following-button"
                        onClick={() => handleUnfollowClick(user.id)}
                      >
                        취소
                      </button>
                    </S.Following1>
                  </li>
                ))}
              </ul>
            </S.myFollowingList>
          </div>
        </S.PopupAreaFollowing>
      )}

      {/* 팔로잉 팝업 */}
      {isFollowingPopupOpen && (
        <S.PopupAreaFollowing>
          <S.PopupFollowingClose
            src="/assets/images/community/cancel.png"
            alt="팝업 닫기"
            onClick={closePopup}
          />
          <div className="following-popup">
            <S.MenuFollowing>
              <p>내가 팔로우한 사람들</p>
            </S.MenuFollowing>
            <S.myFollowingList>
              <ul>
                {followingList.map((user) => (
                  <li key={user.id}>
                    <S.Following1>
                      <S.PimageWarpper>
                        <img
                          src="/assets/images/community/userprofile.png"
                          alt="프로필 사진"
                        />
                        <p>{user.memberNickname}</p>
                      </S.PimageWarpper>
                      <button
                        className="following-button"
                        onClick={() => handleFollowClick(user.id)}
                      >
                        팔로잉
                      </button>
                    </S.Following1>
                  </li>
                ))}
              </ul>
            </S.myFollowingList>
          </div>
        </S.PopupAreaFollowing>
      )}
    </div>
  );
};

export default UserList;
