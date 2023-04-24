import React from "react";
import { Line } from 'react-chartjs-2';
import { PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Dashboard() {
  const dat = [
    { name: 'Geeksforgeeks', students: 350, color: '#98D89E' },
    { name: 'Technical scripter', students: 170, color: '#EE8484' },
    { name: 'Geek-i-knack', students: 50, color: '#F7DC7D' },

  ];
  const data = {
    labels: ["Weak 1", "Weak 2", "Weak 3", "Weak 4", "Weak 5"],

    datasets: [{
      data: [8, 7, 6, 8, 7, 5, 6, 6.5, 8.6, 8, 7.8, 6, 8, 7, 5, 6, 6.5, 8.6,],
      backgroundColor: 'transparent',
      borderColor: '#f26c6d',
      pointBorderColor: 'transparent',
      pointBorderWidth: 5,
      tension: 0.8
    },
    {
      data: [8, 6, 3, 5, 9, 7, 6, 6, 5.5, 6, 7, 8, 8, 6, 5, 6, 7, 6, 5],
      backgroundColor: "transparent",
      borderColor: "#9BDD7C",
      pointBorderColor: "transparent",
      pointBorderWidth: 5,
      tension: 1
    }
    ]
  };
  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        
        grid: {
          display: false
        }
      },
      y: {

        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'K'
        },
        grid: {
          borderDash: [200],

        }
      }
    }
  }

  return (
    <div className="wrappe">
      <div className="leftsid">
        <h3>Board.</h3>
        <div className="dashmain">
          <div className="das">
            <img src="dashboard_icon.png"></img>
            <div className="col"> Dashboard</div>
          </div>
          <div className="set">
            <img src="Vector (1).png"></img>
            <div> Transactions</div>
          </div>
          <div className="set">
            <img src="schedule_icon.png"></img>

            <div>Schedules</div>
          </div>

          <div className="set">
            <img src="user_icon.png"></img>
            <div> Users</div>
          </div>
          <div className="set">
            <img src="setting_icon.png"></img>
            <div> Setting</div>
          </div>
        </div>
      </div>
      <div className="rightsid">
        <div className="head">
          <div className="headdash">Dashboard</div>

          <div className="searchside">
            <div className="ser">
              <input type="text" placeholder="Search.." name="search">
              </input></div>
            <div className="bel">
              <img src="bell.png"></img></div>
            <div className="pic">
              <img src="Mask Group.png"></img></div>
          </div>
        </div>

        <div className="boxes">

          <div className="totalrevenue kj">
            <div className="totalimg">
              <img src="Vector (4).png"></img>
            </div>
            <p>Total Revenue
              <h3>$2,49,587</h3></p>
          </div>
          <div className="totaltransaction kj">
            <div className="totalimg">
              <img src="total_transactions_icon.png"></img>
            </div>
            <p>Total Transaction
              <h3>1,520</h3></p>
          </div>
          <div className="totallike ks">
            <div className="totalimg">
              <img src="Vector (2).png"></img>
            </div>
            <p>Total Likes
              <h3>9,721</h3></p>
          </div>
          <div className="totaluser ks">
            <div className="totalimg">
              <img src="Vector (3).png"></img>
            </div>
            <p>Total Users
              <h3>892</h3></p>
          </div>
        </div>

        <div className="allgraph">

          <div className="headinggraph">
            <div className="activ">
              Activities
            </div>
            <div className="colorgraph">
              <div className="guestc">
                <div className="gs">

                </div>
                <div>Guest </div>
              </div>
              <div className="userc">
                <div className="us"></div>
                <div>User</div>
              </div>
            </div>
          </div>


          <div className="graph">
            <Line
              data={data}
              options={options}
            ></Line>
          </div>
        </div>
        <div className="foot">
          <div className="piechart">
            <div className="pieheading">
              <h4>Top Product</h4>
            </div>
            <div className="piesecond">
              <div className="chartbox">

                <PieChart width={146} height={146}>

                  <Pie data={dat} dataKey="students" outerRadius={55} fill='red'>
                    {dat.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="pievalue">
                <div className="bas">
                <div className="us"></div>
                <h5>Basic Tees</h5>
                </div>
                <h4>55%</h4>
                <div className="bas">
                <div className="cus"></div>
                <div><h5>Custom Shorts Pant</h5></div>

                </div>
                <h4>31%</h4>
                <div className="bas">
                <div className="sus"></div>
                <div><h5>Super hoodies</h5></div>
                </div>
                <h4>14%</h4>
              </div>
            </div>
            </div>
            <div className="sedule">
              <div><h4>Today's Sedule</h4></div>
              <div className="gcol">Meeting with Supplier from katra road</div>
              <div className="light">14.00 -15.00</div>
              <div className="light">At sunset road , kutra </div>
              <div className="Bcol">Check Operaton at Giga factory</div>
              <div className="light">18.00 -20.00</div>
              <div className="light">at Central Jnadera </div>
            </div>

        </div>
      </div>
    </div>

  );
};

export default Dashboard;
