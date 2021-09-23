import React from 'react'

function Footer() {
    return (
        <div className="rowFooter">
            <div className="blockFooterApp">
                <div className="iconApp" id="twitter"></div>
                <a target="_blank" href="https://www.instagram.com/aleu_dima/" title="Инстогрум"><div className="iconApp" id="instagram"></div></a>
                <a target="_blank" href="" title="Тут будет приложние"><div className="iconApp" id="app"></div></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100069712394626" title="Фасе бук"><div className="iconApp" id="facebook"></div></a>
            </div>
            <div className="blockFooterEmail">
                <p>email: fabormake@gmail.com</p>
            </div>
            <div className="blockFooter">

            </div>
        </div>

    )
}

export default Footer()