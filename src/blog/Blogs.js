import React from 'react';
import axios from "axios";


class Blogs extends React.Component {
    state = {
        blogs: []
    }

    componentDidMount(props) {
        this.loadBlogPosts()
    }
    
    loadBlogPosts = () => {
        axios.get(process.env.REACT_APP_BLOG_SERVICE + '/blogs')
            .then(resp => {
                console.log(resp.data)
                this.setState(prevState => ({
                    blogs: resp.data
                }));
            })
    }

    render() {
        return (
            <div>
                <BlogList blogs={this.state.blogs}/>
                <BlogCreationForm updateBlogPosts={this.loadBlogPosts}/>
            </div>
        );
    }
}

const BlogList = (props) => {
    return (
        <div class="container">
            {props.blogs.map(blog => <BlogEntry {...blog}/>)}
        </div>
    );
}


const BlogEntry = (props) => {
    return (
        <div class="row" style={{margin: '3em', border: 'solid'}}>
            <div class="col-sm-12" style={{margin: '0.5em'}}><h3>{props.title}</h3></div>
            <div class="col-sm-12" style={{margin: '0,5em'}}>{props.text}</div>
            <div class="col-sm-12" style={{margin: '0.5em'}}><i>- {props.author}</i></div>
        </div>
    );
};

class BlogCreationForm extends React.Component {
    state = {
        title: '',
        text: '',
        author: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_BLOG_SERVICE + '/user/blog/create', {
            title: this.state.title,
            text: this.state.text,
            author: this.state.author,
        }).then(resp => {
            this.props.updateBlogPosts();
            this.setState({title: '', text: '', author: ''});
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.title}
                       onChange={(event) => this.setState({title: event.target.value})}
                       placeholder="Title" required/>
                <input type="text"
                       value={this.state.text}
                       onChange={(event) => this.setState({text: event.target.value})}
                       placeholder="Text" required/>
                <input type="text"
                       value={this.state.author}
                       onChange={(event) => this.setState({author: event.target.value})}
                       placeholder="Author" required/>
                <button type="submit">Create Blog Post</button>
            </form>
        );
    }
}


export default Blogs;