import React from 'react'
import { Link } from 'react-router-dom'



function WebhLesson3(props) {
    debugger;
    return (
        <div className="mainCours" id="web">
            <Link to="/cours/web/lesson-1"><div className="back_arrowBlack"></div></Link>
            <div className="containerforKurs" id="lessons">
                <div>
                    <h1>Third Lesson Web Design</h1>
                    <p id="border">
                        Первый тег, который мы изучем называется div
                    </p>
                    <p>
                        обозначается он следующим образом {props.text}
                    </p>
                    <div className="rowImg">
                        <img alt="description of image"></img>
                        <img alt="description of image"></img>
                    </div>
                    <pre>Сверху представлена структура сайта</pre>
                    <textarea placeholder="напиши код"></textarea>

                </div>

            </div>
            <Link to="/cours/web/lesson-3"><div className="forward_arrowBlack"></div></Link>
        </div>
    )
}

export default WebhLesson3;