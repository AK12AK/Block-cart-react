import React, { Component } from 'react'
import './BlockCart.css'
import { Link } from 'react-router-dom'

export class BlockCart extends Component {


    constructor(props) {
        super(props)
        this.state = {
            blocklist: [],
            currentPage: 1,
            isLoaded: false,
            searchLoad: false,
            perPage: 10,
            search: [],
            // lastIndex : 0,
            // firstIndex : 0
        }
    }

    pageCalculation() {
        const { blocklist, currentPage, perPage } = this.state
        let lastIndex = currentPage * perPage
        let firstIndex = lastIndex - perPage
        debugger
        return (blocklist.slice(firstIndex, lastIndex)
            .map(data => {  
                return (
                    <tr key={data.id} >
                        <td className="tabledata">{data.id}</td>
                        <td className="tabledata">{data.title}</td>
                        <td className="tabledata">{data.body}</td>
                    </tr>
                )
            })
        )

    }

    handlePreviousPage = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    handleNextPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    handleChangeSearch = (e) => {
        this.setState({
            search: e.target.value,
            searchLoad: true,
        })
    }

    handleSearch = () => {
        const { blocklist, currentPage, perPage, search } = this.state
        let lastIndex = currentPage * perPage
        let firstIndex = lastIndex - perPage
        return (blocklist.slice(firstIndex, lastIndex))
            .map((data) => {
                if (data.title.includes(search))
                    return (
                        <tr key={data.id} >
                            <td className="tabledata">{data.id}</td>
                            <td className="tabledata">{data.title}</td>
                            <td className="tabledata">{data.body}</td>
                    </tr>)
            })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((list) => {
                this.setState({
                    blocklist: list,
                    isLoaded: true
            })
        })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChangeSearch} placeholder='Search title'></input>
                <br />
                <br />
                {
                    (this.state.isLoaded) &&
                    <table className='pagination-table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.state.searchLoad && this.state.search != "") ? this.handleSearch() : this.pageCalculation()}
                        </tbody>
                    </table>
                }
                <br />
                <br />
                <div className='pagination-buttons'>
                    <button disabled={this.state.currentPage == 1} onClick={this.handlePreviousPage}>{"<"}</button>
                    <span>{this.state.currentPage}</span>
                    <button onClick={this.handleNextPage}>{">"}</button>
                </div>

            </>
        )
    }
}

export default BlockCart