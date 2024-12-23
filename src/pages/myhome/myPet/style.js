import styled from "styled-components";
import { h9Medium } from '../../../global/common'

const S = {}

S.PetWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  & .button-postion{
    display: flex;
    justify-content: end;
    width: 1100px;
  }
`

S.Mydog = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: center;
  gap:60px;
`
S.Petanimal = styled.h1`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2em;
  margin-left: 256px;
  height: 190px;
`
S.PetCard = styled.div`
  width: 270px;
  height: 430px;
  background-color: white;
  border: solid 1px;
  border-radius: 15px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
S.Profilepic = styled.div`
  border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
  & img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`
S.Name = styled.div`
  font-weight: bold;
	margin-bottom: 20px;
`
S.EditButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: solid 1px #888888;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  width: 96px;
  height: 32px;
`
S.Title = styled.div`
	font-weight: bold;
  margin-bottom: 432px;
`
S.PetName = styled.label`
  display: block;
  label {
  display: block;
  width: 58px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
    }

`
S.PetKind = styled.label`
  display: block;
`
S.PetBreed = styled.label`
  display: block;
`
S.PetBrith = styled.label`
  display: block;
`
S.PetBreed = styled.label`
  display: block;
`
S.PetNeuter = styled.label`
  display: block;
`
S.PetVet = styled.label`
  display: block;
`
S.InputWarp = styled.div`
  margin-top: 30px;
  margin-left: 58px;

  &input{
  border-radius: 20px;
	height: 30px;
	padding-left: 26px;
	margin-top: 20px;
  }
`
S.InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;



  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 30px;
  }
`;

S.RadioWrap = styled.div`
  display: flex;
  gap: 20px;
`

S.P = styled.p`
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
  margin-left: 2px;
`

S.InputGroup2 = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 30px;
    }
`;
S.InputGroup3 = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 30px;
    }
`;
S.InputGroup4 = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 21px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 30px;
    }
`;

S.InputGroup5 = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  margin-bottom: 23px;


  input {
  width: 285px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 30px;
    }
`

S.RadioGroup = styled.div`
  display: flex;
  margin-bottom: 21px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 267px;
  height: 32px;
  height: 30px;
`;
S.RadioGroupGender2 = styled.div`
  display: flex;
  margin-bottom: 21px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 275px;
  height: 32px;
  height: 30px;
`;

S.RadioGroupGender = styled.div`
  display: flex;
  margin-bottom: 21px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 238px;
  height: 32px;
  height: 30px;
`;
S.PetDogCat = styled.div`
  display: flex;
  gap: 20px;
  font-weight: lighter;
  justify-content: space-between;

`
S.Gap = styled.div`
  display: flex;
`

S.PetGender = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 30px;
  height: 32px;
`;
S.Kg = styled.span`
  position: absolute;
  right: 32px;
  top: 3px;
`
S.Description = styled.div`
  ${h9Medium};
`
S.Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 89px;
    height: 42px;
    background-color: #1c4da0;
    border-radius: 20px;
    color: white;
`

S.NoPetWrapper = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 200px;
	margin: 0 auto;
`
S.NoPet = styled.div`
font-size: 20px;
  align-self: center
  
`
S.NoPetButtonSubmit = styled.button`
  width: 118px;
	height: 42px;
	font-weight: bold;
	border-radius: 20px;
	background-color: #113f8a;
	color: #FFFFFF;
	margin-top: 52px;
	margin-bottom: 187px;
`


// List

S.PetCard2 = styled.div`
  width: 270px;
  height: 430px;
  background-color: white;
  border: solid 1px;
  border-radius: 15px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 406px;
  
  
  `

S.NoPetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  width: 161px;
  height: 42px;
  background-color: #1c4da0;
  border-radius: 20px;
  color: white;
  margin-top: 42px;
  margin-bottom: 55px;
  margin-left: 1244px;
  &:hover {
  background-color: #005bb5;
  }
`

S.PetList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

S.EditButton2 = styled.button`
	color: black;
	border: solid 1px #888888;
	border-radius: 20px;
	cursor: pointer;
	width: 90px;
	height: 30px;
	margin-top: 18px;

  &:hover {
    background-color: #D9D9D9;
  }
`;

S.DeleteButton = styled.button`
  background-color: #113F8A;
	color: white;
	border: solid 1px #113F8A;
	border-radius: 20px;
	cursor: pointer;
	width: 90px;
	height: 30px;
	margin-top: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;
S.GoToTestButton = styled.button`
  background-color: #FFC303;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	width: 120px;
	height: 30px;
	margin-top: 18px;

  & a{
    color: white;
  }
`
S.GoToResultButton = styled.button`
  background-color: #113F8A;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	width: 120px;
	height: 30px;
	margin-top: 18px;

  & a{
    color: white;
  }
`




export default S;