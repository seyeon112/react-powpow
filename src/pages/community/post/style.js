import styled from "styled-components";

const S = {}

// 상단 공통 레이아웃 버튼 
S.LayoutBox = styled.div`
    display:flex;
    flex-direction: column;
    width:1196px;
    margin: 0 auto;
    margin-bottom: 300px;
`

S.InfiniteScrollContainer = styled.div`
  & .infinite-scroll-component {
    overflow: hidden !important;
  }
`

S.EndMessage = styled.p`
  margin-top : 200px;
  text-align: center;
`

S.AllPostWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction: row;
    gap:24px;
    margin-top: 29px;
    flex-wrap :wrap ;

    & .heart {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 14px;
      right: 14px;
    }
`

S.LayoutButton = styled.div`
  .orange{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .orange{
    background-color: #FD820B;
  }

  .gold{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .gold{
    background-color: #FFDA3A;
  }

  .gradation{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .gradation{
    background-image:linear-gradient(0,  #C9B6E4, #FFDD88);
  }

  .lightPurple{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }

  .active .lightPurple{
    background-color: #A990DD;
  }

  .skyBlue{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .skyBlue{
    background-color: #1EA5FC;
  }

  .dageGreen{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .dageGreen{
    background-color: #91CEC2;
  }

  .iceBlue{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .iceBlue{
    background-color: #87B9E7;
  }

  .dustySilver{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
  }
  .active .dustySilver{
    background-image:linear-gradient(0,  #788991, #C8D9E1);
  }

  .all{
    border-radius:50%;
    border: none;
    background-color: #D9D9D9;
    width:30px;
    height: 30px;
    color: #ffffff;
    display: flex;
    align-items : center;
  }

  
  .active .all{
    background-color: #113f8a;
  }

  .button{
    display:flex;
    flex-direction: row;
    gap:16px;
    margin-top: 120px;
  }
`;

S.ProfileImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
        display: flex;
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin-bottom: 25px;
    }
    & > p {
      display: flex;
      margin-bottom: 38px;
      font-size: 20px;
      font-weight: 700;
    }
`;



// 각각 리스트로 구현되는 이미지
S.Profile = styled.img`
  width:40px;
  height:40px;
  margin-right: 10px;
`
S.NickName = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -3%;
  font-weight: bold;
  width: 100%;
`

S.ColorTitle = styled.p`
   font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    margin-top: 44px;
`

S.PostImage = styled.img`
  width:220px;
  height:300px;
  border-radius: 20px;
`;

S.CommunityPost = styled.div`
  position: relative;
  
  .like-icon{
    position: absolute;
    right: 20px;
    top : 20px;
    width: 20px;
    height:20px;
  }
`;

S.PropileBox = styled.div`
  display:flex;
  flex-direction: row;
  width: 220px;
  align-items:center;
  margin-top: 5px;

  & img {
    width: 100%;
  }
`

  S.NickName = styled.div`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -3%;
    font-weight: bold;
    width: 100%;
  `
  S.ProfileBox = styled.div`
    display:flex;
    flex-direction: row;
    width: 586px;
    align-items:center;
    margin-bottom: 5px;
  `
  S.Profile = styled.div`
    width:40px;
    height:40px;
    margin-right: 10px;
  `
  S.MyProfile = styled.div`
    width:44px;
    height:44px;
    margin-right: 10px;
  `
//   // 팔로우 버튼튼
// S.FollowBtn = styled.div`
// & button {
//   border-radius: 20px;
//   width:65px;
//   height:30px;
//   background-color:#113F8A;
//   border:none;
// }
// & p {
//   font-size: 12px;
//   line-height: 18px;
//   color: #ffffff;
//   font-weight: bold;
// }
//   display:flex;
//   width:582px;
//   justify-content: right;
//   margin-top: 9px;
// `
// // 팔로잉 버튼
// S.FollowingBtn = styled.div`
// & button {
//   border-radius: 20px;
//   width:65px;
//   height:30px;
//   background-color:#ffffff;
//   border:solid 1px #828282;
// }
//   display:flex;
//   width:582px;
//   justify-content: right;
//   margin-top: 9px;

//   & p {
//   font-size: 12px;
//   line-height: 18px;
//   color: #828282;
//   font-weight: bold;
// }
// `

S.Follow = styled.button`
  width: 65px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ isFollowing }) => (isFollowing ? '#113F8A' : '#828282')};
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


// 게시물 제목
S.PostTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
`
// 게시물 내용용
S.PostContent = styled.div`
  margin-top: 5px;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`

// 게시물 전체 박스
S.MyPostBox = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  width:586px;

 & .mySwiper {
  width: 586px;
  height:586px;
  border-radius:20px;
 }
`

S.Scroll = styled.div`
  position: relative;
  height: 550px;
  overflow-y: auto;

  /* 모든 브라우저에서 스크롤바 숨기기 */
  -ms-overflow-style: none; 
  scrollbar-width: none; 

  &::-webkit-scrollbar {
    display: none; 
  }
`;

S.MyPostPage = styled.div`
  margin-top: 152px;
`

S.PostUnder = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
    
`
S.DotBtn = styled.div`
  & button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`
S.LikeNumber = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -3%;
  font-weight: bold;
  width: 100%;
  margin-left: 10px;
`
S.MyPostUnderBox = styled.div`
  width:586px;
  padding: 19px 5px;
`

S.Comment = styled.div`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -3%;
  font-weight: bold;
`

S.CommentNumber = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-bottom: 5px;
  width:559px;
  justify-content:left;
  gap:10px;
`

S.InputContainer = styled.div`
  position: relative; 
  width: 510px;
  & input {
    border-radius: 20px;
    border-style: none;
    border: solid 1px #828282;
    width:510px;
    height:56px;
    padding: 19px 59px 19px 26px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -3%;
    color:#828282;
    outline:none;
    margin-left: 10px;
  }
  & button {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #113F8A;
    font-size: 12px;
    font-weight: bold;
    position: absolute; 
    right: 15px; 
    top: 19px;
  }

`
S.MyComment = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
`
S.CommentBox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`
S.CommentText = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`
S.CommentDiv = styled.div`
  width: 561px;

`
S.MyPostPageBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`
S.BestPostBox = styled.div`
position: relative;
  .like-icon{
    position: absolute;
    right: 20px;
    top : 20px;
    width: 20px;
    height:20px;
  }
`
S.BestText = styled.div`
  margin-top: 18px;
  font-size: 24px;
  line-height: 36px;
  font-weight:bold;
`
/* postWrite */

S.MainImageDumy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 366px;
  height: 345px;
  border-radius: 20px;
  background-color: #d9d9d9;
  background-size: cover;
  cursor: pointer;
  text-align: center;
  margin-bottom: 24px;
`
S.PostContents = styled.div`
  display: flex;
  justify-content: center;
  gap: 19px;
  width: 900px;
`


S.SubImagesWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

S.SubImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: #d9d9d9;
`
S.WriterBox = styled.div`
  width: 457px;
  height: 429px;
  border-radius: 20px;
  border: solid 1px #828282;
  display: flex;
  justify-content: center;
  align-items: center;
`
S.Textarea = styled.textarea`
  padding: 26px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background-color: transparent;
  font-size: 17px;
  line-height: 22px;
  color: #818181;
  outline: none;
  &::placeholder{
  color: #818181; 
  font-size: 14px; 
  line-height: 22px; 
  text-align: left; 
  }
`
S.UploadButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 20px;
  color: #FFFFFF;
  background-color: #113F8A;
  cursor: pointer;
  margin: 0 0 33px auto;
`

S.PostWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 139px;
`
/* UserList */

S.UserCommunity = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 166px;
`

S.MyProfileCardWapper = styled.div`
  width: 270px;
  height: 430px;
  box-sizing: border-box;
  border: solid 1px #828282;
  border-radius: 20px;
  box-shadow: 0 4px 4px #C0C0C0;
`
S.MyProfileCard = styled.div`
  height: 244px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

S.MyProfileImage = styled.div`
  width: 120px;
  height: 154px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  > img{
    width: 120px;
    height: 120px;
  }
  > p{
  font-weight: 600;
  margin-top: 10px;
  }
`

S.MyProfilelineStyle = styled.div`
  width: 206px;
  display: flex;
  margin-inline: auto;
  margin-top: -15px;
  margin-bottom: 29px;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #676767;
`

S.MyProfileButton = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #000000;
  width: 115px;
  height: 43px;
  border-radius: 20px;
  font-size: 16px;
`
S.ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

S.MyprofileCardInformation = styled.div`
  margin-top: 28px;
`
S.MyFollwer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
>button {
  border: none;
  height: 22px;
  background: none;
  cursor: pointer;
  color: #828282;
}
`
S.MyPost = styled.div`
  display: flex;
  margin-top: 33px;
  flex-direction: column;
  margin-left: 59px;
`
S.MyPostItem = styled.div`
  max-width: 190px;
  display: flex;
`

S.MyPostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 820px;
  height: 445px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`

S.MyPosts = styled.ul`
  list-style: none;
  width: 820px;
  height: 445px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  >img{
    width: 190px;
    height: 190px;
  }
`
S.Title = styled.div`
  margin-bottom: 17px;
`

// 팝업 외부 스타일
S.PopupAreaFollowing = styled.div`
  width: 400px;
  height: 534px;
  border-radius: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  position: relative;
  bottom: 473px;
  right: 54px;
  margin: 0 auto;
  background-color: #FFFFFF;
  overflow-y: auto; /* 세로 스크롤 추가 */
  overflow-x: hidden; /* 가로 스크롤 제거 */
  /* padding: 10px; 여백 추가 (원하는 경우) */
`;

// 닫기 버튼
S.PopupFollowingClose = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 13px;
  right: 10px;
  cursor: pointer; /* 클릭 가능한 느낌 */
`;

// 메뉴 바 스타일
S.MenuFollowing = styled.div`
  width: 100%;
  height: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #d9d9d9;
  border: solid 1px #888888;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 팔로잉 리스트 스타일
S.myFollowingList = styled.div`
  width: 100%;
  height: 453px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-sizing: border-box;
  overflow-y: auto; /* 리스트 영역 세로 스크롤 */
  padding: 25px;
  border: solid 1px #888888;
  > ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// 개별 팔로잉 항목 스타일
S.Following1 = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  gap: 8px;
  align-items: center;
  > img {
    width: 40px;
  }
  > p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 30px;
    width: 63px;
    border: solid 1px #828282;
    color: #828282;
    cursor: pointer;
    background-color: #FFFFFF;
  }
`;









S.PimageWarpper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    margin-right: 170px;
  >img{
    width: 40px;
    height: 40px;
  }
`
S.DotButton = styled.div`
    position: absolute;
    top: 8px;
    left: 170px;
    z-index: 100;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 5px;
    height: 16px;
  }
`;

S.PopupBtn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5px;
  right: 15px;
  z-index: 100;
`

S.PoputBtnType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

    &:first-child {width: 60px;
      height: 30px;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      background-color: white;
    }
    &:nth-child(3) {
        width: 60px;
        height: 30px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: white;
    }

    & p{
      color: red;
      font-size: 12px;
    }
`
S.BtnLine = styled.div`
    border: solid 1px rgba(0, 0, 0, 0.2);
`

S.TagColorImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 427px;
  border-radius: 20px;
  background-color: #d9d9d9;
  background-size: cover;
  cursor: pointer;
  text-align: center;
`

S.TagWrapper = styled.div`
  margin-bottom: 20px;
`;

S.TagInputWrapper = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

S.TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

S.TagItem = styled.div`
  padding: 8px 12px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 16px;
  }
`;




export default S;