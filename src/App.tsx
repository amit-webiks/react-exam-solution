import './App.css'
import BookCard from './questions/question1'
import ToggleDiv from './questions/question2'
import ColorChanger from './questions/question3'
import ColoredDivs from './questions/question4'
import Question6 from './questions/question5'


let book ={
  name : "amit",
author: "amit",
year : 1995,
forKids : true,
}
function App() {

  return (
      <div>
        <div>Question 1</div>
      <BookCard book={book} /><hr />
      <div>Question 2</div>
      <ToggleDiv/>
      <hr />
      <div>Question 3</div>
      <ColorChanger />
      <hr />
      <div>Question 4</div>
      <ColoredDivs />
      <hr />
      <div>Question 5</div> 
      <Question6 />

    </div>
  )
}

export default App
