import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function ResultsTable({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  let totalInterest = 0;
  let totalInvestment = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          totalInterest += result.interest;
          totalInvestment += result.annualInvestment;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>
                {formatter.format(result.valueEndOfYear - result.interest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
