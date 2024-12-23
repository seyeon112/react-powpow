import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "./style";

const PostWrite = () => {
  const navigate = useNavigate();
  const localJwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!localJwtToken) {
      alert("로그인 후 이용해주시길 바랍니다.");
      navigate("/login");
    }
  }, [navigate, localJwtToken]);

  const handleTagButton = () => {
    navigate("/post/tag")
  }

  return (
    <S.PostWarpper>
      {/* 컬러추가가 */}
      <S.UploadButton onClick={handleTagButton}>
        컬러 추가
      </S.UploadButton>
      <S.PostContents>
        {/* 이미지 업로드 영역 */}
        <div className="image-wrapper">
          <div className="dummy-content-wrap">
            <S.MainImageDumy>
              <label htmlFor="file-upload">
                <div className="main-img-dummy">
                  <input type="file" id="file-upload" accept="image/*" />
                  <span className="h5">
                    화면을 눌러 이미지를 추가하세요
                    <br />
                    (최대 5장까지 가능합니다)
                  </span>
                </div>
              </label>
            </S.MainImageDumy>
            <S.SubImagesWrap>
              <S.SubImg>
                <img
                  src="/assets/images/community/plus.png"
                  alt="플러스아이콘"
                />
              </S.SubImg>
              <S.SubImg></S.SubImg>
              <S.SubImg></S.SubImg>
              <S.SubImg></S.SubImg>
            </S.SubImagesWrap>
          </div>
        </div>

        {/* 글 작성 영역 */}
        <div>
          <S.WriterBox>
            <S.Textarea
              placeholder={
                "오늘 당신의 반려동물은 무엇을 했나요?\n당신이 바라보는 모습을 수백만 포포인들과 나눠보세요!"
              }
            />
          </S.WriterBox>
        </div>
      </S.PostContents>
    </S.PostWarpper>
  );
};

export default PostWrite;
