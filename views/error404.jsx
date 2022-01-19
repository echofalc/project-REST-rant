const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1> 404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/funny_dog.jpg" alt="Funny 404 Dog" />
                </div>
            </main>
        </Def>
    )
}

module.exports = error404