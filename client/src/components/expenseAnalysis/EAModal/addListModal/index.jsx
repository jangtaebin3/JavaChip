import { useState } from 'react';
import './style.css';

const AddList = ({ select, onClose }) => {
  const [addCategory, setAddCategory] = useState(select); // 초기 상태
  const [addPayment, setAddPayment] = useState(""); // 결제수단 상태
  const [modalInputValue, setModalInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 입력값 처리 (서버 저장 등)
    onClose();
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault(); // ↑↓ 값 증가/감소 막기
  }
  };
  const handleChange = (e) => {
    let input = e.target.value;

    // 숫자만 남기기 (소수점, 문자, 한글, 특수문자 모두 제거)
    input = input.replace(/\D/g, "");

    // 3자리마다 콤마 추가
    const formatted = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setModalInputValue(formatted);
  };

  return (
    <div className="addModalOverlay">
      <div className="addModalContainer">
        <button onClick={onClose} className="addModalExit">X</button>
        <div className="typeButtonSubText">*사용형태 버튼을 선택해주세요.</div>
        
        <form onSubmit={handleSubmit}>
          <div className="typeButton">
            <button
              type="button"
              className={`addExpenseModal${addCategory === "소비" ? "on" : ""}`}
              onClick={() => setAddCategory(addCategory === "소비" ? "" : "소비")}
            >
              소비
            </button>
            <button
              type="button"
              className={`addImportModal${addCategory === "수입" ? "on" : ""}`}
              onClick={() => setAddCategory(addCategory === "수입" ? "" : "수입")}
            >
              수입
            </button>
          </div>
          <div className='addModalInput'>
          <div className="addModalPrice">
            <div className="addModalPriceText">금액</div>
            <input className="addModalPriceInput" value={modalInputValue} onChange={handleChange} onKeyDown={handleKeyDown} type='text'placeholder="금액을 입력해주세요." />
          </div>

          <div className="addModalCategory">
            <div className="addModalCategoryText">카테고리</div>
            <input className="addModalCategoryInput" placeholder="카테고리" />
          </div>
          </div>
          <div className="addModalPayment">
            <div className="addModalPaymentText">결제수단</div>
            <div className="addModalPaymentSubText">*결제수단 버튼을 선택해주세요.</div>
            <div className="addModalPaymentButton">
              <button type="button" className={`paymentCreditCard${addPayment === "신용카드" ? "on" : ""}`} onClick={() => setAddPayment("신용카드")}>신용카드</button>
              <button type="button" className={`paymentCash${addPayment === "현금" ? "on" : ""}`} onClick={() => setAddPayment("현금")}>현금</button>
              <button type="button" className={`paymentEtc${addPayment === "기타" ? "on" : ""}`} onClick={() => setAddPayment("기타")}>기타</button>
            </div>
          </div>

          <div className="addModalSubmit">
            <input type="submit" className="modalSubmitButton" value="완료" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddList;