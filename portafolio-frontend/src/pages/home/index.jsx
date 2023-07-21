// import React, {useState, useEffect} from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data =[
    {name:"maria", age:10, weight:60},
    {name:"pedro",age:35,weight:84 },
    {name: 'juan', age: 79, weight: 120},
]

// const fetchData = async()=>{
//     const response = await axios.get('http://localhost:3000/api/quotation/getQuotations')
//     // console.log(response.data.customers)
//     setrows(response.data.quotations)
// }
// fetchData();
const Home=()=>{
    return(
        <><h2 className='ColorPrimary'>TOTAL COTIZACIONES</h2>
        <ResponsiveContainer width="70%" aspect={2}>
            <BarChart
                data={data}
                width={500}
                height={500}
                margin={{
                    top: 20,
                    right:1,
                    left: 200,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="weight" fill="#6b48ff" barSize={50} />
                <Bar dataKey="age" fill="#22B5BF" barSize={50}/>
            </BarChart>
        </ResponsiveContainer></>
    )
}

export default Home