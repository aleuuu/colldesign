import React from 'react'
import { Link } from 'react-router-dom'
import AtWork from './photo/webDesign.png'
import AtWork1 from './photo/Web-Design.jpg'


function WebhMain() {
    return (
        <div className="mainCours" id="web">
            <Link to="/cours"><div className="back_arrowBlack"></div></Link>
            <div className="containerforKurs">
                <div>
                    <h1>WEB DESIGN</h1>
                    <p>
                        Что же такое Web Design?
                    </p>
                    <p>
                        Это отрасль веб-разработки и разновидность дизайна, в задачи которой входит проектирование пользовательских веб-интерфейсов для сайтов или веб-приложений.
                        <br></br>
                        <br></br>
                        Веб-дизайнеры:
                        <ul>
                            <li className='webG'>проектируют логическую структуру веб-страниц;</li>
                            <li className='webG'>продумывают наиболее удобные решения подачи информации;</li>
                            <li className='webG'>занимаются художественным оформлением веб-проекта.</li>
                        </ul>
                        Грамотный
                        веб-дизайнер должен быть знаком с новейшими веб-технологиями и обладать
                        соответствующими художественными качествами. Большая часть специалистов,
                        работающих в области дизайна, обычно концентрирует в себе такое творческое
                        образование, как студия дизайна.
                        Веб-дизайнер — сравнительно молодая профессия, и профессиональное образование
                        в области веб-дизайна в России пока не распространено. В связи с увеличением
                        спроса на представительство в Сети растёт и спрос на дизайн сайтов,
                        увеличивается количество веб-дизайнеров. В настоящее время услуги
                        веб-дизайна предоставляют как веб-студии, так и частные лица (веб-дизайнеры,
                        являющиеся фрилансерами).
                    </p>
                    <div className="rowImage">
                        {/* <img src={AtWork} id="Img1"></img>
                        <img src={AtWork1} id="Img2"></img> */}
                    </div>
                </div>
            </div>
            <Link to="/cours/web/lesson-1"><div className="forward_arrowBlack"></div></Link>
        </div>
    )
}

export default WebhMain();