import { createSlice } from "@reduxjs/toolkit";
import words from "./words.json";

export const typingSlice = createSlice({
  name: "typer",
  initialState: {
    theme: false,
    language:true,
    answer: "",
    wordList: [],
    wordsShown: [],
    lineAt:0,
    right: false,
    starting:false,
    eachTime:20,
    started:false,
    time:60,
    finished:false,
    rights:[],
    wrongs:[],
    totalChar:0,
    rightChar:0
  },
  reducers: {
    themeChange: (state) => {
      state.theme = !state.theme;
    },
    langChange: (state) => {
      state.language = !state.language;
    },
    setWordList: (state) => {
      state.wordList = words;
      console.log(state.wordList);
    },
    bringWords: (state) => {
      var wordArr = [];
      for (let i = 0; i < state.eachTime; i++) {
        let rndm = Math.floor(Math.random() * words.words.length);
        let giren = words.words[rndm];
        if(state.starting){document.getElementById(`item${i}`).classList = "askedSpan"}
        wordArr.push(giren);
      }
      state.wordsShown = wordArr;
      state.starting = true;
      state.lineAt = 0;
    },
    answerSet: (state, action) => {
      state.answer = action.payload;
      if(state.answer.toLocaleLowerCase(state.language ? "tr" : "en") !== state.wordsShown[state.lineAt][state.language ? "turkish" : "english"].toLocaleLowerCase(state.language ? "tr" : "en").slice(0,action.payload.length)){
        document.getElementById(`item${state.lineAt}`).classList.add("wrong");
      }
      else{
        document.getElementById(`item${state.lineAt}`).classList.remove("wrong");
      }
    },
    answered: (state) => {
      state.totalChar += state.answer.length;      
      if(state.answer.toLocaleLowerCase(state.language ? "tr" : "en") === state.wordsShown[state.lineAt][state.language ? "turkish" : "english"].toLocaleLowerCase(state.language ? "tr" : "en")){
        state.right = true;
        document.getElementById(`item${state.lineAt}`).classList.add("right")
        state.rights.push(state.answer);
        state.rightChar += state.answer.length;
      }
      else{
        state.right = false;
        document.getElementById(`item${state.lineAt}`).classList.add("wrong");
        state.wrongs.push(state.answer)
      }
      document.getElementById(`item${state.lineAt}`).classList.remove("working");
      state.lineAt += 1;
      state.answer = "";
      state.space = false;
      state.lineAt < (state.eachTime) ? document.getElementById(`item${state.lineAt}`).classList.add("working") : document.getElementById(`item0`).classList.add("working");
    },
    startTyping: (state) => {
      state.started = true
    },
    setTime: (state) => {
      state.started = true
      if(state.time > 0){state.time -= 1}
      else{
        state.finished = true;
      }
    } 
  },
});

export const { themeChange,langChange, setWordList, bringWords, answerSet, answered, startTyping, setTime} =
  typingSlice.actions;
export default typingSlice.reducer;
