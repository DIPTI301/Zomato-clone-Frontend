import React from 'react';
import pizzas from '../pizzadata';
import Pizza from '../components/Pizza';

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                {pizzas.map((pizza, index) => (
                    <div className="col-md-4 ">
                        <div>
                        <Pizza pizza={pizza} />
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}