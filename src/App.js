import './index.css';
import Left from './components/Left'
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Content from './components/Main/MainPage'
import Course from './components/Course/Course'
import WebhMain from './components/WebhDesign/MainPageW'
import WebLesson1 from './components/WebhDesign/lessons/Lesson1'
import WebLesson2 from './components/WebhDesign/lessons/Lesson2'
import GraphMain from './components/GraphDesigne/MainPageG'
import MakeBy from './components/Creator'
import Form from './components/Form'
import FormL from './components/FormL'
import WebLesson3 from './components/WebhDesign/lessons/Lesson3'
import Chat from './components/Chat'
import Photo1 from './components/PhotoPages/Photo1'
import Photo2 from './components/PhotoPages/Photo2'
import Photo3 from './components/PhotoPages/Photo3'
import Photo4 from './components/PhotoPages/Photo4'
import Photo5 from './components/PhotoPages/Photo5'
import Photo6 from './components/PhotoPages/Photo6'



function App(props) {
  debugger;
      return (
        <Router>
          <div className="wrapper">
            <Left></Left>
              <Switch>
                {/* ..........................................ФОТОГРАФИИ....................................... */}
                <Route path="/photo/6">
                  {Photo6}
                </Route>
                <Route path="/photo/5">
                  {Photo5}
                </Route>
                <Route path="/photo/4">
                  {Photo4}
                </Route>
                <Route path="/photo/3">
                  {Photo3}
                </Route>
                <Route path="/photo/2">
                  {Photo2}
                </Route>
                <Route path="/photo/1">
                  {Photo1}
                </Route>
                {/* ..............................................ЧАТ.........................................*/}
                <Route path="/chat">
                  <Chat posts={props.state.posts} addPost={props.addPost}></Chat>
                </Route>
                <Route path="/makeby">
                  {MakeBy}
                </Route>
                {/* ..............................ФОРМЫ АВТОРИЗАЦИИ И РЕГИСТРАЦИИ............................*/}
                <Route path="/autorisation">
                  {FormL}
                </Route>
                <Route path="/registration">
                  {Form}
                </Route>
                {/* ......................................ГРАФИЧЕСКИЙ ДИЗАЙН...................................*/}
                <Route path="/cours/graph">
                  {GraphMain}
                </Route>
                {/* ..........................................ВЕБ ДИЗАЙН...................................*/}
                <Route path="/cours/web/lesson-3">
                  <WebLesson3 text={props.text} popa={props.popa}></WebLesson3>
                </Route>
                <Route path="/cours/web/lesson-2">
                  {WebLesson2}
                </Route>
                <Route path="/cours/web/lesson-1">
                  {WebLesson1}
                </Route>
                <Route path="/cours/web">
                  {WebhMain}
                </Route>
                {/* ............................................КУРСЫ...................................*/}
                <Route path="/cours">
                  {Course}
                </Route>
                {/* ...........................................ГЛАВНАЯ...................................*/}
                <Route path="/">
                  {Content}
                </Route>
              </Switch>
          </div>
        </Router>
      );
}

export default App;
