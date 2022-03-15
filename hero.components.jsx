import { Component } from "react";
import {connect} from "react-redux";
import { addHero }from "../redux/index.js";

const mapStateToProps =(state) => {
    return{
        numOfHeroes : state.numOfHeroes
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addHero : () =>dispatch(addHero())
    }
}
class HeroComponent extends Component{
    render(){