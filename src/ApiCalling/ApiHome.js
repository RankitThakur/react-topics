import { Link } from "react-router-dom"

export function ApiHome (props) {
    console.log(props.api)
    let array = props.api

    return (
        <>   
        <table>     
            <tbody>
                <tr>
                    <th>userId</th>
                    <th>Id</th>
                    <th>title</th>
                    <th>Image</th>
                </tr>
                {
                    array.map((res)=> (
                        <tr>
                            <td>{res.userId}</td>
                            <td>{res.id}</td>
                            <td>{res.title}</td>
                            <td>{res.completed}</td>
                        </tr>
                    ))
                }               
            </tbody>

        </table>
        </>
    )
}