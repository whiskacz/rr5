import React from 'react'

export default function PageTable() {

    const myData = [{
        info: "orange",
        color: "fcae1e",
        score: 4,
    },
    {
        info: "blue",
        color: "63c5da",
        score: 3,
    },
    {
        info: "red",
        color: "ff0800",
        score: 6,
    },
    ]

    const defaultData = [
        {label : "info",
        render: (element) => element.info 
    },
        {label : "color",
        render: (element) => element.color
    },
        {label : "score",
        render: (element) =>element.score
    },
    ]


  return (
    <table style={styledTable}>
        <thead>
            <tr>
                {defaultData.map((element) => (<th>{element.label}</th>))}
            </tr>
        </thead>
        <tbody>
            <tr>
                {myData.map((element) => {
                    const newArray = defaultData.map((column) => (
                        <td>{column.render(element)}</td>
                    ))


                    return (
                        newArray
                    )
                })}
            </tr>
        </tbody>
    </table>
  )
}


const styledTable = {
    background:"#ddd",
    position:"absolute",
    width:"20vw",
    height:"40vh",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
}