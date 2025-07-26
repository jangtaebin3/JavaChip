import './EAModal.css'
//나중에 딕셔너리로 바꿔서 하면 될듯 dataDict["식비"]<<<<하면 24200반환


const getModalList = (exampleExpenseData = []) => {
  return exampleExpenseData.map(([category, amount], index) => (
    <div key={index} className="expenseListItem">
      <div className='modalListLeft'>
        <div className='modalListCategory'>✏️ {category}</div>
        <div className='modalDetail'><a className='showDetail' href='.'>상세 내역 보기</a></div>
      </div>
      <div className='modalListRight'>
      <div className='modalListPrice'>{amount.toLocaleString()}원</div>
      </div>
    </div>
  ));
}
    

const EAModal=({select,modalPriceList,modalImportList,openModal})=>{
    const modalName=select;
    const total = (modalPriceList || []).reduce((acc, [_, amount]) => acc + amount, 0);
    const totalImport = (modalPriceList || []).reduce((acc, [_, amount]) => acc + amount, 0);
    console.log("modalPriceList 확인:", modalPriceList);
    console.log("modalImportList 확인:", modalImportList);
    if(openModal &&select==="소비")
    {return (
        <div className='modalContainer'>
            <div className='modalText'>
              <div className={select}>{modalName}</div>
              <div className='modalSubText'>이번 달 지출</div>
              <div className='modalPrice'>{total.toLocaleString()}<div className='modalPriceCurrency'>원</div></div>
            </div>
            <div className="modalList">
              {getModalList(modalPriceList)}
            </div>
            <div className='addListBt'>
              <button className='modalAddBt'> + </button>
            </div>
        </div>
    );}
    else if(openModal&&select==="수입"){
      <div className='modalContainer'>
          <div className='modalText'>
            <div className={select}>{modalName}</div>
            <div className='modalSubText'>이번 달 수입</div>
            <div className='modalPrice'>{totalImport.toLocaleString()}<div className='modalPriceCurrency'>원</div></div>
          </div>
          <div className="modalList">
            {getModalList(modalImportList)}
          </div>
          <div className='addListBt'>
            <button className='modalAddBt'> + </button>
          </div>
      </div>
    }
    else{
      console.log("None");
    }

}
export default EAModal;