import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Jasmine Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Jasmine Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Jasmine Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Jasmine L.</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public