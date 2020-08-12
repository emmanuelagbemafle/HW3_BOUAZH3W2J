import React, {Component} from 'react'
import '../css/sample-wallpaper.css'

import Wallpaper1 from '../img/venom-2.jpg'
import Wallpaper2 from '../img/hulk-1.jpg'
import Wallpaper3 from '../img/venom-1.jpg'


class Wallpaper extends Component{
    render(){
        return(
            <div>
                <div className="container">
                <div className="sample-wallpaper">
                <article className="wallpaper">
                   <img src={Wallpaper1} alt="Wallpaper #1" className="wallpaper" />
                </article>
                <article className="wallpaper">
                   <img src={Wallpaper2} alt="Wallpaper #1" className="wallpaper" />
                </article>
                <article className="wallpaper">
                   <img src={Wallpaper3} alt="Wallpaper #1" className="wallpaper" />
                </article>
                </div>
                </div>
            </div>
        )
    }
}
export default Wallpaper
