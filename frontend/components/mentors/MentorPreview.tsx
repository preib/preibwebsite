import React, { useState } from "react";
import { mentorType } from "~/types/mentor";
import styles from "/styles/mentorPreview.module.scss";

const MentorPreview = ({ mentor }: { mentor: mentorType }) => {
    console.log(mentor);
    const chips = [mentor.country, ...mentor.languages];
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(null);

    const submitEmail = async (
        firstName,
        lastName,
        country,
        email,
        message
    ) => {
        const res = await fetch("/api/contact/mentor", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                country,
                email,
                message,
                mentor_name: mentor.firstName,
                mentor_uuid: mentor.id,
            }),
        });

        if (res.status !== 200) setSuccess(false);
        else setSuccess(true);
    };

    return (
        <div className={styles["mentor-preview__background"]}>
            <img
                alt="background photo"
                src={`/background_img/background_${Math.floor(
                    Math.random() * 2 + 1
                )}.jpg`}
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
                    <div className={styles["mentor-preview__course-list"]}>
                        {mentor.courses.map((course, i) => (
                            <div
                                key={i}
                                className={
                                    styles[
                                        `mentor-preview__course--${
                                            course.strength > 50
                                                ? "strong"
                                                : "weak"
                                        }`
                                    ]
                                }
                            >
                                {course.courseName}
                            </div>
                        ))}
                    </div>

                    <div className={styles["mentor-preview__desc"]}>
                        {mentor.description}
                    </div>
                    <form
                        className={styles["mentor-preview__form"]}
                        onSubmit={() =>
                            submitEmail(
                                firstName,
                                lastName,
                                country,
                                email,
                                message
                            )
                        }
                    >
                        <h3 className={styles["mentor-preview__title"]}>
                            Want {mentor.firstName} .{mentor.lastName[0]} as a
                            mentor?
                        </h3>
                        <div
                            className={styles["mentor-preview__fields--format"]}
                        >
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
                        <button className={styles["mentor-preview__send"]}>
                            Send Message!
                        </button>
                    </form>
                    {success !== null &&
                        (success ? "Message sent!" : "Failed to sent message!")}
                </div>
            </div>
        </div>
    );
};

export default MentorPreview;
