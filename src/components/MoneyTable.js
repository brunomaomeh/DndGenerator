import React from 'react';
import TreasureHoard from '../treasure-generator/TreasureHoard';

class MoneyTable extends React.Component {
    
    render() {
        let titles = ['Copper Pieces', 'Silver Pieces', 'Gold Pieces', 'Platinum Pieces']
        let classes = ['cooper', 'silver', 'gold', 'platinum']
        var level = this.props.hoardLevel;
        var hoard = new TreasureHoard();
        var money = hoard.money(level);
        var coins = [];

        for (var m in money) {
            coins.push(money[m]);
        }

        var display='none';
        if (coins.length > 0 && level >= 0) {
            display = '';
        }
        
        return(
            <div className="money-table-content card collapsable" 
                style={{display:`${display}`}}
            >
                <label for="money-table-ckeck" className="card-title-line">Money</label>
                <input id="money-table-ckeck" type="checkbox" defaultChecked></input>
                <div className="card-content">
                    {
                        coins.map((coin, i) => {     
                            return (
                                <div key={i} className="money-table-content-item card card-bordered shadow-size-35px">
                                    <div className={'money-table-content-item-content card-content ' + classes[i]}>
                                        {titles[i]}
                                    </div>
                                    <div className="card-footer-circle">{coin}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    };
}

export default MoneyTable;