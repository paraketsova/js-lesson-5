import React from 'react';
import '../styles/button.scss'; // Tell webpack that Button.js uses these styles

export default function ButtonSCSS() {
  
    return (
      <button className="btn button-scss" >
        Button SCSS
      </button>
    )
  
}