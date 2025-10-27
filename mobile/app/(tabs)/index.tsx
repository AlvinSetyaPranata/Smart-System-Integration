import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#4A90E2',
  backgroundGradientTo: '#357ABD',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

export default function HomeScreen() {
  // Sample data for Line Chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // Sample data for Bar Chart
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [50, 80, 60, 90, 70, 85, 95],
      },
    ],
  };

  // Sample data for Pie Chart
  const pieData = [
    {
      name: 'Product A',
      population: 35,
      color: '#F44336',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Product B',
      population: 28,
      color: '#2196F3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Product C',
      population: 22,
      color: '#4CAF50',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Product D',
      population: 15,
      color: '#FFC107',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Dashboard</ThemedText>
        <ThemedText>Welcome back! Here are your statistics.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.chartContainer}>
        <ThemedText type="subtitle" style={styles.chartTitle}>
          Monthly Sales Trend
        </ThemedText>
        <LineChart
          data={lineData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </ThemedView>

      <ThemedView style={styles.chartContainer}>
        <ThemedText type="subtitle" style={styles.chartTitle}>
          Weekly Activity
        </ThemedText>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
          yAxisLabel=""
          yAxisSuffix=""
        />
      </ThemedView>

      <ThemedView style={styles.chartContainer}>
        <ThemedText type="subtitle" style={styles.chartTitle}>
          Product Distribution
        </ThemedText>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          style={styles.chart}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  chartContainer: {
    padding: 20,
    marginVertical: 10,
  },
  chartTitle: {
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
