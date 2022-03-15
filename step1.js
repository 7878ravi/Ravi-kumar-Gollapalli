import React, { Component } from "react";
import { createStore } from "redux";
//--------------------------------------------------
// action
const ADD_HERO = "ADD_HERO";
const REMOVE_HERO = "REMOVE_HERO";
const ADD_MOVIE="ADD_MOVIE";
const REMOVE_MOVIE="REMOVE_MOVIE";
 
// action creator
const addHero = ()=>{
    return {
        type : ADD_HERO
    }
};