import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  let maximumExpense;
  const ChartValue = props.chartDetails.map((chartDetail) => chartDetail.value);
  maximumExpense = Math.max(...ChartValue);
  return (
    <div className="chart">
      {props.chartDetails.map((chartDetail) => (
        <ChartBar
          key={chartDetail.label}
          label={chartDetail.label}
          value={chartDetail.value}
          maxValue={maximumExpense}
        />
      ))}
    </div>
  );
}
export default Chart;
