
//기능: 카테고리 별 금액 보여주기
//카테고리 별 인덱싱, 카테고리 별 금액 합산
//카테고리별로 한 배열에 금액을 모아야함

//여기선 그냥 내모랑 내용 출력하는거로 
//구체적인 기능은 ExpenseAnalysis.jsx에서 구현
import './expenseList.css';

const ExpenseList = ({ category, categoryIndex, sum }) => {
    return (
        <div className="EAEAList">
            <div className="expenseAnalysisText">지출분석</div>
            <div className="EAdata">
                <div className="indexCircle">
                    {categoryIndex}
                </div>
                <div className="dataRect">
                    <span className='dataRectCategory'>{category}</span>
                    <span className='dataRectPrice'>{"- "+sum.toLocaleString()}</span>
                </div>
            </div>
        </div>);
}
export default ExpenseList;