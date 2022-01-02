import { useRef, useEffect, useState } from 'react';
import LoadingDiv from './LoadingDiv';
import { mentorType } from '../../types/mentor';
import { FormDataValue } from '../../types/mentorContactForm';

function SimpleInput({ name, placeholder, width='300px', type='text', extraClasses='', outerClasses="mt-4" }) {
    return (
        <div className={`${outerClasses}`}>
            <input placeholder={placeholder} style={{width: width}} name={name} type={type} className={`${extraClasses} bg-gray-100 h-12 px-4 focus:shadow-md rounded-xl z-0 focus:outline-none`} />
        </div>
    )
}


export default function ContactMentorForm({ mentor }: { mentor: mentorType }) {
    const textareaRef: { current: any } = useRef();
    let oldScrollHeight = 0;
    const [ invalid, setInvalid ] = useState(false);
    const [ error, setError ] = useState(false);
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
        }, {});
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
            setLoading(false);
        }
    }

    return (
        <div>
            <h3 className="text-2xl text-blue-600 font-bold">
                Contact { mentor.firstName }
            </h3>

            <p className="mt-1 text-md font-bold text-black">
                Fill out this form and you will be paired
                with your mentor within 2 business days.
            </p>

            <form onSubmit={formSubmit}>
                <div className="mt-8 grid grid-cols-2 w-full">

                    <SimpleInput width="90%" placeholder="First Name" name="firstName" />
                    
                    <SimpleInput width="90%" placeholder="Last Name" name="lastName" />
                    
                    <SimpleInput width="90%" placeholder="Country" name="country" />

                    <SimpleInput width="90%" placeholder="Email" name="email" type="email" />
                </div>
                
                <div className="w-full rounded-lg mt-4">
                    <textarea style={{height: '56px'}} ref={textareaRef} className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:outline-none overflow-hidden" name="message" placeholder={`Your message to ${mentor.firstName}`} />
                </div>

                <div className="mt-4 grid place-items-center">
                    <button type="submit" className="w-full py-2 px-8 rounded-lg border-blue-600 border-2 bg-blue-400 text-lg text-white focus:ring focus:outline-none hover:shadow-lg transition-all duration-100 transform hover:scale-105 font-bold">
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
                            Error Occurred.
                        </p>
                    </div>
                )
            }
        </div>
    )
}
