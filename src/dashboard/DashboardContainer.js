import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

import './dash.css';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

class DashboardContainer extends Component {
  generatePieChart = (chartId, chartData) => {
    let chart = am4core.create(chartId, am4charts.PieChart);
    chart.radius = am4core.percent(70);
    chart.numberFormatter.numberFormat = '#';

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);
    chart.data = chartData;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'status';

    // pieSeries.slices.template.propertyFields.fill = 'color';
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.cursorOverStyle =
      am4core.MouseCursorStyle.default;
  };
  generateData = data => {
    let chartData = [];
    let stats = data.reduce(
      (acc, todo) => {
        if (todo.status in acc) {
          acc[todo.status]++;
        }
        return acc;
      },
      { ACTIVE: 0, COMPLETED: 0 }
    );

    for (const [key, value] of Object.entries(stats)) {
      // let customColor = '#dc6788';
      // if (key === 'COMPLETED') {
      //   customColor = '#009688';
      // }
      chartData.push({
        status: key,
        count: value
        // color: customColor
      });
    }
    return chartData;
  };
  componentDidUpdate(prevProps) {
    if (prevProps.data === this.props.data || this.props.data.length === 0) {
      return;
    }
    this.renderChart(this.props.data);
  }
  componentDidMount() {
    if (this.props.data.length !== 0) {
      this.renderChart(this.props.data);
    }
  }
  renderChart(data) {
    let chartdata = this.generateData(data);
    this.generatePieChart('pie-chart', chartdata);
  }
  render() {
    return (
      <>
        <h1 className="heading">My Dashboard</h1>
        <div className="chart-container">
          <div id="pie-chart" style={{ height: '100%' }}></div>
        </div>
      </>
    );
  }
}

export default DashboardContainer;
