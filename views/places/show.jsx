const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <img src={ data.place.pic } />
            </div>
            <div>
                <h2>Rating</h2>
                <a>Not Rated</a>
            </div>
            <div>
                <h2>Description</h2>
                <a>Located in { data.place.city}, { data.place.state } and serving { data.place.cuisines }</a>
            </div>
            <div>
                <h2>Comments</h2>
                <a>No comments yet!</a>
            </div>
            <div className="buttons">
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </div>

          </main>
        </Def>
    )
}

module.exports = show