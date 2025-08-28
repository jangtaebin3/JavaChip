
//기능: 카테고리 별 금액 보여주기
//카테고리 별 인덱싱, 카테고리 별 금액 합산
//카테고리별로 한 배열에 금액을 모아야함

//여기선 그냥 내모랑 내용 출력하는거로 
//구체적인 기능은 ExpenseAnalysis.jsx에서 구현
import './style.css';

const ExpenseList = ({ exampleData }) => {
    console.log("Rendering ExpenseList");
    return (
        <div className="EAEAList">
            <div className="expenseAnalysisText">지출분석</div>
            <div className='expenseList'>
            {exampleData.map(([category, amount], index) => ( 
                <div className="EAdata">
                    <div className="indexCircle">
                        {index+1}
                    </div>
                    <div className="dataRect">
                        <div className='dataRectCategory'>{category}</div>
                        <div className='dataRectPrice' >{"-"+amount.toLocaleString()}</div>
                    </div>
                </div>
            ))} 
        </div>
        </div>
    );
}
export default ExpenseList;