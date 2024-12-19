import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaySuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [responseData, setResponseData] = useState(null);
  
  console.log(responseData);

  useEffect(() => {
    async function confirm() {
      const requestData = {
        orderId: searchParams.get("orderId"),
        amount: searchParams.get("amount"),
        paymentKey: searchParams.get("paymentKey"),
      };

      const response = await fetch("http://localhost:10000/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        throw { message: json.message, code: json.code };
      }

      return json;
    }

    confirm()
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        // navigate(`/pay/failed?code=${error.code}&message=${error.message}`);
      });
  }, [searchParams]);
  
  return (
    <div>
      <h1>결제가 성공적으로 완료되었습니다!</h1>
      <h2>주문번호 : {searchParams.get("orderId")}</h2>
      <h2>주문가격 : {searchParams.get("amount")}</h2>
    </div>
  );
};

export default PaySuccess;