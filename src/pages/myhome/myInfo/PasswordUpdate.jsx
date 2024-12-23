import React, { useState } from "react";
import S from "./style";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
    import { Link, useNavigate } from "react-router-dom";

const PasswordUpdate = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();


    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    const onSubmit = async (data) => {
        const { currentPassword, newPassword } = data;

        try {
            const response = await fetch(
                "http://localhost:10000/member/change-password",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        memberEmail: currentUser.memberEmail, newPassword
                    }),
                }
            );

            const result = await response.json();

            if (response.ok) {
                setMessage("비밀번호가 성공적으로 변경되었습니다.");
                navigate("/password-update-complete")
            } else {
                setMessage(result.message || "비밀번호 변경에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error changing password:", error);
            setMessage("서버와의 통신에 실패했습니다.");
        }
    };

    return (
        <S.PasswordUpdateFormContainer>
            <S.PasswordUpdateForm onSubmit={handleSubmit(onSubmit)}>
                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>현재 비밀번호</p>
                        <S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="사용 중인 비밀번호를 입력해주세요."
                        {...register("currentPassword", { required: "비밀번호를 입력하세요." })}
                    />
                    {errors.currentPassword && <S.P>{errors.currentPassword.message}</S.P>}
                </S.PasswordUpdateInput>

                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>새로운 비밀번호</p>
                        <S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="새로운 비밀번호를 입력해주세요."
                        {...register("newPassword", {
                            required: "비밀번호를 입력하세요.",
                            pattern: {
                                value: passwordRegex,
                                message: "소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.",
                            },
                        })}
                    />
                    {errors.newPassword && <S.P>{errors.newPassword.message}</S.P>}
                </S.PasswordUpdateInput>

                <S.PasswordUpdateInput>
                    <S.PasswordUpdateText>
                        <p>새로운 비밀번호 확인</p>
                        <S.PasswordUpdateTextStar>*</S.PasswordUpdateTextStar>
                    </S.PasswordUpdateText>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="새로운 비밀번호를 다시 입력해주세요."
                        {...register("confirmPassword", {
                            required: "비밀번호를 다시 입력하세요.",
                            validate: (value) =>
                                value === getValues("newPassword") || "비밀번호가 일치하지 않습니다.",
                        })}
                    />
                    {errors.confirmPassword && <S.P>{errors.confirmPassword.message}</S.P>}
                </S.PasswordUpdateInput>

                <S.Mark
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL
                        }/assets/images/join/${showPassword ? "eye-on.png" : "eye-off.png"})`,
                        cursor: "pointer",
                    }}
                ></S.Mark>
                <S.PasswordUpdateButton type="submit">완료</S.PasswordUpdateButton>
                {/*alert({message && <S.Message>{message}</S.Message>})*/}
            </S.PasswordUpdateForm>
        </S.PasswordUpdateFormContainer>
    );
};

export default PasswordUpdate;
