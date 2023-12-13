import { Component } from "react";

import Header from "../Header";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import "./index.css";

const data = [
  {
    vitamin: "VITAMIN A",
    range: 45,
  },
  {
    vitamin: "VITAMIN B3",
    range: 25,
  },
  {
    vitamin: "VITAMIN C",
    range: 8,
  },
];

const diseaseRiskPrediction = [
  {
    disease: "DIABETES",
    effect: "LOW",
    range: 30,
  },
  {
    disease: "AUTISM",
    effect: "HIGH",
    range: 34,
  },
  {
    disease: "CARDIOVASCULAR DISEASE",
    effect: "MEDIUM",
    range: 22,
  },
];

const biologicalScores = [
  {
    health: "Gut Health",

    range: 30,
  },
  {
    health: "Brain Health",

    range: 34,
  },
  {
    health: "Heart Health",

    range: 22,
  }, //
];

class Home extends Component {
  renderDiseaseRiskPrediction = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={diseaseRiskPrediction}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="range"
        >
          <Cell name="DIABETES" fill="#fecba6" />
          <Cell name="AUTISM" fill="#b3d23f" />
          <Cell name="CARDIOVASCULAR" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  );

  renderBiologicalScore = () => {
    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`;
      }
      return number.toString();
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={biologicalScores}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="health"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="range" name="Disease" fill="#1f77b4" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  renderTherapeuticInterventions = () => {
    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`;
      }
      return number.toString();
    };

    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vitamin"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="range"
            name="Vitamin Deficiency"
            fill="#1f77b4"
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  render() {
    return (
      <div className="con">
        <Header />
        <h1 className="head">Health Reports</h1>
        <div className="head-con">
          <div className="bar-chart">
            {this.renderTherapeuticInterventions()}
          </div>

          <div className="bar-chart">{this.renderBiologicalScore()}</div>
          <div className="pie-chart">{this.renderDiseaseRiskPrediction()}</div>
        </div>
      </div>
    );
  }
}

export default Home;
