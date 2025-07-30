import {useState} from 'react'
//리스트 추가 창
const AddList=({select})=>{
  const [addCategory, setAddCategory]=useState({select})
  return(
    <div className='addModalContainer'>
      <div className="typeButton">
          <div className="typeButtonSubText">*사용형태 버튼을 선택해주세요.</div>
          <button className={`addExpenseModal${addCategory==="소비"?"on":""}`}
              onClick={addCategory==="수입"||""?setAddCategory("소비"):setAddCategory("")}>소비</button>
          <button className={`addImportModal${addCategory==="수입"?"on":""}`}
              onClick={addCategory==="소비"||""?setAddCategory("수입"):setAddCategory("")}>수입</button>
      </div>
      <div className='addModalPrice'>
          <div className="addModalPriceText">금액</div>
          <input className="addModalPriceInput" >금액을 입력해주세요.</input>
      </div>
      <div className='addModalPrice'>
          <div className="addModalCategoryText">카테고리</div>
          <input className="addModalCategoryInput">카테고리</input>
      </div>
      <div className='addModalPayment'>
          <div className="addModalPaymentText">결제수단</div>            
          <div className="addModalPaymentSubText">*결제수단 버튼을 선택해주세요.</div>
          <div className="addModalPaymentButton">
              <button className="paymentCreditCard">신용카드</button>
              <button className="paymentCash">현금</button>
              <button className="paymentEtc">기타</button>
          </div>
          <div className="addModalSubmit">
              <button className="modalSubmitButton">완료</button>
          </div>
      </div>
    </div>
);}
export default AddList;