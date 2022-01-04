import { Component, createRef } from 'react';

export default class InfiniteScroller extends Component {
    constructor(props) {
        super(props);
        this.anchor = createRef();
    }
    
    componentDidMount() {
        const observer = new IntersectionObserver( (e) => {
            if (this.props.onReachEnd) {
                this.props.onReachEnd();
            }
        })
        observer.observe(this.anchor.current);
    }

    render() {
        return (
            <>
                {this.props.children}
                <div id="anchor?" ref={this.anchor} />
            </>
        )
    }
}
