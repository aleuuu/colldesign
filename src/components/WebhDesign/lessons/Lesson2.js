import React from 'react'
import { Link } from 'react-router-dom'
import F2 from '../photo/2.png'
import F3 from '../photo/3.png'

function WebhLesson2() {
    return (
        <div className="mainCours" id="web">
            <Link to="/cours/web/lesson-1"><div className="back_arrowBlack"></div></Link>
            <div className="containerforKurs" id="lessons">
                <div>
                    <h1>Second Lesson Web Design</h1>
                    <p id="border">
                        Создаем основную структуру сайта (Его скелет)
                    </p>
                    <p>
                        Для этого нужно ввести в начале строки ! и нажать "Tab"
                        <br></br>
                        <br></br>
                        Должно получиться как на скриншотах снизу
                        <br></br>
                        <br></br>
                    </p>
                    <div className="rowImg">
                        <img src={F2} alt="description of image"></img>
                        <img src={F3} alt="description of image"></img>
                    </div>

                    <pre>Сверху представлена структура сайта</pre>
                </div>


            </div>
            <Link to="/cours/web/lesson-3"><div className="forward_arrowBlack"></div></Link>
        </div>
    )
}

export default WebhLesson2();