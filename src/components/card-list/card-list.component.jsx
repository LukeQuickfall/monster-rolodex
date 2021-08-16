/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
   // eslint-disable-next-line react/prop-types
    <div className='card-list'>
        
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
            ))}
    </div>
    );