import { useEffect, useState } from 'react';
import Link from 'next/link'
import footerStyles from '/styles/footer.module.scss'
import LoadingDiv, { Spinner } from '../LoadingDiv';
import { Center } from '@react-three/drei';

interface FormDataValue {
	name: string,
	email: string,
	message: string
}

const Footer = () => {
	let [ loading, setLoading ] = useState(false);
	let [ sent, setSent ] = useState(false);
	let [ error, setError ] = useState(false);

	useEffect( () => {
		if (error) {
			setTimeout( () => setError(false), 4000);
		}
	}, [error]);

	useEffect( () => {
		if (sent) {
			setTimeout( () => setSent(false), 4000);
		}
	}, [sent]);

	const formSubmit = async (ev) => {
		ev.preventDefault();
		setLoading(true);
		setSent(false);
		setError(false);

		const data: FormDataValue | any = Array.from(new FormData(ev.target)).reduce( (obj, [ name, value ]) => {
			obj[name] = value;
			return obj;
		}, {}) as FormDataValue;

		if (Object.values(data).some( (item: any) => item.length == 0 ) ) {
            setError(true);
            setLoading(false);
            return;
        }

		const req = await fetch('/api/contact/general', {
			method: "POST",
			headers: { "Content-Type": 'application/json' },
			body: JSON.stringify(data)
		});

		if (req.status === 200) {
			setSent(true);
			setLoading(false);
		} else {
			setError(true);
			setLoading(false);
		}
	}

	return(
		<div className="bg-blue-300">
			<div className={footerStyles.circly}></div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 py-10 px-4 sm:px-20">
				<div className="flex flex-col gap-y-8">
					<div className="grid grid-cols-2">
						<div>
							<h1 className="font-bold text-2xl mb-4">About</h1>
							<div className="inline-flex flex-col gap-2">
								<Link href="/about"><a>About</a></Link>
								<Link href="/services"><a>Services</a></Link>
								<Link href="/blog"><a>Blog</a></Link>
								<Link href="/faq"><a>FAQ</a></Link>
							</div>
						</div>
						<div>
							<h1 className="font-bold text-2xl mb-4">Company</h1>
							<div className="inline-flex flex-col gap-2">
								<Link href="/mentors/become"><a>Become a Mentor</a></Link>
								<Link href="/legal/privacy"><a>Privacy</a></Link>
								<Link href="/legal/terms"><a>Terms of Use</a></Link>
								<Link href="/legal/cookies"><a>Cookies</a></Link>
								<Link href="/help"><a>Help</a></Link>
							</div>
						</div>
					</div>
					<div className="col-span-2">
						<h1 className="text-3xl font-bold mb-4">Social Networks</h1>
						<div className="flex flex-row gap-x-4 items-center">
							<Link href="https://www.instagram.com/pre_ib/">
								<a>
									<svg className="w-12 h-12 hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 512 512">
										<g>
											<path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
											<path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
											<circle cx="351.5" cy="160.5" r="21.5" />
										</g>
									</svg>
								</a>
							</Link>
							<Link href="https://github.com/preib/preibwebsite">
								<a>
									<svg className="w-12 h-12 hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 512 512">
										<path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
									</svg>
								</a>
							</Link>
							<Link href="https://www.linkedin.com/company/pre-ib/about/">
								<a>
									<svg className="w-10 h-10 hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<form onSubmit={formSubmit} id="footerContactForm" className={footerStyles.contactBox + " bg-white py-6 px-10 border-2"} >
					{/* TODO MAKE CONTACT FORM FUNCTION
						- send email to preibcontact@gmail.com
					*/}
					<h1 className="text-4xl font-bold mb-8">Contact Us.</h1>
					<div className="flex flex-col gap-y-4">
						<input type="text" name="name" id="name" className="focus:ring transition-shadow" placeholder="Name..."/>
						<input type="email" name="email" id="email" className="focus:ring transition-shadow" placeholder="Email..."/>
						<textarea name="message" id="message" className="focus:ring transition-shadow" placeholder="Message..."></textarea>
					</div>
					<div className="flex mt-8 ">
						<button type="submit" className="flex flex-row p-3 font-semibold focus:ring focus:outline-none rounded-full transition-shadow">
							Send Message
							<svg className="w-6 h-6 ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</button>
						<div>
							{/* Output */}
							{
								loading && (
									<div className="grid place-items-start align-center p-4">
										<Spinner color="blue-600" />
									</div>
								)
							}
							{
								error && (
									<div className="grid place-items-start align-center p-4 text-red-700">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
										</svg>
									</div>
								)
							}
							{
								sent && (
									<div className="grid place-items-start align-center p-4 text-green-400">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									</div>
								)
							}
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Footer