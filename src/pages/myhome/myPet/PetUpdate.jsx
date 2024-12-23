import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import S from './style';

const PetUpdate = () => {
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const { register, handleSubmit, setValue, formState: { isSubmitting } } = useForm({ mode: 'onChange' });

  const [petName, setPetName] = useState("");
  const [petKind, setPetKind] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petNeuter, setPetNeuter] = useState("");
  const [petImagePreview, setPetImagePreview] = useState(null);
  const [petFilePath, setPetFilePath] = useState('');
  const [petFileName, setPetFileName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getPet = async () => {
      try {
        const response = await fetch(`http://localhost:10000/my-pet/${id}`);
        if (!response.ok) {
          console.error('데이터가 없습니다.');
          return;
        }
        const petData = await response.json();
  
        console.log("Fetched pet data:", petData); // 데이터 확인용 콘솔 출력
  
        const formattedDate = new Date(petData.petBirth).toISOString().split('T')[0];
  
        // 초기값 설정
        setPetName(petData.petName || "");
        setPetKind(petData.petKind || "");
        setPetGender(petData.petGender || "");
        setPetBreed(petData.petBreed || "");
        setPetNeuter(petData.petNeuter || "");
        setPetFilePath(petData.petFilePath || "");
        setPetFileName(petData.petFileName || "");
  
        // form 값 설정
        setValue("petName", petData.petName);
        setValue("petKind", petData.petKind);
        setValue("petGender", petData.petGender);
        setValue("petBreed", petData.petBreed);
        setValue("petBirth", formattedDate);
        setValue("petWeight", petData.petWeight);
        setValue("petNeuter", petData.petNeuter);
        setValue("petVet", petData.petVet);
      } catch (error) {
        console.error('데이터 로드 중 오류 발생:', error);
      }
    };
    getPet();
  }, [id, setValue]);

  const handleFormSubmit = async (data) => {
    try {
      const formData = new FormData();


      const { petName, petKind, petGender, petBreed, petBirth, petWeight, petNeuter, petVet, petImage } = data;

      formData.append("memberId", currentUser.id);
      formData.append("petName", petName);
      formData.append("petKind", petKind);
      formData.append("petGender", petGender);
      formData.append("petBreed", petBreed);
      formData.append("petBirth", petBirth);
      formData.append("petVet", petVet);
      formData.append("petWeight", petWeight);
      formData.append("petNeuter", petNeuter);

      if (petImage && petImage[0]) {
        formData.append("uploadFile", petImage[0]);
      }

      const uploadResponse = await fetch("http://localhost:10000/my-pet/upload", {
        method: "POST",
        body: formData,
      });

      const updatedResponse = await uploadResponse.json();
      console.log("Update response: ", updatedResponse);

      if (updatedResponse?.uuid) {
        // uuid를 append해서 보낸다
        formData.append("uuid", updatedResponse.uuid);

      } else {
        // 아니면 그냥 보낸다. uuid없이 보낸다.
        formData.append("uuid", "");
      }


      const updateResponse = await fetch("http://localhost:10000/my-pet/petEdit", {
        method: "PUT",
        body: formData,
      });

      const updateResData = await updateResponse.json();
      console.log(data)
      alert(updateResData.message);
      navigate("/my-pet");

    } catch (error) {
      console.error('폼 제출 중 오류 발생:', error);
    }
  };

  return (
    <S.PetWapper>
      <form encType="multipart/form-data" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='button-postion'>
          <S.Button id="submit-button" disabled={isSubmitting}>
            수정 완료
          </S.Button>
        </div>
        <S.Mydog>
          <S.PetCard>
            <S.Profilepic>
              {petImagePreview ? (
                <img src={petImagePreview} alt="펫 이미지" />
              ) : (
                <img
                  src={
                    petFilePath && petFileName
                      ? `http://localhost:10000/my-pet/display?fileName=${petFilePath}/${petFileName}`
                      : "default-image-path.jpg" 
                  }
                  alt={petName ? `${petName} 이미지` : "펫 이미지"}
                />
              )}
            </S.Profilepic>
            <S.Name>{petName || "이름"}</S.Name>
            <S.EditButton as="label" htmlFor="petImageInput">
              이미지 편집
            </S.EditButton>
            <input
              id="petImageInput"
              type="file"
              style={{ display: 'none' }}
              {...register("petImage", {
                validate: (e) => {
                  const file = e[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPetImagePreview(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }
              })}
            />
          </S.PetCard>
          <S.Title as="h5">
            <S.InputGroup>
              <S.PetName>이름</S.PetName>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                {...register("petName")}
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </S.InputGroup>
            <S.RadioGroup>
              <S.PetKind>반려종류</S.PetKind>
              <S.RadioWrap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petKind", { required: true })}
                    value="반려견"
                    checked={petKind === "반려견"}
                    onChange={(e) => setPetKind(e.target.value)}
                  />
                  <label>반려견</label>
                </S.Gap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petKind", { required: true })}
                    value="반려묘"
                    checked={petKind === "반려묘"}
                    onChange={(e) => setPetKind(e.target.value)}
                  />
                  <label>반려묘</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroup>
            <S.RadioGroupGender>
              <S.PetGender>성별</S.PetGender>
              <S.RadioWrap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petGender", { required: true })}
                    value="수컷"
                    checked={petGender === "수컷"}
                    onChange={(e) => setPetGender(e.target.value)}
                  />
                  <label>수컷</label>
                </S.Gap>
                <S.Gap>
                  <input
                    type="radio"
                    {...register("petGender", { required: true })}
                    value="암컷"
                    checked={petGender === "암컷"}
                    onChange={(e) => setPetGender(e.target.value)}
                  />
                  <label>암컷</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender>
            <S.InputGroup2>
              <S.PetBreed>품종</S.PetBreed>
              <input
                type="text"
                placeholder="품종을 입력하세요"
                {...register("petBreed")}
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
              />
            </S.InputGroup2>
            <S.InputGroup3>
              <S.PetBrith>생일</S.PetBrith>
              <input type="date" {...register("petBirth", { required: "생일을 선택하세요." })} />
            </S.InputGroup3>
            <S.InputGroup4>
              <S.PetBreed>몸무게(kg)</S.PetBreed>
              <input type="number" placeholder="몸무게를 입력하세요" {...register("petWeight")} />
            </S.InputGroup4>
            <S.RadioGroupGender2>
              <S.PetNeuter>중성화</S.PetNeuter>
              <S.RadioWrap>
                <S.Gap>
                  <input
                    type="radio"
                    value="했어요"
                    {...register("petNeuter")}
                    checked={petNeuter === "했어요"}
                    onChange={(e) => setPetNeuter(e.target.value)}
                  />
                  <label>했어요</label>
                </S.Gap>
                <S.Gap>
                  <input
                    type="radio"
                    value="안했어요"
                    {...register("petNeuter")}
                    checked={petNeuter === "안했어요"}
                    onChange={(e) => setPetNeuter(e.target.value)}
                  />
                  <label>안했어요</label>
                </S.Gap>
              </S.RadioWrap>
            </S.RadioGroupGender2>
            <S.InputGroup5>
              <S.PetVet>동물병원</S.PetVet>
              <input type="text" placeholder="병원명을 입력하세요" {...register("petVet")} />
            </S.InputGroup5>
          </S.Title>
        </S.Mydog>
      </form>
    </S.PetWapper>
  );
};

export default PetUpdate;
