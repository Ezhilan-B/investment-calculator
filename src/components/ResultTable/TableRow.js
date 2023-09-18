

function TableRow(props) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return(
        <tr>
            <td>{(props.year)}</td>
            <td>{formatter.format(props.savingsEndOfYear)}</td>
            <td>{formatter.format(props.interestPerYear)}</td>
            <td>{formatter.format(props.interestGained)}</td>
            <td>{formatter.format(props.investedCapital)}</td>
        </tr>
    )
}

export default TableRow;