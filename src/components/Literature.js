import React from 'react'
import { Link } from 'react-router-dom'

function Literature() {
    return (
        <div className='row_double' id="literature">
            <div className="rowSelector">
                <Link to="/"><div className="back_arrow"></div></Link>
                    <p>1 / 4</p>
                <Link to="/cours"><div className="forward_arrow"></div></Link>
            </div>
            <div className="makeBy">
                <h4>USEFUL LITERATURE</h4>
                <ul>
                    <li><a target="_blank" title="Справочник по Html" href="http://htmlbook.ru/">Html Book</a></li>
                    <li><a target="_blank" title="Книга про дизайн" href="https://www.mann-ivanov-ferber.ru/assets/files/bookparts/the-design-of-everyday-things/dpv_read.pdf">Design of ussualy things</a></li>
                    <li><a target="_blank" title="Книга про шрифты" href="http://www.newsman.tsu.ru/wp-content/uploads/library/Typographics.pdf">Emil Ruder 'Tipographics'</a></li>
                    <li><a target="_blank" title="Книга про интерфейс" href="https://www.nngroup.com/articles/aesthetic-minimalist-design/?lm=design-everyday-things-revised&pt=book">Nielsen and Norman UX</a></li>
                    <li><a target="_blank" title="Быстрая Верстка" href="https://bootstrap-4.ru/">Bootstrap 4</a></li>
                </ul>
                <h4 className="copyright">© 2021 - Medvedev Dmitriy</h4>
                {/* <p>© 2021 - Medvedev Dmitriy</p> */}
            </div>
        </div>
    )
}

export default Literature()