import { Component } from 'react';
import LoadingDiv from "../LoadingDiv";
import { sleep } from '../../utils';

export default class TopReview extends Component {
    state = {
        review: null
    }

    async componentDidMount() {
        const res = await fetch(`/api/reviews/mentors/top/${this.props.mentor.id}`);
        if (res.status == 200) {
            const { data } = await res.json();
            this.setState({ review: data });
        } else {
            this.setState({ review: 404 });
        }
    }

    render() {
        if (this.state.review) {
            if (this.state.review == 404) {
                return (
                    <div className="py-12 mx-6 border-2 border-gray-500 flex rounded-lg justify-center">
                        <p className="text-lg text-gray-500">
                            No Reviews for { this.props.mentor.firstName }
                        </p>
                    </div>
                )
            } else {
                return (
                    <div className="">
                        <h5 className="text-lg font-bold text-black">
                            Top Review
                        </h5>

                        <div className="mt-4">
                            <div>
                                Some Rating Here
                            </div>

                            <div className="w-8/12">
                                <p className="text-md text-gray-600">
                                    { this.state.review.review }
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    - { this.state.review.reviewer }
                                    { this.state.review.identity_details &&
                                        <>
                                            <br /> { this.state.review.identity_details }
                                        </>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }


        } else {
            return (
                <div className="w-11/12 sm:w-8/12 mx-auto">
                    <LoadingDiv message="Loading" />
                </div>
            )
        }
    }
}