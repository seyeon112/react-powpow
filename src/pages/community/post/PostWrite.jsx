import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import S from "./style";

const PostWrite = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [colorTags, setColorTags] = useState([]);
  const [colorInput, setColorInput] = useState("");
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const localJwtToken = localStorage.getItem("jwtToken");

  // 로그인 체크
  useEffect(() => {
    if (!localJwtToken) {
      alert("로그인 후 이용해주시길 바랍니다.");
      navigate("/login");
    }
  }, [navigate, localJwtToken]);

  // 색상 옵션 목록
  const colorOptions = {
    Orange: "#FF7F17",
    Gold: "#EDC66E",
    Gradation:
      "linear-gradient(to bottom, rgba(255, 195, 3, 0.2) 0%, rgba(213, 185, 178, 0.2) 49%, rgba(109, 7, 255, 0.3) 100%)",
    "Light Purple": "#A990DD",
    "Sky Blue": "#1EA5FC",
    "Sage Green": "#91CEC2",
    "Ice Blue": "#87B9E7",
    "Dusty Silver":
      "linear-gradient(to bottom, #C8D9E1 0%, #788991 100%)",
  };

  // 컬러 추가 모달 열기
  const handleTagButton = () => {
    setIsColorModalOpen(true);
  };

  // 컬러 선택 처리
  const handleColorChange = (e) => {
    setColorInput(e.target.value);
  };

  // 컬러 태그 추가
  const applyColor = () => {
    try {
      const selectedColorName = colorInput;
      const selectedColorValue = colorOptions[selectedColorName];

      if (!selectedColorValue) {
        throw new Error("Invalid color selected");
      }

      setColorTags((prev) => [
        ...prev,
        { name: selectedColorName, value: selectedColorValue },
      ]);
      setColorInput("");
      setIsColorModalOpen(false);
    } catch (error) {
      alert("유효하지 않은 색상입니다. 옵션에서 색상을 선택해주세요.");
    }
  };

  // 컬러 모달 닫기
  const closeColorModal = () => {
    setIsColorModalOpen(false);
  };

  // 이미지 업로드 처리
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.slice(0, 5 - images.length);

    setImageFiles((prev) => [...prev, ...newFiles]);

    const imagePromises = newFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((base64Images) => {
      setImages((prev) => [...prev, ...base64Images]);
    });
  };

  // 컬러 태그 삭제
  const removeColorTag = (index) => {
    setColorTags((prev) => prev.filter((_, i) => i !== index));
  };

  // 이미지 삭제
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // FormData 설정
      const formData = new FormData();
      formData.append("memberId", currentUser.id);
      formData.append("postContent", content);
      
      const colorNames = colorTags.map(tag => tag.name).join(',');
      formData.append("postColor", colorNames);

      // 이미지 파일 추가
      imageFiles.forEach((file) => {
        formData.append("uploadFile", file);
      });

      // 1. 이미지 업로드
      const imageResponse = await fetch("http://localhost:10000/postFiles/upload", {
        method: "POST",
        body: formData,
      });

      if (!imageResponse.ok) {
        throw new Error('Image upload failed');
      }

      const imageData = await imageResponse.json();
      
      // 2. UUID 추가
      formData.append("uuids", imageData);

      // 3. 포스트 작성
      const postResponse = await fetch("http://localhost:10000/posts/write", {
        method: "POST",
        body: formData,
      });

      if (!postResponse.ok) {
        throw new Error('Post creation failed');
      }

      const postData = await postResponse.json();
      console.log('Post created:', postData);

      // 4. 성공 시 리디렉션
      navigate("/post/list");

    } catch (error) {
      console.error("Error details:", error);
      alert("게시글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <S.PostWarpper>
        {/* 컬러 태그 영역 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
          {colorTags.map((color, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                position: "absolute",
                left: "177px",
                top: "39px",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "15px",
                color: "white",
                background: color.value.includes("gradient") ? color.value : color.value,
              }}
            >
              {color.name}
              <button
                onClick={() => removeColorTag(index)}
                style={{
                  marginLeft: "5px",
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* 컬러 태그 유무에 따른 버튼 */}
        {colorTags.length > 0 ? (
          <S.UploadButton type="submit">업로드</S.UploadButton>
        ) : (
          <S.UploadButton type="button" onClick={handleTagButton}>
            컬러 추가
          </S.UploadButton>
        )}

        {/* 이미지 업로드 영역 */}
        <S.PostContents>
          <div className="image-wrapper">
            <S.MainImageDumy>
              <label htmlFor="file-upload">
                <div className="main-img-dummy">
                  <input
                    id="file-upload"
                    name="uploadFile"
                    type="file"
                    style={{ display: "none" }}
                    multiple
                    onChange={handleImageUpload}
                    disabled={images.length >= 5}
                    accept="image/*"
                  />
                  {images.length === 0 ? (
                    <span className="h5">
                      화면을 눌러 이미지를 추가하세요 <br />
                      (최대 5장까지 가능합니다)
                    </span>
                  ) : (
                    <img
                      src={images[0]}
                      alt="메인 이미지"
                      style={{
                        width: "366px",
                        height: "345px",
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              </label>
            </S.MainImageDumy>

            <S.SubImagesWrap>
              {images.slice(1, 5).map((image, index) => (
                <S.SubImg key={index}>
                  <img
                    src={image}
                    alt={`서브 이미지 ${index + 1}`}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    onClick={() => removeImage(index + 1)}
                    style={{
                      position: "absolute",
                      top: "505px",
                      background: "rgba(0,0,0,0.5)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </S.SubImg>
              ))}

              {images.length < 5 && (
                <S.SubImg>
                  <label htmlFor="file-upload-additional">
                    <img
                      src="/assets/images/community/plus.png"
                      alt="플러스 아이콘"
                    />
                  </label>
                  <input
                    type="file"
                    id="file-upload-additional"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </S.SubImg>
              )}
            </S.SubImagesWrap>
          </div>

          {/* 글 작성 영역 */}
          <S.WriterBox>
            <S.Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                "오늘 당신의 반려동물은 무엇을 했나요?\n" +
                "당신이 바라보는 모습을 수백만 포포인들과 나눠보세요!"
              }
            />
          </S.WriterBox>
        </S.PostContents>
      </S.PostWarpper>

      {/* 컬러 모달 */}
      {isColorModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeColorModal}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>컬러 추가</h3>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <select
                value={colorInput}
                onChange={handleColorChange}
                style={{ flex: 1, marginRight: "10px" }}
              >
                <option value="">색상을 선택하세요</option>
                {Object.keys(colorOptions).map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <button
                onClick={applyColor}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                적용
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default PostWrite;