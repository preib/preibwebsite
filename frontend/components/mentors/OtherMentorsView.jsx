import { Component } from 'react';
import LoadingDiv from "./mentors/LoadingDiv";
import MentorCard from './mentors/MentorCard';

export default class OtherMentorsView extends Component {
    state = {
        error: null,
        mentors: null
    }

    async componentDidMount() {
        const res = await fetch(`/api/mentors/random?limit=4`);
        if (res.status == 200) {
            const { data } = await res.json();
            this.setState({ mentors: data });
        } else {
            this.setState({ error: true });
        }
    }

    render() {
        if (this.state.error) {
            return (
                <div className="grid place-items-center py-12 px-8">
                    <p className="text-red-700 text-lg">
                        Error :(
                    </p>
                </div>
            )
        } else if (this.state.mentors) {
            return (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        this.state.mentors.map( (mentor) => <MentorCard key={mentor.id} mentor={mentor} /> )
                    }
                </div>
            )
        } else {
            return (
                <div className="grid palce-items-center py-12 px-8">
                    <LoadingDiv message="Loading..." />
                </div>
            )
        }
    }
};
