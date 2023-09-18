import classes from "./ResultTable.module.css"
import TableRow from "./TableRow";

function ResultTable(props) {

    const yearlyData = props.yearlyData;
    const fallbackText = <p className={classes["no-result"]}>No data available</p>;
    const resultTable = <table className={classes.result}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {yearlyData.map(data =>
                <TableRow
                    key={data.year}
                    year={data.year}
                    savingsEndOfYear={data.savingsEndOfYear}
                    interestPerYear={data.yearlyInterest}
                    investedCapital={props.initialInvestment + data.yearlyContribution * data.year}
                    interestGained={data.savingsEndOfYear - props.initialInvestment -data.yearlyContribution * data.year}
                />)}
        </tbody>
    </table>;

    return (
        yearlyData.length !== 0 ? resultTable : fallbackText
    )
}

export default ResultTable;