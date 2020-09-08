import React from "react";

class SideBar extends React.Component{

    state = {
        button: false
    };

    Click = () =>{
        this.setState({button:true})
    };

    render() {
        return(
            <div>
                <button onClick={this.Click}>
                    {!this.state.button
                        ?"Нажми на меня"
                        :"Ура"}
                </button>
            </div>
        )
    }
}

export default SideBar;