import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './App.css';

//

export default class App extends React.Component {

  state = {
    teams: []
  }

  async  componentDidMount(){
 let NFLApi = 'https://api.the-odds-api.com/v3/odds/?apiKey=56ad61c3cfdfd7b9d6ffc700dd08be39&sport=americanfootball_nfl&region=us&mkt=spreads'


  const res = await axios.get(NFLApi);

   this.setState({  teams : res.data.data  })
   // console.log(res.data.data)

 }
  renderTableData(){


    const game = Object.values(this.state.teams)
    console.log(game)
    let nflweek1 = []
    game.forEach((item, i) => {
        if(item.teams[0] === 'Houston Texans' && item.teams[1] === "Kansas City Chiefs"){
          nflweek1.push(item)
        } else if (item.teams[0] === 'Buffalo Bills' && item.teams[1] === "New York Jets") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Chicago Bears' && item.teams[1] === "Detroit Lions") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Green Bay Packers' && item.teams[1] === "Minnesota Vikings") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Miami Dolphins' && item.teams[1] === "New England Patriots") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Baltimore Ravens' && item.teams[1] === "Cleveland Browns") {
            nflweek1.push(item)
        }  else if (item.teams[0] === 'Carolina Panthers' && item.teams[1] === "Las Vegas Raiders") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Cincinnati Bengals' && item.teams[1] === "Los Angeles Chargers") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'New Orleans Saints' && item.teams[1] === "Tampa Bay Buccaneers") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Arizona Cardinals' && item.teams[1] === "San Francisco 49ers") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Dallas Cowboys' && item.teams[1] === "Los Angeles Rams") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'New York Giants' && item.teams[1] === "Pittsburgh Steelers") {
            nflweek1.push(item)
        } else if (item.teams[0] === 'Denver Broncos' && item.teams[1] === "Tennessee Titans") {
            nflweek1.push(item)
        }
    });
    console.log(nflweek1)

    return   nflweek1.map((item, key) => {

            return(
              <tr key = {key}>
                <td className = "content_teams">  {item.teams[0]} <br /> {item.teams[1]} </td>

                <td className =  "content_books">  <br /> {item.sites[3].odds.spreads.points[1]}</td>
                <td className =  "content_books">  <br /> {item.sites[4].odds.spreads.points[1]}</td>
                <td className =  "content_books">  <br /> {item.sites[5].odds.spreads.points[1]}</td>
              </tr>
             )
        })
  }

  render() {


    return (
      <div className = "tableContainer">
        <h2>  NFL Lines Week 1 </h2>
        <Table   size="sm" className = "nflWeek1">
          <thead>
            <tr classname = "header_row">
              <th className = "header_main_teams"> Match </th>
              <th className = "header_main_books"> MyBookie </th>
              <th className = "header_main_books"> Draft Kings </th>
              <th className = "header_main_books"> Fan Duel </th>
            </tr>
          </thead>
            <tbody>

              {this.renderTableData()}
            </tbody>
        </Table>
      </div>
    )
  }
}
