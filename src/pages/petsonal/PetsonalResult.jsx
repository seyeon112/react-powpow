import React, { useContext, useEffect, useState } from "react";
import S from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { PetsonalContext } from "../../context/petsonalContext";
import ProductResult from "./ProductResult";
import CatProductResult from "./CatProductResult";
import { yellow200 } from "../../global/common";
import { ProductContext } from "../../context/productContext";

const PetsonalResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { result } = useContext(PetsonalContext);

  const { productState } = useContext(ProductContext);
  const { products } = productState;

  const [petsonalResult, setpetsonalResult] = useState([]);
  const [colorResult, setColorResult] = useState({
    imageSrc: "",
    message: [],
    boxColor: "",
    title: "",
  });

  useEffect(() => {
    const getPetsonalResult = async () => {
      const response = await fetch(
        `http://localhost:10000/petsonal/result/${id}`
      );
      if (!response.ok) return console.error(`데이터가 없습니다.`);
      const petsonalResult = await response.json();

      if (petsonalResult.id === null) {
        navigate(`/petsonal/test/${id}`);
        return alert("진행하신 테스트 결과가 없습니다.");
      } else {
        setpetsonalResult(petsonalResult);

        const color = petsonalResult.petColor;
        if (result[color]) {
          setColorResult(result[color]);
        }
      }
    };

    getPetsonalResult().catch(console.error);
  }, [id, navigate, result]);

  const {
    petName,
    petImage,
    petsonalCute,
    petsonalChic,
    petsonalCalm,
    petsonalActive,
    petsonalLazy,
    petsonalDiligent,
    petsonalCoward,
    petsonalBrave,
    petKind,
    petFilePath,
    petFileName,
  } = petsonalResult;
  const { imageSrc, message, boxColor, title } = colorResult;
  
  return (
    <div>
      <S.Frame>
        <S.ResultContainer>
          <S.ColorWrap>
            <img src={`${process.env.PUBLIC_URL}${imageSrc}`} alt="펫 컬러" />
          </S.ColorWrap>

          <S.OrangeResult>
            {message.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </S.OrangeResult>

          <S.ResultBox color={boxColor}>
            <S.PetProfile>
              <S.PetImage
                src={
                  petImage ||
                  `http://localhost:10000/my-pet/display?fileName=${petFilePath}/${petFileName}`
                }
                alt={`${petName} 이미지`}
              />
              <p>{petName}</p>
            </S.PetProfile>
            <S.RateWrap>
              <S.ResultName>{title}</S.ResultName>
              <S.PercentageContainer>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>시크</span>
                    <span>귀염</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>
                      {petsonalChic}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                    <S.Percent>
                      {petsonalCute > petsonalChic ? (
                        <S.CuteAndChicGage
                          style={{ width: `${petsonalCute}%` }}
                        ></S.CuteAndChicGage>
                      ) : (
                        <S.CuteAndChicGage
                          style={{ width: `${petsonalChic}%` }}
                        ></S.CuteAndChicGage>
                      )}
                    </S.Percent>
                    <span>
                      {petsonalCute}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>차분</span>
                    <span>발랄</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>
                      {petsonalCalm}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                    <S.Percent>
                      {petsonalActive > petsonalCalm ? (
                        <S.CalmAndActive style={{ width: `${petsonalActive}%` }}></S.CalmAndActive>
                      ) : (
                        <S.CalmAndActive style={{ width: `${petsonalCalm}%` }}></S.CalmAndActive>
                      )}
                    </S.Percent>
                    <span>
                      {petsonalActive}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>게으름</span>
                    <span>부지런함</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>
                      {petsonalLazy}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                    <S.Percent>
                      {petsonalDiligent > petsonalLazy ? (
                        <S.CalmAndActive style={{ width: `${petsonalDiligent}%` }}></S.CalmAndActive>
                      ) : (
                        <S.CalmAndActive style={{ width: `${petsonalLazy}%` }}></S.CalmAndActive>
                      )}
                    </S.Percent>
                    <span>
                      {petsonalDiligent}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                  </S.PercentageWrap>
                </S.AllRate>
                <S.AllRate>
                  <S.ResultCategory>
                    <span>겁쟁이</span>
                    <span>용감함</span>
                  </S.ResultCategory>
                  <S.PercentageWrap>
                    <span>
                      {petsonalCoward}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                    <S.Percent>
                      {petsonalBrave > petsonalCoward ? (
                        <S.CalmAndActive style={{ width: `${petsonalBrave}%`}}></S.CalmAndActive>
                      ) : (
                        <S.CalmAndActive style={{ width: `${petsonalCoward}%`}}></S.CalmAndActive>
                      )}
                    </S.Percent>
                    <span>
                      {petsonalBrave}
                      <S.Percentage>(%)</S.Percentage>
                    </span>
                  </S.PercentageWrap>
                </S.AllRate>
              </S.PercentageContainer>
            </S.RateWrap>
          </S.ResultBox>

          {/* 강아지일 때 강아지 상품 아닐때 고양이 상품 (이런 문법안되나?)*/}
          {/* {petKind === "강아지" ? <ProductResult /> : <CatProductResult />} */}
          <ProductResult products={products} petKind={petKind} />
        </S.ResultContainer>
      </S.Frame>
    </div>
  );
};

export default PetsonalResult;
