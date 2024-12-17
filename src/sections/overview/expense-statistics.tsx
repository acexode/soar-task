import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import Card from '@mui/material/Card';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  chart: {
    colors?: string[];
    series: {
      label: string;
      value: number;
    }[];
    options?: ChartOptions;
  };
};

export function ExpenseStatistics({chart, ...other }: Props) {


  const chartSeries = chart.series.map((item) => item.value);

  const chartColors = chart.colors ?? ['#343c6a', '#396aff', '#232323', '#fc7900'];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    labels: chart.series.map((item) => item.label),
    stroke: { width: 2 },
    dataLabels: {
      
      // textAnchor: 'middle',
      style: {
        fontSize: '12px',
        fontWeight: 'normal',
        colors: ['#fff'] // Adjust color dynamically if needed
      },
      enabled: true,
      dropShadow: { enabled: true },
    },
    tooltip: {
      y: {
        formatter: (value: number) => fNumber(value),
        title: { formatter: (seriesName: string) => `${seriesName}` },
      },
    },
    plotOptions: { pie: { donut: { labels: { show: false } } } },
    ...chart.options,
  });

  return (
    <Card sx={{ height: '360px' }} {...other}>
      <Chart
        type="pie"
        series={chartSeries}
        options={chartOptions}
        width={{ xs: 240, xl: 260 }}
        height={{ xs: 240, xl: 260 }}
        sx={{ my: 6, mx: 'auto' }}
      />
    </Card>
  );
}
