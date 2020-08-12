import React, {Component} from 'react'
import '../css/global.css'
import '../css/layout.css'
import '../css/components.css'

class Introduction extends Component{
    render(){
        return(
            <div>
                <div class="container">
                   <h1 class="title">Mavel's Fearless</h1>
                   <p class="subtitle">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                        molestias earum eveniet.
                   </p>
                  <div class="search-bar">
                     <input type="search" placeholder="Search" />
                  </div>

                </div> 
           </div> 
        )
    }
}

export default Introduction