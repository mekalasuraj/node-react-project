import React,{Component} from 'react';

class Practice extends React.Component{

    constructor(props){
        super(props);
    }
    onClickDivOne=(e)=>{
        e.stopPropagation();
        //e.preventDefault();
        console.log('div1 is clicked')
    }

    onClickDivTwo=(e)=>{
        e.stopPropagation();
        //e.preventDefault();
        console.log('div2 is clicked')
    }

    onClickDivThree=(e)=>{
        e.stopPropagation();
        //e.preventDefault();
        console.log('div3 is clicked')
    }
    render(){
        return(
            <div>
               <div onClick={this.onClickDivOne}>
  <div onClick={this.onClickDivTwo}>
    <div onClick={this.onClickDivThree}>
      Click me!
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default Practice;
