import React, { useState } from "react";
import { mentorType } from "~/types/mentor";
import styles from "/styles/mentorPreview.module.scss";

const MentorPreview = ({ mentor }: { mentor: mentorType }) => {
    console.log(mentor);
    const backgroundImg = `/background_img/background_${Math.floor(
        Math.random() * 2 + 1
    )}.jpg`;
    const chips = [mentor.country, ...mentor.languages];
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className={styles["mentor-preview__background"]}>
            <img
                alt="background photo"
                src={backgroundImg}
                className={styles["mentor-preview__bg-img"]}
            />
            <div>
                <div className={styles["mentor-preview__body"]}>
                    <div className={styles["mentor-preview__info"]}>
                        <div
                            className={styles["mentor-preview--align-img-txt"]}
                        >
                            <img
                                className={styles["mentor-preview__pfp-img"]}
                                alt={`${mentor.firstName} ${mentor.lastName}'s profile picture`}
                                src={mentor.imageUrl}
                            />
                            <div>
                                <div
                                    className={
                                        styles[
                                            "mentor-preview__mentor-metadata"
                                        ]
                                    }
                                >
                                    <h3
                                        className={
                                            styles["mentor-preview__name"]
                                        }
                                    >
                                        {mentor.firstName} {mentor.lastName}
                                    </h3>
                                    <p>{chips.slice(0, 5).join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["mentor-preview__desc"]}>
                        {mentor.description}
                    </div>
                    <div className={styles["mentor-preview__form"]}>
                        <h3 className={styles["mentor-preview__title"]}>
                            Want {mentor.firstName} .{mentor.lastName[0]} as a
                            mentor?
                        </h3>
                        <div className={styles["mentor-preview__fields--format"]}>
                            <input
                                className={
                                    styles["mentor-preview__input--small"]
                                }
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                placeholder="First Name*"
                            />
                            <input
                                className={
                                    styles["mentor-preview__input--small"]
                                }
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="Last Name*"
                            />
                            <input
                                className={
                                    styles["mentor-preview__input--small"]
                                }
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                placeholder="Country of Origin*"
                            />
                        </div>
                        <input
                            className={styles["mentor-preview__input--large"]}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email Address*"
                        />
                        <textarea
                            className={styles["mentor-preview__input--large"]}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message (subject, goal with mentorship)"
                        />
                        <button className={styles["mentor-preview__send"]}>Send Message!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorPreview;
