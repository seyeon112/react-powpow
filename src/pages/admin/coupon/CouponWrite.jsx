import React, {useState} from 'react';
import S from "./style";
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const CouponWrite = () => {

const { register, handleSubmit, formState: { isSubmitting }} = useForm({ mode: 'onChange' });
const [rate, setRate] = useState(0); //  할인 상태
const [selectedRate, setSelectedRate] = useState("");
const navigate = useNavigate();

    return (
        <S.CouponListWrap>




            <S.CouponForm
                onSubmit={handleSubmit(async (data) => {
                console.log(data)
                const coupon = {
                    couponTitle : data.couponTitle,
                    couponCode : data.couponCode,
                    couponStart : data.couponStart,
                    couponEnd : data.couponEnd,
                    couponContent : data.couponContent,
                    couponQuantity : data.couponQuantity,
                    couponDiscountRate: selectedRate === "custom" ? rate : selectedRate,
                    memberId : 1,
                    productId : 1
                };

                console.log("쿠폰", coupon)
                await fetch("http://localhost:10000/coupons/write",{
                    method : "POST",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(coupon)
                })
                    .then((res) => res.json())
                    .then((res) => {
                        alert('데이터가 성공적으로 전송되었습니다!');
                        navigate(`/admin/coupon`)
                    })
                    .catch((error) => {
                        console.error('에러발생 :', error);
                        alert('데이터 전송 중 오류가 발생하였습니다.');
                    })
        })}>
                <S.CouponListTitle>
                    <S.h1>쿠폰 신규등록</S.h1>
                </S.CouponListTitle>

                <S.Container>

                    <S.Box1>
                        <S.Label htmlFor="eventTitle">쿠폰 명</S.Label>
                        <S.Input
                            id="eventTitle"
                            {...register("couponTitle")}
                            placeholder="ex) 쿠폰이벤트 기획전 -1"
                        />
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-code">쿠폰 코드</S.Label>
                        <S.Input
                            id="coupon-code"
                            {...register("couponCode")}
                            placeholder="쿠폰 번호 16자리를 입력해 주세요. '-'제외"
                            maxLength="16"
                        />
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="event-period">쿠폰 기간 (쿠폰 유효기간)</S.Label>
                        <S.DateInputWrap>
                            <S.DateInput
                                type="date"
                                id="start-date"
                                {...register("couponStart")}
                            />
                        <S.Span>~</S.Span>
                        <S.DateInput
                            type="date"
                            id="end-date"
                            {...register("couponEnd")}
                        />
                        </S.DateInputWrap>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-category">동물 카테고리</S.Label>
                        <S.CouponCategory
                        >
                            <option value="고양이">고양이</option>
                            <option value="강아지">강아지</option>
                        </S.CouponCategory>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-category">제품 카테고리</S.Label>
                        <S.CouponCategory
                        >
                            <option value="장난감">장난감</option>
                            <option value="간식/사료">간식/사료</option>
                            <option value="의류">의류</option>
                            <option value="헬스케어">헬스케어</option>
                        </S.CouponCategory>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="details">상세 내용</S.Label>
                        <S.Textarea
                            id="details"
                            {...register("couponContent")}
                            rows="4"
                            placeholder="내용을 입력해주세요. (500자 이내)"
                            maxLength="500"
                        >
                        </S.Textarea>
                    </S.Box1>

                    <S.Box1>
                        <S.Label htmlFor="coupon-quantity">쿠폰 수량제한</S.Label>
                        <S.Input
                            type="number"
                            id="coupon-quantity"
                            {...register("couponQuantity")}
                            placeholder="ex) 1000"
                            min="1"
                        />
                    </S.Box1>

                    <S.DiscountType>
                        <S.Label name="coupon-quantity">쿠폰 할인율</S.Label>
                        <S.Box3>
                            <S.Box2>
                                <S.LabelRadio><input
                                    required={true}
                                    type="radio"
                                    {...register("couponDiscountRate")}
                                    onChange={() => setSelectedRate("10")}
                                    checked={selectedRate === "10"}
                                /> 10%
                                </S.LabelRadio>
                                <S.LabelRadio><input
                                    type="radio"
                                    {...register("couponDiscountRate")}
                                    onChange={() => setSelectedRate("20")}
                                    checked={selectedRate === "20"}
                                /> 20%
                                </S.LabelRadio>
                                <S.LabelRadioWrap>
                                    <S.LabelRadioCustom><input
                                        type="radio"
                                        value="custom"
                                        {...register("couponDiscountRate")}
                                        onChange={() => setSelectedRate("custom")}
                                        checked={selectedRate === "custom"}
                                    />직접입력
                                    </S.LabelRadioCustom>
                                    <input
                                        type="number"
                                        value={rate}
                                        placeholder="예) 7%"
                                        onChange={(e) => setRate(e.target.value)}
                                        disabled={selectedRate !== "custom"}
                                        min="0"
                                        max="100"
                                    />
                                </S.LabelRadioWrap>
                            </S.Box2>
                        </S.Box3>
                    </S.DiscountType>


                </S.Container>
                <S.CouponBtnWrap>
                <S.Box1>
                        <S.CouponWriteBtn type="submit" disabled={isSubmitting}>완료</S.CouponWriteBtn>
                    </S.Box1>
                    <S.Box1>
                        <S.CouponCancelBtn>취소</S.CouponCancelBtn>
                    </S.Box1>
                </S.CouponBtnWrap>

            </S.CouponForm>
        </S.CouponListWrap>
    );
};

export default CouponWrite;
