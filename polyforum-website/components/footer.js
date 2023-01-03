import {Container, Footer as FooterBulma, Level} from 'react-bulma-components'

/**
 * Le footer de l'application
 */
export const Footer = () => {
    return (
        <FooterBulma>
            <Container>
                <Level>
                    <Level.Item>
                        <small className="level-item">
                            PolyForum By Benjamin, Thomas and Arthur  &copy; 2023
                        </small>
                    </Level.Item>
                </Level>
            </Container>
        </FooterBulma>
    )
}