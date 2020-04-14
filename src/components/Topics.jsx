import React, { Component } from 'react'

export default class Topics extends Component {
    state = {
        topics: [{ "slug": "coding", "description": "Code is love, code is life" }, { "slug": "football", "description": "FOOTIE!" }, { "slug": "cooking", "description": "Hey good looking, what you got cooking?" }],
        articles: []
    }

    render() {
        return (
            <main>
                {/* request for the data to api/articles?, then map through to generate topic cards of title and articles  */}
                <ul>
                    {this.state.topics.map((topic) => {
                        return <li>
                            <h2>{topic.slug}</h2>
                        </li>
                    })}
                </ul>
           </main >
        )
    }

}
