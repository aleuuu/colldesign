import React from 'react'
import { Link } from 'react-router-dom'
import F1 from '../photo/1.png'


function WebhLesson1() {
    return (
        <div className="mainCours" id="web">
            <Link to="/cours/web/"><div className="back_arrowBlack"></div></Link>
            <div className="containerforKurs" id="lessons">
                <div>
                    <h1>First Lesson Web Design</h1>
                    <p id="border">
                        <a href="https://code.visualstudio.com/Download">Программа</a> в которой мы будем с вами работать называется Visual Studio Code
                    </p>
                    <p>
                        Я считаю ее самой удобной
                        <br></br>Но если говорить в кратце, в ней нет ничего лишнего, а скорее совсем наооборот,
                        <br></br>есть все самое нужное и необходимое
                        <br></br>
                        <br></br>
                        <br></br>
                        Итак, после установки нам нужно открыть программу и создать свой первый документ
                        <br></br>
                        <br></br>
                    </p>
                    <img src={F1} alt="description of image"></img>
                    <pre>Сделать это можно перейдя во вкладку File -> New File (Или же нажав комбинацию клавиш Shift + N)</pre>
                    <p>Создать файл нужно с расширением <strong>html</strong>, обычно их принято называть index.html</p>
                </div>


            </div>

            <Link to="/cours/web/lesson-2"><div className="forward_arrowBlack"></div></Link>
        </div>
    )
}

export default WebhLesson1();