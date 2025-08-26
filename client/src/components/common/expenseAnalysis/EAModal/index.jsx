import './style.css'
import AddList from './addListModal/index.jsx'
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



const EAModal=({select,modalExpenseList,modalImportList,openModal, onClose,onChange})=>{
    console.log("Rendering EAModal");

    const totalExpense = (modalExpenseList || []).reduce((acc, [_, amount]) => acc + amount, 0);
    const totalImport = (modalImportList || []).reduce((acc, [_, amount]) => acc + amount, 0);
    console.log("modalPriceList 확인:", modalExpenseList);
    console.log("modalImportList 확인:", modalImportList);
    if(select==="소비"&&openModal)
    {
      return( <div className='modalOverlay'>
      <div className='modalContainer'>
          <button className='modalExit' onClick={()=>onClose()}>X</button>
          <div className='modalText'>
            <div className={select}>{select}</div>
            <div className='modalSubText'>이번 달 {select}</div>
            <div className='modalPrice'>{totalExpense.toLocaleString()}<div className='modalPriceCurrency'>원</div></div>
          </div>
          <div className="modalList">
            {getModalList(modalExpenseList)}
          </div>
          <div className='addListBt'>
            <button className='modalAddBt'onClick={()=>{onChange('추가');}} > + </button>
          </div>
      </div>
      </div>);
      }
    else if(select==="수입"&&openModal){
      return( <div className='modalOverlay'>
      <div className='modalContainer'>
          <button className='modalExit' onClick={()=>{onClose();}}>X</button>
          <div className='modalText'>
            <div className={select}>{select}</div>
            <div className='modalSubText'>이번 달 {select}</div>
            <div className='modalPrice'>{totalImport.toLocaleString()}<div className='modalPriceCurrency'>원</div></div>
          </div>
          <div className="modalList">
            {getModalList(modalImportList)}
          </div>
          <div className='addListBt'>
            <button className='modalAddBt' onClick={()=>{onChange('추가');}}   > + </button>
          </div>
      </div>
      </div>);
    }
    else if(select==="추가"&&openModal){
      console.log(select);
      console.log(openModal);
      return(
      <AddList select={select} onClose={onClose}/>);
    }
    else{
      return null;
    }
    

}
export default EAModal;