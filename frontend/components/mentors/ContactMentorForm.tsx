import { useRef, useEffect, useState } from 'react';
import { mentorType } from 'types/mentor';
import { FormDataValue } from 'types/mentorContactForm';
import LoadingDiv from './LoadingDiv';
import contactMentorFormStyles from "/styles/contactMentorForm.module.scss";

function SimpleInput({ name, placeholder, type='text', extraClasses=''}) {
    return (
        <input placeholder={placeholder} name={name} type={type} className={`${extraClasses} w-full bg-gray-100 h-12 px-4 focus:shadow-md focus:ring transition-shadow rounded-xl z-0 focus:outline-none`} />
    )
}


export default function ContactMentorForm({ mentor }: { mentor: mentorType }) {
    const textareaRef: { current: any } = useRef();
    let oldScrollHeight = 0;
    const [ invalid, setInvalid ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ sent, setSent ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    useEffect( () => {
        if (!textareaRef.current) return;

        textareaRef.current.addEventListener('keyup', () => {
            if (textareaRef.current.scrollHeight > oldScrollHeight) {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                oldScrollHeight = textareaRef.current.scrollHeight;
            } else {
                textareaRef.current.style.height = 0;
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        });
    }, [textareaRef] );

    useEffect( () => {
        if (invalid) {
            setTimeout( () => setInvalid(false), 4000);
        }
    }, [invalid]);

    useEffect( () => {
        if (sent) {
            setTimeout( () => setSent(false), 4000);
        }
    }, [sent])

    useEffect( () => {
        if (error) {
            setTimeout( () => setError(false), 4000);
        }
    }, [error])

    const formSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);


        const data: FormDataValue | any = Array.from(new FormData(ev.target)).reduce( (obj, [ name, value ] ) => {
            obj[name] = value;
            return obj;
        }, {}) as FormDataValue;
        data.mentor_name = `${mentor.firstName} ${mentor.lastName}`;
        data.mentor_uuid = `${mentor.id}`;
        
        if (Object.values(data).some( (item: any) => item.length == 0 ) ) {
            setInvalid(true);
            setLoading(false);
            return;
        }
        
        const req = await fetch("/api/contact/mentor", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        if (req.status == 200) {
            setSent(true);
            setLoading(false);
        } else {
            setError(true);
            setErrorMessage(req.statusText + ": " + req.status);
            setLoading(false);
        }
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Want {mentor.firstName} {mentor.lastName}.?</h1>
            <h2 className="text-xl font-semibold mb-6">Fill out this form and you will be paired with your mentor within 2 buisness days</h2>

            <form onSubmit={formSubmit}>
                <div className="grid grid-cols-6 gap-y-2 gap-x-2 mt-8 w-full">
                    <SimpleInput placeholder="First Name" name="firstName" extraClasses="col-span-2"/> 
                    <SimpleInput placeholder="Last Name" name="lastName" extraClasses="col-span-2"/> 
                    <SimpleInput placeholder="Country" name="country" extraClasses="col-span-2"/>
                    {/* TODO Figure out field here */}
                    <SimpleInput placeholder="" name="" extraClasses="col-span-3" />
                    <SimpleInput placeholder="Email" name="email" type="email" extraClasses="col-span-3"/>
                    <textarea ref={textareaRef} className={contactMentorFormStyles.textarea + " col-span-6 focus:outline-none focus:shadow-md focus:ring transition-shadow p-4 bg-gray-100 rounded-lg"} name="message" placeholder={`Your message to ${mentor.firstName}`} />
                </div>

                <div className="mt-4 grid place-items-center">
                    <button 
                        type="submit"
                        className="w-full py-5 px-8 rounded-2xl text-white text-lg font-bold bg-green-500 
                        shadow-green-400/30 shadow-md hover:shadow-green-400/70 hover:shadow-lg 
                        hover:scale-105 focus:ring focus:outline-none transition-all duration-100"
                    >
                        Send Message!
                    </button>
                </div>
            </form>

            <div className="mt-4" />

            {
                loading && (
                    <div className="grid place-items-center rounded-lg p-4">
                        <LoadingDiv message="Sending message..."></LoadingDiv>
                    </div>
                )
            }

            {
                invalid && (
                    <div className="grid place-items-center rounded-lg p-4 border-2 border-yellow-600 bg-red-700">
                        <p className="text-lg text-white">
                            Please fill in all fields!!
                        </p>
                    </div>
                )
            }

            {
                sent && (
                    <div className="grid place-items-center rounded-lg p-4 border-2 border-green-600 bg-green-400">
                        <p className="text-lg text-white">
                            Message Sent!
                        </p>
                    </div>
                )
            }

            {
                error && (
                    <div className="grid place-items-center rounded-lg p-4 border-2 border-yellow-200 bg-yellow-400">
                        <p className="text-lg text-gray-700">
                            Error Occurred. {errorMessage}
                        </p>
                    </div>
                )
            }
        </div>
    )
}
