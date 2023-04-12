import './ExpenseItem.css';
import  ChildComponent  from './childcomponent.js'
import Props from './props';

function ExpenseItem(props){
    let count = 0;
        return (
        <div>
            <table>
                <tbody style={{background:"red", textAlign:"right"}} className="table">
                <tr>
                    <th>test3</th>
                    <th>test2</th>
                    <th>test3</th>
                </tr>
                <tr>
                    <td>car</td>
                    <td>details</td>
                    <td><button>$price</button></td>
                </tr>
                <tr>
                    <td>bike cycle</td>
                    <td>details</td>
                    <td><button>$price</button></td>
                </tr>
                <tr>
                    <td>bike</td>
                    <td>details</td>
                    <td><button>$price</button></td>
                </tr>
            </tbody>
            </table>
            <ChildComponent data = {count}/>
        </div>

    )
}

export default ExpenseItem;