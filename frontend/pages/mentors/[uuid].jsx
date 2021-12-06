import { apiUrl } from '../../config';
import Head from 'next/head';

export default function MentorByUUID({ mentor }) {
    return (
        <>
            <Head>
                <title>PreIb | {mentor.firstname}</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                {mentor.firstname} {mentor.lastname}
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { uuid } = context.query;
    const res = await fetch(`${apiUrl}/mentors/${uuid}`);
    if (res.status == 404) {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    } else if (res.status == 200) {
        const data = await res.json();
        return {
            props: {
                mentor: data.data
            }
        }
    } else {
        // 500
    }
}
