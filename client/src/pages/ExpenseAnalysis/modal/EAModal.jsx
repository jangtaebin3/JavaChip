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

const Modal=({select,  modalList, total})=>{
    return(
      <div className='modalContainer'>
          <div className='modalText'>
            <div className={select}>{select}</div>
            <div className='modalSubText'>이번 달 {select}</div>
            <div className='modalPrice'>{total.toLocaleString()}<div className='modalPriceCurrency'>원</div></div>
          </div>
          <div className="modalList">
            {getModalList(modalList)}
          </div>
          <div className='addListBt'>
            <button className='modalAddBt' > + </button>
          </div>
      </div>
    );
}

const EAModal=({select,modalExpenseList,modalImportList,openModal})=>{
    console.log("Rendering EAModal");

    const modalName=select;
    const totalExpense = (modalExpenseList || []).reduce((acc, [_, amount]) => acc + amount, 0);
    const totalImport = (modalImportList || []).reduce((acc, [_, amount]) => acc + amount, 0);
    console.log("modalPriceList 확인:", modalExpenseList);
    console.log("modalImportList 확인:", modalImportList);
    if(select==="소비"&&openModal)
    {
      return(<Modal select={modalName} total={totalExpense} modalList={modalExpenseList}/>);
      }
    else if(select==="수입"&&openModal){
      return(<Modal select={modalName} total={totalImport} modalList={modalImportList}/>);
    }
    else if(select==="추가"&&openModal){
    }
    else{
      return(console.log("None"));
    }

}
export default EAModal;