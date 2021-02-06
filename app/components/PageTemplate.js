import React, {useEffect} from 'react'
import Container from './Container'

export default function PageTemplate(props) {
    useEffect(() => {
        document.title = `Queenschat | ${props.title}`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container wide={props.wide}>
            { props.children }            
        </Container>
    )
}
