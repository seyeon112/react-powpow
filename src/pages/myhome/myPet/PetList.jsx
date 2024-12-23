import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const id = currentUser.id;
  
  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await fetch(`http://localhost:10000/my-pet/list/${id}`); 
        if (!response.ok) {
          console.error("데이터가 없습니다.");
          return;
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error(error);
        alert("펫 데이터를 가져오는 중 오류가 발생했습니다.");
      }finally{
        setLoading(false); 
      }
    };

    getPets();
  }, [id]);
  
  const getDelete = async (id) => {  
    try {
      const response = await fetch(`http://localhost:10000/my-pet/pet/${id}`, {  
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("삭제 실패");
      }
      setPets(pets.filter(pet => pet.id !== id));
      alert("삭제되었습니다.");
    } catch (error) {
      console.error(error.message);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };
  

  useEffect(() => {
    console.log("Pets updated:", pets);
    if (!loading && pets.length === 0) {
      navigate("/my-pet/pet-not");
    }
  }, [pets, navigate, loading]);


  return (
    <div>
      <Link to={"/my-pet/pet-write"}>
        <S.NoPetButton id="submit-button" type="button">
          +추가 등록하기
        </S.NoPetButton>
      </Link>
      <S.PetList>
        {pets.map(({ id, petName, petFileName, petFilePath, petImage, petBirth }) => (
          <S.PetCard2 key={id}>
            <S.Profilepic>
              <img
                src={ petImage || `http://localhost:10000/my-pet/display?fileName=${petFilePath}/${petFileName}`}
                alt={`${petName} 이미지`}
              />
            </S.Profilepic>
            <S.Name>{petName}</S.Name>
            <span>{petBirth}</span>
            {/* <Link to={`/my-pet/pet-update/${id}`}>
              <S.EditButton2 type="button">편집</S.EditButton2>
            </Link> */}
            <S.DeleteButton type="button" onClick={() => getDelete(id)}>삭제</S.DeleteButton>
          </S.PetCard2>
        ))}
      </S.PetList>
    </div>
  );
};

export default PetList;