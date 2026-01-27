import { MutableRefObject, useRef } from 'react';

import s from './Fireworks.module.css';

export const Fireworks = () => {
    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    return (
        <canvas
            ref={canvasRef}
            className={s.root}
            onClick={(e) => console.log(e.clientX, e.clientY)}
        />
    )
}