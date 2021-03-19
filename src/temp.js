






import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { Radar } from 'react-chartjs-2'
import Test from './components/test'
import dataApi from './data/jsondata.json'


function App() {

    const obj = {
        sales: [2, 5, 5, 6, 7],
        purchases: [1.5, 4, 4.5, 2, 4],
        profit: () => {
            let profit = [];
            for (let i = 0; i < obj.sales.length; i++) {
                let profitAtI = (obj.sales[i] - obj.purchases[i]);
                profit.push(profitAtI);
            }
            return profit;
        }
    }



    const data = {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [
            {
                label: 'sales',
                data: obj.sales,
                borderColor: ['rgba(0, 255, 0,0.7)'],
                backgroundColor: ['rgba(0, 255, 0,0.4)'],
                pointBackgroundColor: ['red'],
                pointBorderColor: ['rgb(0, 51, 0)'],
                borderRadius: 33,
            },
            {
                label: 'purchases',
                data: obj.purchases,
                borderColor: ['rgba(255, 0, 0,0.7)'],
                backgroundColor: ['rgba(255, 0, 0,0.4)'],
                pointBackgroundColor: ['rgb(0, 51, 0)'],
                pointBorderColor: ['rgb(0, 51, 0)']
            }, {
                label: 'profit',
                data: obj.profit(),
                borderColor: ['rgba(0, 0, 255,0.7)'],
                backgroundColor: ['rgba(0, 255, 0,0.4)'],
                pointBackgroundColor: ['rgb(0, 51, 0)'],
                pointBorderColor: ['rgb(0, 51, 0)']
            },
        ]

    }
    const options = {
        title: {
            display: true,
            text: 'tittleText'
        },

        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 8
            }
        }
    }

    // maxFun = (passed)=>{
    //   let min = 400;
    //   let max = -1;
    //   for(let i = 0; i< dataApi.length;i++){
    //     if(dataApi[i])
    //   }
    // }





    //for getting sense of data...
    const testValues = (str) => {
        const likelyHoodCounter = {};
        for (let i = 0; i < dataApi.length; i++) {
            if (dataApi[i][str] in likelyHoodCounter) {
                likelyHoodCounter[dataApi[i][str]] = likelyHoodCounter[dataApi[i][str]] + 1;
            } else {
                likelyHoodCounter[dataApi[i][str]] = 1;
            }
        }
        return likelyHoodCounter;
    }
    const obb = testValues('topic')
    let total = 0;
    for (let keys in obb) {
        total += obb[keys];
    }
    console.log(obb, total)
    // ......................................


    // const testValues = (str) => {
    //   const likelyHoodCounter = {};
    //   for (let i = 0; i < dataApi.length; i++) {
    //     let value = dataApi[i][str];
    //     const pos = value.indexOf(",");
    //     const updatedStr = value.substring(pos + 5, pos + 10)
    //     let year = Number(updatedStr)
    //     if (year in likelyHoodCounter) {
    //       likelyHoodCounter[year] = likelyHoodCounter[year] + 1;
    //     } else {
    //       likelyHoodCounter[year] = 1;
    //     }
    //   }
    //   return likelyHoodCounter;
    // }
    // const obb = testValues('published')
    // let total = 0;
    // for (let keys in obb) {
    //   total += obb[keys];
    // }
    // console.log(obb, total)
    return (<>
        {/* <Radar data={data} options={options} /> */}
        <Test />
        {/* {name} */}
    </>)

}

export default App
