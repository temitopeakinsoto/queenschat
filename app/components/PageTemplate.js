import React, {useEffect} from 'react'

export default function PageTemplate(props) {
    useEffect(() => {
        document.title = `Queenschat | ${props.title}`;
        document.body.scrollTop = 0;
    }, []);

    return (
        <div>
            { props.children }            
        </div>
    )
}
