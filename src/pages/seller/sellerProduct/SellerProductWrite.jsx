import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import S from "./style";
import {useSelector} from "react-redux";

const SellerProductWrite = () => {
    const { register, handleSubmit, formState: {  isSubmitting } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const id = currentUser.id;
    
    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [subImagePreview1, setSubImagePreview1] = useState(null);
    const [subImagePreview2, setSubImagePreview2] = useState(null);
    const [subImagePreview3, setSubImagePreview3] = useState(null);

    const onSubmit = async (data) => {
        const formData = new FormData();
        const {
            productCode, deliveryCompany, deliveryFee, deliveryFeeFree, deliveryFeeKind, deliveryHow,
            deliveryPayWhen, productAnimal, productCategory, productColor, productDetail,
            productName, productPrice, productRealPrice, productSize, productStock,
            mainImage, subImage1, subImage2, subImage3
        } = data;
        formData.append("memberId", id)
        formData.append("deliveryCompany", deliveryCompany)
        formData.append("deliveryFee", deliveryFee)
        formData.append("deliveryFeeFree", deliveryFeeFree)
        formData.append("deliveryFeeKind", deliveryFeeKind)
        formData.append("deliveryHow", deliveryHow)
        formData.append("deliveryPayWhen", deliveryPayWhen)
        formData.append("productAnimal", productAnimal)
        formData.append("productCategory", productCategory)
        formData.append("productColor", productColor)
        formData.append("productDetail", productDetail)
        formData.append("productCode", productCode)
        formData.append("productName", productName)
        formData.append("productPrice", productPrice)
        formData.append("productRealPrice", productRealPrice)
        formData.append("productSize", productSize)
        formData.append("productStock", productStock)
        formData.append("uploadFile", mainImage[0])
        formData.append("uploadFile", subImage1[0])
        formData.append("uploadFile", subImage2[0])
        formData.append("uploadFile", subImage3[0])

        // 서버로 데이터 전송
        await fetch("http://localhost:10000/files/upload", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then(async (res) => {
                console.log(res)
                formData.append("uuids", res);
                await fetch("http://localhost:10000/products/write", {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res)
                        navigate("/seller")
                    })
            })
            .catch(console.error)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <S.ProductInsert>
                    <p>상품 정보 입력</p>
                    <div>
                        <S.ListWrap>
                            <S.Division>상품명</S.Division>
                            <input className="require-value" type="text"
                                   {...register("productName", {
                                       required: "상품명은 필수 입력 항목입니다.",
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품코드</S.Division>
                            <input className="require-value" type="text"
                                   {...register("productCode", {
                                       required: true,
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>소비자가</S.Division>
                            <input className="require-value" type="number" placeholder="원(원)"
                                   {...register("productRealPrice", {
                                       required: true,
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품가격</S.Division>
                            <input className="require-value" type="number" placeholder="원(원)"
                                   {...register("productPrice", {
                                       required: true,
                                   })}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>상품재고</S.Division>
                            <input className="require-value" type="text" name="productStock" placeholder="개"
                                   {...register("productStock"
                                   )}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>대분류</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio"
                                           value="dog" {...register("productAnimal")}/>
                                    <span>반려견</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio"
                                           value="cat" {...register("productAnimal")}/>
                                    <span>반려묘</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>카테고리</S.Division>
                            <select {...register("productCategory", {
                                required: true,
                            })}>
                                <option value="헬스케어">헬스케어</option>
                                <option value="사료/간식">사료/간식</option>
                                <option value="의류">의류</option>
                                <option value="장난감">장난감</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>펫스널컬러</S.Division>
                            <select name="productColor" {...register("productColor", {
                                required: true,
                            })}>
                                <option value="Orange">오렌지</option>
                                <option value="Gold">골드</option>
                                <option value="Gradation">그라데이션</option>
                                <option value="LightPurple">라이트 퍼플</option>
                                <option value="SkyBlue">스카이 블루</option>
                                <option value="SageGreen">세이지 그린</option>
                                <option value="IceBlue">아이스 블루</option>
                                <option value="DustySilver">더스티 실버</option>
                            </select>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>사이즈</S.Division>
                            <select name="productSize" {...register("productSize", {
                                required: true,
                            })}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </S.ListWrap>

                        <S.ListWrap>
                            <S.Division>상품 상세 설명</S.Division>
                            <textarea className="description require-value" type="text" name="productDetail"
                                      placeholder="제품의 상세 정보를 입력해주세요." {...register("productDetail"
                            )}>
                                </textarea>
                        </S.ListWrap>
                    </div>
                    <div className="line">
                        <hr/>
                    </div>
                    <S.ShippingWrap>
                        <p>배송정보 입력</p>
                        <S.ListWrap>
                            <S.Division>배송비 종류</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="무료" {...register("deliveryFeeKind")}/>
                                    <span>무료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="유료" {...register("deliveryFeeKind")}/>
                                    <span>유료</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryFeeKind"
                                           value="조건부 무료" {...register("deliveryFeeKind")}/>
                                    <span>조건부 무료</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송비 금액</S.Division>
                             <input name="deliveryFee" type="text" placeholder="원(원)" {...register("deliveryFee")}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>무료배송 금액</S.Division>
                            <input name="deliveryFeeFree" type="text" placeholder="원 이상 구매시 무료" {...register("deliveryFeeFree")}/>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>배송사 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow"
                                           value="일반택배배송" {...register("deliveryHow")}/>
                                    <span>일반택배배송</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryHow"
                                           value="자체배송" {...register("deliveryHow")}/>
                                    <span>자체배송</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>착불 여부 선택</S.Division>
                            <S.RatioWrap>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayWhen"
                                           value="선결제" {...register("deliveryPayWhen")}/>
                                    <span>선결제</span>
                                </S.Ratio>
                                <S.Ratio>
                                    <input type="radio" name="deliveryPayWhen"
                                           value="착불" {...register("deliveryPayWhen")}/>
                                    <span>착불</span>
                                </S.Ratio>
                            </S.RatioWrap>
                        </S.ListWrap>
                        <S.ListWrap>
                            <S.Division>택배사 선택</S.Division>
                            <S.Shipping>
                                <select {...register("deliveryCompany")}>
                                    <option value="우체국 택배">우체국 택배</option>
                                    <option value="CJ 택배">CJ 택배</option>
                                    <option value="롯데 택배">롯데 택배</option>
                                </select>
                            </S.Shipping>
                        </S.ListWrap>
                        <S.Explain>
                            <span>* 판매자가 직접 발송하는 일반택배 택배사를 선택하시면 됩니다.</span>
                            <span>*’자체배송’ 선택시, 구매자에게는 배송비 ‘무료’로 안내됩니다. </span>
                            <span>‘자체배송’ 설정 후 구매자에게 별도로 배송비를 요구하는 행위는 자제 부탁드립니다.</span>
                        </S.Explain>
                    </S.ShippingWrap>
                    <S.Line></S.Line>
                    <S.ImageWrap>
                        <S.ImageInfo>이미지정보</S.ImageInfo>
                        <S.imageContent>
                            <S.Main>
                                <S.Division>메인 이미지</S.Division>
                                <label htmlFor="mainImage" style={{cursor: 'pointer'}}>
                                    <S.MainImage>
                                        <img src={mainImagePreview || "/assets/images/seller/sub-default-plus.png"} alt="메인 이미지" />
                                    </S.MainImage>
                                </label>
                                <input
                                    id={"mainImage"}
                                    type="file"
                                    {...register("mainImage", {
                                        required: true,
                                        validate : (e) => {
                                            const file = e[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setMainImagePreview(reader.result);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }
                                    })}
                                />
                            </S.Main>
                            <S.SubWrap>
                                {[0, 1, 2].map((index) => (
                                    <S.Subs key={index}>
                                        <S.Division>서브이미지{index + 1}</S.Division>
                                        <label htmlFor={`subImage${index + 1}`} style={{cursor: 'pointer'}}>
                                            <S.SubImage>
                                                {
                                                    index === 0 ? (
                                                        <img src={subImagePreview1 || "/assets/images/seller/sub-default-plus.png"} alt="상품 이미지" />
                                                    ) : (
                                                        index === 1 ? (
                                                            <img src={subImagePreview2 || "/assets/images/seller/sub-default-plus.png"} alt="상품 이미지" />
                                                        ) : (
                                                            <img
                                                                src={subImagePreview3 || "/assets/images/seller/sub-default-plus.png"}
                                                                alt="상품 이미지"/>
                                                        )
                                                    )
                                                }
                                            </S.SubImage>
                                        </label>
                                        <input
                                            type="file"
                                            id={`subImage${index + 1}`}
                                            {...register(`subImage${index + 1}`, {
                                                validate : (e) => {
                                                    console.log("validate", e[0])
                                                    const file = e[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            if(index === 0){
                                                                setSubImagePreview1(reader.result);
                                                            }else if(index === 1){
                                                                setSubImagePreview2(reader.result);
                                                            }else{
                                                                setSubImagePreview3(reader.result);
                                                            }
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }
                                            })}
                                        />
                                    </S.Subs>
                                ))}
                            </S.SubWrap>
                        </S.imageContent>
                    </S.ImageWrap>
                    <S.ButtonWrap>
                        <button disabled={isSubmitting}>상품 등록</button>
                        <button type="button" onClick={() => navigate('/seller')}>취소</button>
                    </S.ButtonWrap>
                </S.ProductInsert>
            </form>
        </div>
    );
};

export default SellerProductWrite;