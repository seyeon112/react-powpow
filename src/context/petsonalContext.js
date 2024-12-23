import { createContext, useState } from "react";

const PetsonalContext = createContext({
  state : { 
    survey : [],
    petColor : "",
    petsonalChic : 0,
    petsonalCute : 0,
    petsonalCalm : 0,
    petsonalActive : 0,
    petsonalLazy : 0,
    petsonalDiligent : 0,
    petsonalCoward : 0,
    petsonalBrave : 0,
  },
  action : {
    setPetColor : () => {},
    setPetsonalChic : () => {},
    setPetsonalCute : () => {},
    setPetsonalCalm : () => {},
    setPetsonalActive : () => {},
    setPetsonalLazy : () => {},
    setPetsonalDiligent : () => {},
    setPetsonalCoward : () => {},
    setPetsonalBrave : () => {}
  },
  result : {
    orange : {
      message : "",
      boxColor : "",
      image : "",
      title : ""
    }
  }
}
)

const PetsonalProvider = ({children}) => {

  const [petColor, setPetColor] = useState("");
  const [petsonalChic, setPetsonalChic] = useState(0);
  const [petsonalCute, setPetsonalCute] = useState(0);
  const [petsonalCalm, setPetsonalCalm] = useState(0);
  const [petsonalActive, setPetsonalActive] = useState(0);
  const [petsonalLazy, setPetsonalLazy] = useState(0);
  const [petsonalDiligent, setPetsonalDiligent] = useState(0);
  const [petsonalCoward, setPetsonalCoward] = useState(0);
  const [petsonalBrave, setPetsonalBrave] = useState(0);

  const survey = [
    { 
      id : 1,
      title : "Q1. 집사가 간식을 들고 오면 신나서 방방 뛰어요!",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 2,
      title : "Q2. 처음 만난 사람에게도 배를 보여주며 애교를 부려요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 3,
      title : "Q3. 새로운 장난감이 생기면 하루 종일 그것만 가지고 놀아요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 4,
      title : "Q4. 친구 강아지와 만나면 끝없이 따라다니며 놀아요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 5,
      title : "Q5. 집사가 잠자리를 준비하면 그곳에 먼저 뛰어들어요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 6,
      title : "Q6. 밥 시간이 되면 집사 옆에서 꼬리를 흔들며 재촉해요.",
      type : "petsonalCute",
      group : 1
    },
    { 
      id : 7,
      title : "Q7. 간식을 받으면 신나서 간식 자리까지 달려가요!",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 8,
      title : "Q8. 집사가 없으면 여기저기 돌아다니며 집안을 확인해요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 9,
      title : "Q9. 새로운 물건이 보이면 바로 다가가 확인해요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 10,
      title : "Q10. 친구들과 끝없이 놀고 싶어해요. ",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 11,
      title : "Q11. 자리에 눕자마자 바로 꿀잠을 자요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 12,
      title : "Q12. 낯선 환경에서도 여기저기 뛰어다니며 구경해요.",
      type : "petsonalActive",
      group : 2
    },
    { 
      id : 13,
      title : "Q13. 잠이 많이 없고 잘 누워있지 않아요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 14,
      title : "Q14. 산책을 가자고 먼저 조르는 편이에요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 15,
      title : "Q15. 놀이에 적극적으로 참여해요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 16,
      title : "Q16. 야외를 나가면 1시간 이상 걷는 편이에요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 17,
      title : "Q17. 하루를 일찍 시작하는 편이에요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 18,
      title : "Q18. 하루종일 돌아다녀요.",
      type : "petsonalDiligent",
      group : 3
    },
    { 
      id : 19,
      title : "Q19. 낯선 사람을 보아도 기가 죽지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 20,
      title : "Q20. 새로운 장소에 가도 숨거나 피하지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 21,
      title : "Q21. 겁이 많이 없어 친구 사귀기가 어렵지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 22,
      title : "Q22. 집의 구석이 아니라 한 가운데로 걸어다녀요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 23,
      title : "Q23. 익숙하지 않은 사람이 만지려고 해도 도망가지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
    { 
      id : 24,
      title : "Q24. 큰 소리에도 잘 놀라지 않아요.",
      type : "petsonalBrave",
      group : 4
    },
  ]

  const value = {
    state : { 
      survey : survey,
      petColor : petColor,
      petsonalChic : petsonalChic,
      petsonalCute : petsonalCute,
      petsonalCalm : petsonalCalm,
      petsonalActive : petsonalActive,
      petsonalLazy : petsonalLazy,
      petsonalDiligent : petsonalDiligent,
      petsonalCoward : petsonalCoward,
      petsonalBrave : petsonalBrave,
    },
    action : {
      setPetColor : setPetColor,
      setPetsonalChic : setPetsonalChic,
      setPetsonalCute : setPetsonalCute,
      setPetsonalCalm : setPetsonalCalm,
      setPetsonalActive : setPetsonalActive,
      setPetsonalLazy : setPetsonalLazy,
      setPetsonalDiligent : setPetsonalDiligent,
      setPetsonalCoward : setPetsonalCoward,
      setPetsonalBrave : setPetsonalBrave,
    },
    result : {
      Orange : {
        message : ["신이 많고 재밌는 성격이에요", "자유분방하고, 자신감이 넘치며 주변 사람들을 웃게 만들어요.", "에너지가 넘치고, 정이 많아 사람들과 쉽게 어울려요.", "혼자 있는 것보다는 다른 사람들이랑 함께 있으면서 사랑을 베푸는 것을 더 좋아해요."],
        boxColor : "#FD820B",
        imageSrc : "/assets/images/petsonal/orange-result.jpg",
        title : "천방지축 귀염둥이"
      },
      Gold : {
        message : ["골드색은 발랄하고 부지런하며 용감한 성격을 가진 색깔입니다.", "흥이 많고 재밌는 성격으로 언제나 주변을 즐겁게 만듭니다. ", "흥이 많고 재밌는 성격으로 언제나 주변을 즐겁게 만듭니다.", "어려운 상황에서도 두려움 없이 나서는 용맹함을 가지고 있습니다."],
        boxColor : "#FFDA3A",
        imageSrc : "/assets/images/petsonal/gold-result.jpg",
        title : "발랄한 부지러니"
      },
      Gradation : {
        message : ["이 반려동물은 마치 색이 서서히 변해가는 그라데이션처럼, 에너지 넘치는 순간과 여유로운 순간이 자연스럽게 어우러집니다.", "기분 좋은 일들이 있을 때 더욱 활발해지고, 누구와도 쉽게 친해져서 늘 웃음이 끊이지 않아요.", "지나치게 활동적인 것보다는 느긋하게 시간을 보내는 걸 선호해요.", "다른 강아지들이 걱정할 때도 자신만의 방식으로 상황을 해결하려는 강한 의지를 가졌어요."],
        boxColor : "linear-gradient(to bottom, rgba(255, 195, 3, 0.2) 0%, rgba(213, 185, 178, 0.2) 49%, rgba(109, 7, 255, 0.3) 100%)",
        imageSrc : "/assets/images/petsonal/gradation-result.jpg",
        title : "에너자이저 사랑둥이"
      },
      LightPurple : {
        message : ["라이트 퍼플은 발랄함과 여유로운, 그리고 약간의 소심함이 조화를 이루는 특별한 성격을 가진 반려동물을 의미합니다.", "언제나 호기심이 많고, 새로운 경험을 즐기며 주변을 생동감 있게 만드는 존재랍니다.", "긴 낮잠과 여유로운 시간을 즐기며, 바쁜 일상 속에서 잠깐의 휴식이 가장 큰 행복이에요.", "낯선 사람이나 큰 소리에는 조금 두려워하며, 익숙한 사람과 편안한 공간에서만 편안함을 느껴요."],
        boxColor : "#A990DD",
        imageSrc : "/assets/images/petsonal/ligth-purple-result.jpg",
        title : "호기심쟁이 탐험가"
      },
      SkyBlue : {
        message : ["스카이 블루는 편안하고 여유로운 성격을 나타내며, 차분하고 부드러운 특징을 지닌 색이에요.", "때로는 겁을 먹고 조심스러워하는 면도 있지만, 전체적으로 순하고 온화한 느낌을 전달합니다.", "이 색은 스트레스 없이 평온하게 지낼 수 있는 반려동물의 성격을 잘 표현합니다.", "조용하면서도 세심하게 행동하는 반려동물로, 주인에게는 큰 위안이자 보호를 주는 존재입니다."],
        boxColor : "#1EA5FC",
        imageSrc : "/assets/images/petsonal/sky-blue-result.jpg" ,
        title : "여유로운 개리니"
      },
      SageGreen : {
        message : ["세이지 그린은 차분하고 부지런하며 용감한 성격을 가진 색입니다. ", "평온하고 안정적인 성격으로, 새로운 환경이나 상황에서도 침착함을 유지하며 주인과의 유대감을 깊게 쌓는 편이에요.", "용감한 성격 덕분에 위험한 상황에서도 주인을 지키기 위해 단호한 태도를 취할 수 있어요.", "이와 같은 성격은 주인에게 큰 안정감과 신뢰를 줍니다. "],
        boxColor : "#91CEC2",
        imageSrc : "/assets/images/petsonal/sage-green-result.jpg",
        title : "똥꼬발랄 사랑둥이"
      },
      IceBlue : {
        message : ["아이스 블루는 평온하고 여유로운 성격으로 대부분의 시간을 편안하게 보내며, 에너지가 넘치지 않아 느긋하게 휴식을 취하는 것을 좋아해요.", "그러나 중요한 순간이나 위급한 상황에서는 용감하게 행동하여 주인을 보호하려는 강한 의지를 보입니다.", "이 반려동물은 부드럽고 차가운 외모와는 달리, 주인에게는 큰 신뢰와 안정을 주는 존재입니다."],
        boxColor : "#87B9E7",
        imageSrc : "/assets/images/petsonal/ice-blue-result.jpg",
        title : "용맹한 쿨강아지"
      },
      DustySilver : {
        message : ["실버를 선택한 반려동물은 활동보다는 휴식을 선호하며, 편안한 환경에서 느긋하게 시간을 보내는 것을 좋아합니다.", "겁이 많은 성격으로 갑작스러운 소음이나 낯선 사람을 만나면 쉽게 놀라며 숨거나 피하려는 경향이 있습니다.", "그럼에도 불구하고 주인과 함께 있을 때는 편안함을 느끼며, 주인이 가까이 있을 때 가장 안정감을 느끼는 순한 성격을 지니고 있어요."],
        boxColor : "linear-gradient(to bottom, #C8D9E1 0%, #788991 100%)",
        imageSrc : "/assets/images/petsonal/dusty-silver-result.jpg",
        title : "차가운 겁쟁이"
      },
    }
  }

  return (
    <PetsonalContext.Provider value={value}>
      {children}
    </PetsonalContext.Provider>
  )
}


export { PetsonalProvider, PetsonalContext } 