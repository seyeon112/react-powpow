import React, { useContext, useState } from 'react';
import { HeartContext } from '../../../context/heartContext';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Heart는 클릭했을 때 
// 1) product인지 community인지 확인해야 하므로 type을 받는다.
// 2) 클릭한 상품의 id를 받는다.
// 3) id와 like한 상품을 비교한다.

// postid 또는 productId
const HeartBtn = ({ id, type }) => {
  // 방어 코드
  const navigate = useNavigate();
  
  // 리덕스에 로그인한 유저의 id
  const { currentUser } = useSelector((state) => state.user);
  const memberId = currentUser?.id ? currentUser?.id : 0; 
  
  const { commLikes, productLikes, isUpdate } = useContext(HeartContext).state;
  const { setIsUpdate } = useContext(HeartContext).action;

  // 좋아요인지 아닌지 비교
  const isCommunityLike = commLikes.some((comm) => Number(comm.postId) === Number(id));


  const isProductLike = productLikes.some((product) => {
    return product.productId === Number(id);  // id를 숫자로 변환하여 비교
  });

  // 타입 비교
  let fetchType = type === "community" ? "commLikes" : "productLikes";
  let fetchPath = null;
  let fetchMethodType = null;
  let fetchData = null;
  
  if(fetchType === "commLikes"){
    fetchPath = isCommunityLike ? "cancelLike" : "like";
    fetchMethodType = isCommunityLike ? "DELETE" : "POST";
    fetchData = { 
      memberId : memberId,
      postId : id
    }
  }else{
    fetchPath = isProductLike ? "cancelLike" : "like";
    fetchMethodType = isProductLike ? "DELETE" : "POST";
    fetchData = { 
      memberId : memberId,
      productId : id
    }
  }
  
  const handleLike = async (e) => {
    console.log(isCommunityLike)
    console.log(isProductLike)
    console.log("fetchType", fetchType)
    console.log("fetchMethodType", fetchMethodType)
    console.log("fetchData", fetchData)
    
    e.stopPropagation();
    e.preventDefault();
    
    if(!memberId){
      alert("로그인 해주세요.")
      navigate("/login")
      return;
    }
    await fetch(`http://localhost:10000/${fetchType}/${fetchPath}`, {
      method : `${fetchMethodType}`,
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(fetchData)
    })
    .then((res) => { setIsUpdate(!isUpdate) })
    .catch(console.error);
  };

  if(type === "community"){
    return (
      <>
        {isCommunityLike ? (
          <img
            className='heart'
            onClick={handleLike}
            src={process.env.PUBLIC_URL + "/assets/images/store/heart-click.png"}
            alt="Liked"
          />
        ) : (
          <img
             className='heart'
            onClick={handleLike}
            src={process.env.PUBLIC_URL + "/assets/images/store/heart-not-click.png"}
            alt="Not Liked"
          />
        )}
      </>
    );
  }else{
    // product
    return (
      <>
        {isProductLike ? (
          <img
            className='heart'
            onClick={handleLike}
            src={process.env.PUBLIC_URL + "/assets/images/store/heart-click.png"}
            alt="Liked"
          />
        ) : (
          <img
            className='heart'
            onClick={handleLike}
            src={process.env.PUBLIC_URL + "/assets/images/store/heart-not-click.png"}
            alt="Not Liked"
          />
        )}
      </>
    );
  }
};

export default HeartBtn;
