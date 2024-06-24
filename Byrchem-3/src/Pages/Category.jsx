import React, { useState } from 'react';
import './Category.css'; // Import the CSS file for styling

const Category = () => {
  const [isLoading, setIsLoading] = useState(false);

  const amount = '10000';
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      setIsLoading(true); // Set loading state to true

      const name = "Joplang Maring";
      const email = "example@gmail.com";
      const contact = "9876543210";

      // Create order
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
          name,
          email,
          contact,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const order = await response.json();
      console.log(order);

      // Configure Razorpay options
      const options = {
        key: 'rzp_test_Ck4vzBet70U2aR', // Hardcoded Razorpay key
        amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 10000 refers to 1000000 paise
        currency,
        name: "Byrchem", // Your business name
        description: "",
        // https://drive.google.com/uc?export=view&id=1X_4HzxI5ajUZDcFOVoCc2UY-a8b4gXVA
        image:  '',
        order_id: order.id, 
        handler: async function (response) {
          try {
            const validateResponse = await fetch("http://localhost:5000/order/validate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            if (!validateResponse.ok) {
              throw new Error("Failed to validate payment");
            }

            const jsonRes = await validateResponse.json();
            console.log(jsonRes);
          } catch (error) {
            console.error(error);
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "green",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(`Payment failed:
          Code: ${response.error.code}
          Description: ${response.error.description}
          Source: ${response.error.source}
          Step: ${response.error.step}
          Reason: ${response.error.reason}
          Order ID: ${response.error.metadata.order_id}
          Payment ID: ${response.error.metadata.payment_id}`);
      });

      rzp1.open();

      setIsLoading(false); 
    } catch (error) {
      console.error(error);
      setIsLoading(false); 
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
       
        </div>
      ) : (
        <>
         <button className='donate-but' onClick={paymentHandler}><span>Donate</span></button>
        </>
       
      )}
    </div>
  );
};

export default Category;
